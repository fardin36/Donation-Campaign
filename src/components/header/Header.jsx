import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 md:px-16 md:py-9 lg:px-32 lg:py-12">
            <div className="navbar-start h-10 md:h-12 lg:h-[4.5rem]">
                <a href={'/'} className='h-full'><img className='h-full' src="/Logo.png" alt="Donation Campaign" /></a>
            </div>
            <div className="navbar-end">
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal font-normal text-lg flex-nowrap">
                        <li><NavLink to={'/'}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            style={({ isActive }) => {
                                return {
                                    textDecoration: isActive ? "underline" : "",
                                    color: isActive ? "red" : "",
                                    background: isActive ? "none" : ""
                                };
                            }}>Home</NavLink></li>
                        <li><NavLink to={'/donation'} style={({ isActive }) => {
                            return {
                                textDecoration: isActive ? "underline" : "",
                                color: isActive ? "red" : "",
                                background: isActive ? "none" : ""
                            };
                        }}>Donation</NavLink></li>
                        <li><NavLink to={'/statistics'} style={({ isActive }) => {
                            return {
                                textDecoration: isActive ? "underline" : "",
                                color: isActive ? "red" : "",
                                background: isActive ? "none" : ""
                            };
                        }}>Statistics</NavLink></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-24 right-0 font-normal text-lg">
                        <li><NavLink to={"/"} style={({ isActive }) => {
                            return {
                                textDecoration: isActive ? "underline" : "",
                                color: isActive ? "red" : "",
                                background: isActive ? "none" : ""
                            };
                        }}>Home</NavLink></li>
                        <li><NavLink to={"/donation"} style={({ isActive }) => {
                            return {
                                textDecoration: isActive ? "underline" : "",
                                color: isActive ? "red" : "",
                                background: isActive ? "none" : ""
                            };
                        }}>Donation</NavLink></li>
                        <li><NavLink to={"/statistics"} style={({ isActive }) => {
                            return {
                                textDecoration: isActive ? "underline" : "",
                                color: isActive ? "red" : "",
                                background: isActive ? "none" : ""
                            };
                        }}>Statistics</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;