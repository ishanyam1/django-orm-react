import style from './Flex.module.scss'

type TProps = {
    children: React.ReactNode
    justifyContent?: "space-between" | "flex-start" | "flex-end" | "center"
    alignItems?: "flex-start" | "flex-end" | "center"
    flexDirection?: "row" | "column"
    flexWrap?: "wrap" | "nowrap"
    columnGap?: string
    rowGap?: string
    padding?: string
    margin?: string

    className?: string
    onClick?: () => void
}

export const Flex = ({
    children,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    columnGap,
    rowGap,
    className,
    onClick,
    padding,
    margin
}: TProps) => {
    return (
        <div
            className={`${style.flex} ${className}`}
            onClick={onClick}
            style={
                {
                    justifyContent: justifyContent,
                    alignItems: alignItems,
                    flexDirection: flexDirection,
                    padding: padding,
                    margin: margin,
                    flexWrap: flexWrap,
                    columnGap: columnGap,
                    rowGap: rowGap
                }}>
            {children}
        </div>
    )
}