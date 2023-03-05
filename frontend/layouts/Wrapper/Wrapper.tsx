import style from './Wrapper.module.scss'

type TProps = {
    children: React.ReactNode
}

export const Wrapper = ({ children }: TProps) => {
    return (
        <div className={style.wrapper}>
            {children}
        </div>
    )
}