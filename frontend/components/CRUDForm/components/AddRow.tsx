import { ChangeEvent } from "react";

import { CRUDEnum, TablesEnum, TTablesDTO } from "@tools";

import { useActionCRUDContext } from "@hooks";
import { useCRUDForms } from "../useCRUDForms";

import { Flex } from "@layouts";

import style from "../CRUDForm.module.scss";

type TAddDataRow = TTablesDTO[keyof typeof TablesEnum];

type TProps = {
  dataTable: TAddDataRow[] | null;
  actionTable: keyof typeof TablesEnum;
  onAddRowSubmit: (dataRow: Omit<TAddDataRow, "id">) => void;
};

export const AddRow = ({ dataTable, actionTable, onAddRowSubmit }: TProps) => {
  const tableCell = dataTable ? Object.keys(dataTable?.[0]) : [];

  const curentSubmitHandler = (
    changeDataRow: Omit<TAddDataRow, "id"> | null
  ) => {
    if (changeDataRow) onAddRowSubmit(changeDataRow);
  };

  const { rowDataForm, setRowDataFormHandler, submitHandler } =
    useCRUDForms<TAddDataRow>({
      actionTable,
      onSumbmit: curentSubmitHandler,
    });

  const changeInputHandler =
    (item: keyof TAddDataRow) => (e: ChangeEvent<HTMLInputElement>) => {
      setRowDataFormHandler({
        ...rowDataForm,
        [`${item}`]: e.target.value,
      } as TAddDataRow);
    };

  const { actionCRUD, handlerSetActionCRUD } = useActionCRUDContext();

  return (
    <Flex margin="2rem 0" flexDirection="column">
      <div className={style.buttonAdding}>
        <button
          className={`${style.button} ${
            actionCRUD === CRUDEnum.create ? style.buttonActive : ""
          }`}
          onClick={() => handlerSetActionCRUD(CRUDEnum.create)}
        >
          {CRUDEnum.create}
        </button>
      </div>
      {actionCRUD === CRUDEnum.create && (
        <form onSubmit={submitHandler}>
          <Flex
            className={style.formAdding}
            justifyContent="center"
            flexWrap="wrap"
            rowGap="2rem"
            padding="1rem 0 0 0"
          >
            {tableCell.map(
              (item, id) =>
                item != "id" &&
                item != "hire_date" &&
                item != "create_date" && (
                  <Flex
                    flexDirection="column"
                    alignItems="center"
                    margin="0 1rem"
                    key={`${item}_${id}`}
                  >
                    <label htmlFor={item}>{item}</label>
                    <input
                      type="text"
                      name={item}
                      onChange={changeInputHandler(item)}
                    />
                  </Flex>
                )
            )}
            <input type="submit" value={"✓"} className={style.inputSubmit} />
          </Flex>
        </form>
      )}
    </Flex>
  );
};
