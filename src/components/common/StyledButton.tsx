import { type  MouseEvent } from "react"

type Props = {
    title:string
    method:(e:MouseEvent<HTMLButtonElement>) => void
}
export default function StyledButton({title, method}:Props) {
    return (
        <button 
            className="w-36 h-12 ml-2 rounded-lg bg-greenText flex items-center justify-center text-center text-white font-normal text-sm"
            onClick={e => method(e)}
        >{title}
        </button>
    )
}