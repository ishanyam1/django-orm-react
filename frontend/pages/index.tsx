import { useActionTableContext } from '@hooks'

import { Header, Table, CRUDForm } from '@components'

import { Wrapper } from '@layouts'
import { useDataTableServices } from '@services'

export default function Home() {
  const { actionTable } = useActionTableContext()

  const {
    dataTable,
    setAddRow,
    setChangeRow,
    setDeleteRow,
  } = useDataTableServices(actionTable)

  return (
    <Wrapper>
      <Header />
      {actionTable && <>
        <Table dataTable={dataTable} />
        <CRUDForm.AddRow dataTable={dataTable} actionTable={actionTable} onAddRowSubmit={setAddRow} />
        <CRUDForm.DeleteRow actionTable={actionTable} onDeleteRowSumbmit={setDeleteRow} />
        <CRUDForm.ChangeRow dataTable={dataTable} actionTable={actionTable} onChangeRowSubmit={setChangeRow} />
      </>}
    </Wrapper>
  )
}
