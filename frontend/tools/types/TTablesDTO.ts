import { TablesEnum } from "@tools/enums"
import { TTableRowFromCustomerDTO } from "./TTableRowFromCustomerDTO";
import { TTableRowFromOrderDTO } from "./TTableRowFromOrderDTO";
import { TTableRowFromEmployeeDTO } from "./TTableRowFromEmployeeDTO";
import { TTableRowFromProductDTO } from "./TTableRowFromProductDTO";

export type TTablesDTO = {
    [TablesEnum.customer]: TTableRowFromCustomerDTO;
    [TablesEnum.order]: TTableRowFromOrderDTO;
    [TablesEnum.employee]: TTableRowFromEmployeeDTO;
    [TablesEnum.product]: TTableRowFromProductDTO;
}
