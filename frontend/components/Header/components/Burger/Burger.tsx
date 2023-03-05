import { useState } from 'react'
import style from './Burger.module.scss'

type TProps = {
    handleIsActiveMenu: () => void
    isActive: boolean
}

export const Burger = ({ 
    handleIsActiveMenu, 
    isActive 
}: TProps) => {
    return (
        <button onClick={handleIsActiveMenu} className={isActive ? style.burgerActive: style.burger}>
            <span className={style.line}></span>
            <span className={style.line}></span>
            <span className={style.line}></span>
        </button>
    )
}