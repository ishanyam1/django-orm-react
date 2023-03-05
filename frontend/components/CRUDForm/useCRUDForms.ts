import { FormEvent, useEffect, useState } from "react"

import { TablesEnum, TTablesDTO, TTableСellDTO } from "@tools"

import { useActionCRUDContext } from "@hooks"

// type TDeleteRow = TTablesDTO[keyof typeof TablesEnum]['id']

type TUseCRUDFormsProps<TData> = {
    actionTable: keyof typeof TablesEnum | null
    onSumbmit: (rowDataForm: TData | null) => void
}
type TUseCRUDFormsReturn<TData> = {
    rowDataForm: TData | null,
    setRowDataFormHandler: (data: TData | null) => void
    submitHandler: (e: FormEvent) => void
}

export const useCRUDForms = <TData extends TTableСellDTO | string>({
    actionTable,
    onSumbmit
}: TUseCRUDFormsProps<TData>): TUseCRUDFormsReturn<TData> => {
    const { actionCRUD } = useActionCRUDContext()
    const [rowDataForm, setRowDataForm] = useState<TData | null>(null)

    const setRowDataFormHandler = (data: TData | null) => {
        setRowDataForm(data)
    }

    const cleanRowDataFormHandler = () => setRowDataForm(null)

    useEffect(() => {
        cleanRowDataFormHandler()
    }, [actionTable, actionCRUD])

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        if (rowDataForm) onSumbmit(rowDataForm)
    }

    return {
        rowDataForm,
        setRowDataFormHandler,
        submitHandler
    }
}