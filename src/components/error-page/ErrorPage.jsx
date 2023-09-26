import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <div className="w-10/12 lg:w-9/12 m-auto py-8 md:py-12 lg:py-16 min-h-screen flex items-center justify-center">
                <div className="bg-[#f8704700] overflow-hidden rounded-lg pb-8">
                    <div className="text-center pt-5 md:pt-8">
                        <h1 className="text-7xl md:text-9xl font-bold text-[#ff444a]">404</h1>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium py-4 md:py-6 lg:py-8">oops! Page not found</h1>
                        <p className="text-lg md:text-2xl pb-4 md:pb-8 px-6 md:px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                        <Link to={'/'} className="btn btn-primary bg-[#ff444a] hover:bg-[#009445c2] border-none text-white font-semibold px-6 py-3 rounded-md text-center">Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;