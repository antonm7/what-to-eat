import StyledInput from "../../common/styledInput";

export default function Newsletter() {
    return (
        <div className="m-auto p-8 mt-28 h-auto rounded-xl bg-white w-2/4">
            <h1 className="leading-tight text-greenText text-4xl font-extrabold">
                Follow our newsletter
            </h1>
            <p className="leading-tight text-greenText text-1xl font-medium opacity-60 w-2/4 pb-2 pt-4">
                We will send new and popular recipes you might like!
                You can remove it anytime, so make sure you check it out!
            </p>
            <div className="flex pt-4 pb-4 items-center">
                <StyledInput title="Email" placeholder="enter your email" method={(e) => console.log(e)}/>
            </div>
        </div>
    )
}