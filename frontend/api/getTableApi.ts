import type { TablesEnum, TTablesDTO } from '@tools'

type TGetTable = (actionTable: keyof typeof TablesEnum) => Promise<TTablesDTO[typeof actionTable][] | null>

export const getTableApi: TGetTable = async (actionTable) => {
    try {
        const url = `http://localhost:8000/api/${actionTable}/`
        const response = await fetch(url)

        if (!response.ok) throw new Error('Error')

        return await response.json()
    }
    catch (err) {
        console.error(err)
        return null
    }
}
