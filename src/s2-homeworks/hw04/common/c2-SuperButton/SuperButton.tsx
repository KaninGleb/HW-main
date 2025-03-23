import React, {ButtonHTMLAttributes, DetailedHTMLProps, useState} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        children,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    // const finalClassName =
    //     s.button +
    //     (disabled ? s.disabled
    //         : xType === 'red'
    //             ? s.red + (xType === 'secondary' ? ' ' + s.secondary : '') : '') // задачка на смешивание классов

    // const finalClassName =
    //     s.button +
    //     (xType === 'default' ? ` ${s.default}` : '') +
    //     (disabled ? ` ${s.disabled}` : '') +
    //     (xType === 'red' ? ` ${s.red}` : '') +
    //     (xType === 'secondary' ? ` ${s.secondary}` : '');

    const finalClassName = `${s.button} ${disabled ? s.disabled : ''} ${xType === 'red' ? s.red : xType === 'secondary' ? s.secondary : s.default}`;

    const buttonText =
        disabled ? children :
        isPressed ? 'On Press' :
        isHovered ? 'On Hover' : children;

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            onMouseEnter={() => !disabled && setIsHovered(true)}
            onMouseLeave={() => !disabled && setIsHovered(false)}
            onMouseDown={() => !disabled && setIsPressed(true)}
            onMouseUp={() => !disabled && setIsPressed(false)}

            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        >
            {buttonText}
        </button>
    )
}

export default SuperButton;