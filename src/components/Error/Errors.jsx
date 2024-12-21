import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TfiReload } from "react-icons/tfi";
const Errors = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center p-8 bg-white shadow-xl rounded-lg">
                <div className="flex justify-center mb-4">
                    <FaExclamationTriangle className="text-red-500 text-6xl" />
                </div>
                <h1 className="text-4xl font-semibold text-gray-800 mb-2">Oops!</h1>
                <p className="text-xl text-gray-600 mb-6">Something went wrong. Please try again later.</p>
                <Link
                    to='/'
                    className="text-blue-500 hover:text-blue-700 text-lg font-semibold"
                >
                    Go back to Home
                </Link>
                <div className="flex justify-center items-center mb-4 ">
                    <a
                        href="/"
                        className="ml-2 mt-4 text-2xl text-center text-rose-600 hover:text-rose-700 font-semibold"
                    >
                        <TfiReload />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Errors;