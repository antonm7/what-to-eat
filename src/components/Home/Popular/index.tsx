import SingleImage from "../../Food/SingleImage";

export default function Popular() {
    return (
        <div className="flex flex-col w-full text-center pt-28 px-spacing ">
            <h1 className="leading-tight text-greenText text-4xl font-semibold">
                Popular Recipes
            </h1>
            <div className="pt-8 flex justify-between flex-wrap">
                <SingleImage />
                <SingleImage />
                <SingleImage />
                <SingleImage />
            </div>
        </div>
    )
}