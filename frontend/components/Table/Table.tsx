import { TablesEnum, TTablesDTO } from "@tools"

import { Flex } from "@layouts"

import style from './Table.module.scss'

type TProps = {
    dataTable: TTablesDTO[keyof typeof TablesEnum][] | null
}

export const Table = ({ dataTable }: TProps) => {

    return (
        <div className={style.table}>
            {
                <Flex justifyContent="space-between" className={style.headerTable}>
                    {
                        dataTable && Object.keys(dataTable?.[0])
                            .map((item, id) => (
                                <div
                                    className={style.column}
                                    key={`${item}_${id}`}>
                                    <span>{item}</span>
                                </div>
                            ))
                    }
                </Flex>
            }
            {
                dataTable?.map((item, id) => (
                    <Flex
                        justifyContent="space-between"
                        className={style.row}
                        key={`${item}_${id}`}
                    >
                        {
                            dataTable && Object.keys(dataTable?.[0])
                                ?.map((currentColumnsName) => (
                                    <div
                                        className={style.column}
                                        key={`${currentColumnsName}_${id}`}
                                    >
                                        <span>{item[currentColumnsName]}</span>
                                    </div>
                                ))
                        }
                    </Flex>
                ))
            }
        </div>
    )
}