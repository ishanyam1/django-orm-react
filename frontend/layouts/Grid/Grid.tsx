import style from './Grid.module.scss'

type TProps = {
    children: React.ReactNode
    gridTemplateColumns?: string
    gridTemplateRows?: string
    justifyItems?: 'start' | 'center' | 'end'
}

export const Grid = ({ children, gridTemplateColumns, gridTemplateRows, justifyItems }: TProps) => {
    return (
        <div className={style.grid} style={
            {
                gridTemplateColumns: gridTemplateColumns,
                gridTemplateRows: gridTemplateRows,
                justifyItems: justifyItems
            }}>
            {children}
        </div>
    )
}