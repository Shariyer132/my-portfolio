
const Navbar = () => {
    const links = <>
    <li><a className="text-[#fff] text-lg cursor-pointer hover:text-[#FF2F00] font-semibold" href="#about">About</a></li>
    <li><a className="text-[#fff] text-lg cursor-pointer hover:text-[#FF2F00] font-semibold" href="#services">Services</a></li>
    <li><a className="text-[#fff] text-lg cursor-pointer hover:text-[#FF2F00] font-semibold" href="#contact">Contact</a></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="logo"><a href="#" className="text-3xl font-semibold"><span className="text-[#FF2F00]">S</span>hariyer<span className="text-[#FF2F00]">.</span></a></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;