import { TTableСellDTO } from "./TTableСellDTO"

export interface TTableRowFromProductDTO extends TTableСellDTO {
    id: string
    name: string
    amount: number
}