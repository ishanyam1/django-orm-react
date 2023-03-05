import { ChangeEvent, FormEvent } from 'react'

import {
    CRUDEnum,
    TablesEnum,
    TTablesDTO
} from '@tools'

import { useActionCRUDContext } from "@hooks"
import { useCRUDForms } from '../useCRUDForms'

import { Flex } from "@layouts"

import style from '../CRUDForm.module.scss'

type TChangeDataRow = TTablesDTO[keyof typeof TablesEnum]

type TProps = {
    dataTable: TChangeDataRow[] | null
    actionTable: keyof typeof TablesEnum
    onChangeRowSubmit: (dataRow: TChangeDataRow) => void
}

export const ChangeRow = ({ dataTable, actionTable, onChangeRowSubmit }: TProps) => {

    const tableCell = dataTable ? Object.keys(dataTable?.[0]) : []

    const curentSubmitHandler = (changeDataRow: TChangeDataRow | null) => {
        if (changeDataRow) onChangeRowSubmit(changeDataRow)
    }

    const {
        rowDataForm,
        setRowDataFormHandler,
        submitHandler
    } = useCRUDForms<TChangeDataRow>({
        actionTable,
        onSumbmit: curentSubmitHandler
    })

    const changeInputHandler = (item: keyof TChangeDataRow) => (e: ChangeEvent<HTMLInputElement>) => {
        setRowDataFormHandler({
            ...rowDataForm,
            [`${item}`]: e.target.value
        } as TChangeDataRow)
    }

    const { actionCRUD, handlerSetActionCRUD } = useActionCRUDContext()


    return (
        <Flex
            margin="2rem 0"
            flexDirection="column">
            <div className={style.buttonAdding}
            >
                <button
                    className={`${style.button} ${actionCRUD === CRUDEnum.change
                        ? style.buttonActive
                        : ''}`}
                    onClick={() => handlerSetActionCRUD(CRUDEnum.change)}>
                    {CRUDEnum.change}
                </button>
            </div>
            {
                actionCRUD === CRUDEnum.change && (
                    <form onSubmit={submitHandler}>
                        <Flex
                            className={style.formAdding}
                            justifyContent="center"
                            flexWrap="wrap"
                            rowGap="2rem"
                            padding="1rem 0 0 0"
                        >
                            {
                                tableCell?.map((item, id) => (
                                    (item != 'create_date') && (
                                        <Flex
                                            flexDirection="column"
                                            alignItems="center"
                                            margin="0 1rem"
                                            key={`${item}_${id}`}
                                        >
                                            <label htmlFor={item}>{item}</label>
                                            <input
                                                type="text"
                                                name={item}
                                                onChange={changeInputHandler(item)}
                                            />
                                        </Flex>
                                    )))
                            }
                            <button
                                type="submit"
                                className={style.inputSubmit}
                            >
                                ✓
                            </button>
                        </Flex>
                    </form>
                )
            }
        </Flex>
    )
}