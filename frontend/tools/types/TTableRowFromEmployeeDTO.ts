import { TTableСellDTO } from "./TTableСellDTO"

export interface TTableRowFromEmployeeDTO extends TTableСellDTO {
    id: string
    fio: string
    phone: string
    birth_day: string
    role: string
    hire_date: string
}