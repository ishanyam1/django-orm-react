import React, { useState, useContext } from "react";

import { TablesEnum } from '@tools'

type ActionTableContextValue = [TablesEnum, React.Dispatch<React.SetStateAction<TablesEnum>>]

type ActionTableContextProviderProps = {
  children: React.ReactNode;
}

const ActionTableContext = React.createContext<ActionTableContextValue>([TablesEnum.customer, () => { }]);

export const ActionTableContextProvider = ({ children }: ActionTableContextProviderProps) => {
  const [actionTable, setActionTable] = useState<TablesEnum>(TablesEnum.customer);

  return (
    <ActionTableContext.Provider value={[actionTable, setActionTable]}>
      {children}
    </ActionTableContext.Provider>
  )
}

export const useActionTableContext = () => {
  const [actionTable, setActionTable] = useContext(ActionTableContext);

  const handlerSetActionTable = (table: TablesEnum) => {
    setActionTable(table)
  };

  return {
    actionTable,
    handlerSetActionTable
  }
}