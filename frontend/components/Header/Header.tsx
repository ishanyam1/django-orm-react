import { useState } from 'react'

import { useWindowSize } from '@hooks'

import { Menu, Burger } from './components'

import { Flex } from '@layouts'

import style from './Header.module.scss'

export const Header = () => {

    const [isActive, setIsActive] = useState(false)
    const windowSize = useWindowSize()

    const handleIsActiveMenu = () => {
        setIsActive(isActive => !isActive)
    }
    return (
        <header className={style.header}>
            <Flex justifyContent="space-between">
                <div className={style.logo}>{'список таблиц'}</div>
                <nav>
                    {
                        (windowSize.width <= 768)
                            ? <>
                                <Burger
                                    isActive={isActive}
                                    handleIsActiveMenu={handleIsActiveMenu}
                                />
                                {
                                    isActive && <Menu device={'Mobile'} />
                                }
                            </>
                            : <Menu device={'Desktop'} />
                    }
                </nav>
            </Flex>
        </header >
    )
}