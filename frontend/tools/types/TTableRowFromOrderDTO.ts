import { TTableСellDTO } from "./TTableСellDTO"

export interface TTableRowFromOrderDTO extends TTableСellDTO {
    id: string
    customer_id: string
    employee_id: string
    summ: string
    create_date: string
}