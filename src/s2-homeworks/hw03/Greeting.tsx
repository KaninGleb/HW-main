import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {useSelector} from 'react-redux';
import {selectAppTheme} from '../hw12/themeSelector';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onBlur: () => void
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string
    totalUsers: number
    lastUserName?: string
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    }
) => {
    const themeId = useSelector(selectAppTheme)
    const inputClass = error ? s.errorInput : s.input;

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div className={`${s.text} ${themeId === 1 ? '' : s.whiteText}`}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <input
                        id={'hw3-input'}
                        value={name}
                        onChange={setNameCallback}
                        className={inputClass}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                    />
                    <div id={'hw3-error'} className={s.error}>
                        {error}
                    </div>
                </div>

                <button
                    id={'hw3-button'}
                    onClick={addUser}
                    className={s.button}
                    disabled={!name.trim()}
                >
                    Add
                </button>
            </div>

            {lastUserName && !error && (
                <div className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </div>
            )}
        </div>
    )
}

export default Greeting;