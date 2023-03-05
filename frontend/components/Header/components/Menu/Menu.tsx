import { TablesEnum } from '@tools'

import { useActionTableContext } from '@hooks'

import style from './Menu.module.scss'

type TProps = {
    device: "Desktop" | "Mobile"
}

export const Menu = ({
    device,
}: TProps) => {
    const { actionTable, handlerSetActionTable } = useActionTableContext();

    return (
        <ul className={
            (device === "Desktop")
                ? style.listDesktop
                : (device === "Mobile")
                    ? style.listMobile :
                    ''
        }>
            {(Object.keys(TablesEnum) as Array<keyof typeof TablesEnum>)
                .map((key, id) => (
                    <li
                        key={`${key}_${id}`}
                        className={style.listItem}
                    >
                        <button
                            className={`${style.itemButton} ${actionTable === TablesEnum[key]
                                ? style.itemButtonActive
                                : ''
                                }`}
                            onClick={() => handlerSetActionTable(TablesEnum[key])}>
                            {TablesEnum[key]}
                        </button>
                    </li>
                ))
            }
        </ul >
    )
}