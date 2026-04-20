import {Link} from "react-router-dom";

const Error404 = () => {
    return <div
        className="absolute top-0 left-0 w-full h-full flex bg-gray-900 text-white  items-center justify-center justify-items-center">
        <div className="text-center">
            <h1 className="text-2xl">Erreur 404</h1>
            <p><Link to="/">🡄 Revenir au tableau de bord</Link></p>
        </div>
    </div>
}

export default Error404