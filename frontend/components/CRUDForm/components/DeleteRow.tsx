import { ChangeEvent, FormEvent } from 'react'

import {
    CRUDEnum,
    TablesEnum,
    TTablesDTO,
} from '@tools'

import { useActionCRUDContext } from "@hooks"
import { useCRUDForms } from '../useCRUDForms'

import { Flex } from "@layouts"

import style from '../CRUDForm.module.scss'

type TDeleteDataRow = TTablesDTO[keyof typeof TablesEnum]['id']

type TProps = {
    actionTable: keyof typeof TablesEnum
    onDeleteRowSumbmit: (dataRow: TDeleteDataRow) => void
}

export const DeleteRow = ({ actionTable, onDeleteRowSumbmit }: TProps) => {

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => setRowDataFormHandler(e.target.value)

    const curentSubmitHandler = (deleteDataRow: TDeleteDataRow | null) => {
        if (deleteDataRow) onDeleteRowSumbmit(deleteDataRow)
    }

    const {
        setRowDataFormHandler,
        submitHandler
    } = useCRUDForms<TDeleteDataRow>({
        actionTable,
        onSumbmit: curentSubmitHandler
    })

    const { actionCRUD, handlerSetActionCRUD } = useActionCRUDContext()

    return (
        <Flex
            margin="2rem 0"
            flexDirection="column"
        >
            <div className={style.buttonAdding}>
                <button
                    className={`${style.button} ${actionCRUD === CRUDEnum.delete
                        ? style.buttonActive
                        : ''}`}
                    onClick={() => handlerSetActionCRUD(CRUDEnum.delete)}>
                    {CRUDEnum.delete}
                </button>
            </div>
            {
                actionCRUD === CRUDEnum.delete && (
                    <form onSubmit={submitHandler}>
                        <Flex
                            className={style.formAdding}
                            justifyContent="center"
                            flexWrap="wrap"
                            rowGap="2rem"
                            padding="1rem 0 0 0">
                            <Flex
                                className={style.formAdding}
                                justifyContent="center"
                                flexWrap="wrap"
                                rowGap="2rem"
                                padding="1rem 0 0 0">
                                <Flex
                                    flexDirection="column"
                                    alignItems="center"
                                    margin="0 1rem">
                                    <label htmlFor='id'>id</label>
                                    <input
                                        type="text"
                                        name='id'
                                        onChange={changeInputHandler}
                                    />
                                </Flex>
                            </Flex>
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