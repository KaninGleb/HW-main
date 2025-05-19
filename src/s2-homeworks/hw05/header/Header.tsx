import React, {FC} from 'react'
import burgerIcon from './burger.svg'
import whiteBurgerIcon from './white-burger.svg'
import s from './Header.module.css'
import {useLocation} from 'react-router-dom'
import {PATH} from '../Pages'
import {useSelector} from 'react-redux';
import {selectAppTheme} from '../../hw12/themeSelector';


type PropsType = {
  handleOpen: () => void
}

export const Header: FC<PropsType> = ({handleOpen}) => {
  // hw5-menu изначально отсутствует, при нажатии на бургер - появляется, при повторном нажатии исчезает
  const location = useLocation()
  const currentPath = location.pathname

  const themeId = useSelector(selectAppTheme)
  const selectBurgerIcon = () => themeId === 3 ? whiteBurgerIcon : burgerIcon

  const pageName =
    currentPath === PATH.PRE_JUNIOR
      ? 'Pre-junior'
      : currentPath === PATH.JUNIOR
        ? 'Junior'
        : currentPath === PATH.JUNIOR_PLUS
          ? 'Junior Plus'
          : 'Error'

  return (
    <>
      <div id={'hw5-header'} className={s.header}>
        <img
          src={selectBurgerIcon()}
          id={'hw5-burger-menu'}
          className={s.burgerMenuIcon}
          onClick={handleOpen}
          alt={'open menu'}
        />
        <h1>{pageName}</h1>
      </div>
    </>
  )
}