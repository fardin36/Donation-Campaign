import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-[#0052FF26]">
            <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="bg-[#F8714726] shadow overflow-hidden sm:rounded-lg pb-8">
                    <div className="border-t border-gray-200 text-center pt-8">
                        <h1 className="text-9xl font-bold text-[#FF444A]">404</h1>
                        <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
                        <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                        <Link to={'/'} className="btn btn-primary bg-[#009444] hover:bg-[#009445c2] border-none text-white font-semibold px-6 py-3 rounded-md mr-6">
                            HOME
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;