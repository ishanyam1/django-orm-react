import { TablesEnum } from "@tools"

type TDeleteRowApi = (
    actionCategory: keyof typeof TablesEnum,
    data: string
) => Promise<true | null>

export const deleteRowApi: TDeleteRowApi = async (actionCategory, data) => {
    try {
        const url = `http://localhost:8000/api/${actionCategory}/${data}`
        const response = await fetch(url, {
            method: 'DELETE',
        })

        if (!response.ok) throw new Error('Error')

        return await response.ok

    } catch (err) {
        console.error(err)
        return null
    }
}