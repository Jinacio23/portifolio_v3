
interface Props {
    title: string | JSX.Element,
    className?: string,
    func?: () => void
}

const Button = (props: Props) => {
    return (
        <button onClick={props.func} className={props.className}>{props.title}</button>
    )
}

export default Button