import { TablesEnum } from "@tools"

import { TTablesDTO } from "@tools"

type TChangeRowApi = (
    actionTable: keyof typeof TablesEnum,
    data: TTablesDTO[typeof actionTable]
) => Promise<true | null>

export const changeRowApi: TChangeRowApi = async (actionTable, data) => {
    try {
        const url = `http://localhost:8000/api/${actionTable}/${data.id}`
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json;'
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