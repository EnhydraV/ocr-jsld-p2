import {MoonLoader} from "react-spinners";

const Loading = () => {
    return <div
        className="absolute top-0 left-0 w-full h-full bg-gray-900 text-white flex items-center justify-center cursor-wait text-2xl">
        <div>
            <div className="flex justify-center mb-8">
                <MoonLoader color="#ffffff"/>
            </div>
            <p>Chargement en cours</p>
        </div>
    </div>
}

export default Loading