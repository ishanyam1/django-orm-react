import React, { useState, useContext } from "react";

import { CRUDEnum } from '@tools'

type TActionCRUD = [CRUDEnum | null, React.Dispatch<React.SetStateAction<CRUDEnum | null>>]

type TActionCRUDContextProps = {
    children: React.ReactNode;
}
const ActionCRUDContext = React.createContext<TActionCRUD>([null, () => { }]);

export const ActionCRUDContextProvider = ({ children }: TActionCRUDContextProps) => {
    const [actionCRUD, setActionCRUD] = useState<CRUDEnum | null>(null);

    return (
        <ActionCRUDContext.Provider value={[actionCRUD, setActionCRUD]}>
            {children}
        </ActionCRUDContext.Provider>
    )
}

export const useActionCRUDContext = () => {
    const [actionCRUD, setActionCRUD] = useContext(ActionCRUDContext);

    const handlerSetActionCRUD = (CRUD: CRUDEnum) => {
        setActionCRUD(CRUD)
    }

    return {
        actionCRUD,
        handlerSetActionCRUD
    }
}