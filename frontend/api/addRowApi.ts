import { TablesEnum } from "@tools"

import { TTablesDTO } from "@tools"

type TAddRowApi = (
    actionTable: keyof typeof TablesEnum,
    data: Omit<TTablesDTO[typeof actionTable], "id">
) => Promise<true | null>

export const addRowApi: TAddRowApi = async (actionTable, data) => {
    try {
        const url = `http://localhost:8000/api/${actionTable}/`
        const response = await fetch(url, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) throw new Error('Error')

        return await response.ok

    } catch (err) {
        console.error(err)
        return null
    }
}