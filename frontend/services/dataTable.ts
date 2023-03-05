import { useEffect, useState } from "react"

import { TTablesDTO, TablesEnum } from "@tools"

import { addRowApi, changeRowApi, deleteRowApi, getTableApi } from "@api"

type TUseDataTableServices = (actionTable: keyof typeof TablesEnum, isAutoGetData?: boolean) => {
    dataTable: TTablesDTO[typeof actionTable][] | null,
    getDataTable: () => Promise<void>
    setAddRow: (dataRow: Omit<TTablesDTO[typeof actionTable], 'id'>) => void
    setChangeRow: (dataRow: TTablesDTO[typeof actionTable]) => void
    setDeleteRow: (dataRow: TTablesDTO[typeof actionTable]['id']) => void
    cleanDatTable: VoidFunction
}

const errorHandler = () => {
    alert("Что-то пошло не так...")
}

export const useDataTableServices: TUseDataTableServices = (actionTable, isAutoGetData = true) => {
    const [dataTable, setDataTable] = useState<TTablesDTO[typeof actionTable][] | null>(null)

    const getDataTable = async () => {
        const data = await getTableApi(actionTable)
        setDataTable(data)
    }

    useEffect(() => {
        if (isAutoGetData && actionTable) getDataTable()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAutoGetData, actionTable])

    const setAddRow: ReturnType<TUseDataTableServices>['setAddRow'] = async (dataRow) => {
        const isOk = await addRowApi(actionTable, dataRow)

        if (!isOk) {
            errorHandler()
            return
        }

        await getDataTable()

    }

    const setChangeRow: ReturnType<TUseDataTableServices>['setChangeRow'] = async (dataRow) => {
        const isOk = await changeRowApi(actionTable, dataRow)

        if (!isOk) {
            errorHandler()
            return
        }

        await getDataTable()
    }

    const setDeleteRow: ReturnType<TUseDataTableServices>['setDeleteRow'] = async (dataRow) => {
        const isOk = await deleteRowApi(actionTable, dataRow)

        if (!isOk) {
            errorHandler()
            return
        }

        await getDataTable()
    }

    const cleanDatTable = () => {
        setDataTable(null)
    }

    return {
        dataTable,
        getDataTable,
        setAddRow,
        setChangeRow,
        setDeleteRow,
        cleanDatTable
    }
}
