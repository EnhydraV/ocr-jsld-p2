import {MoonLoader} from "react-spinners";

const Loading = () => {
    return <div
        className="absolute top-0 left-0 w-full h-full main flex items-center justify-center cursor-wait text-2xl">
        <div>
            <div className="flex justify-center mb-8">
                <MoonLoader color="var(--color-olympic-teal-500)" />
            </div>
            <p className="text-olympic-teal-500">Chargement en cours</p>
        </div>
    </div>
}

export default Loading