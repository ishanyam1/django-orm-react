import { TTableСellDTO } from "./TTableСellDTO"

export interface TTableRowFromCustomerDTO extends TTableСellDTO {
    id: string
    fio: string
    phone: string
}