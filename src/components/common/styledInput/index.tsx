import { type ChangeEvent } from "react"
import StyledButton from "../StyledButton"
import styles from './index.module.css'
type Props = {
    title:string
    placeholder:string
    method:(e:ChangeEvent<HTMLInputElement>) => void
}

export default function StyledInput({
    title,placeholder,method
}:Props) {
    return (
        <div >
            <span className=" text-md text-greenText">{title}</span>
            <div className="mt-2 flex flex-row items-center">
                <input
                    id={styles.input}
                    className="rounded-md h-12 w-80 outline-none px-4" 
                    placeholder={placeholder}
                    onChange={(e) => method(e)}
                />
                <StyledButton title="Email" method={(e) => console.log(e)}/>
            </div>
        </div>
    )
}