import React, {useRef, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import LogoImage from "../assets/LogoImage";
import clsx from "clsx";

type Page = {
    path: string;
    label: string;
}

const PAGES: Page[] = [
    {path: "/", label: "HOME"},
    {path: "/about", label: "À PROPOS"},
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const location = useLocation()

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };


    return (
        <nav className="top-0 left-0 w-full z-20 bg-transparent h-[10%]">
            <div className=" p-[2%]">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <LogoImage/>
                        <Link to="/" className="text-error text-sm lg:text-2xl font-bold">
                            MAISON BAUDELAIRE
                        </Link>
                    </div>

                    <div className="hidden md:flex md:gap-12 items-center mr-[4%]  space-x-6">
                        {PAGES.map((page) => (
                            <Link
                                to={page.path}
                                className={clsx("text-error font-bold hover:text-gray-300 transition duration-300 whitespace-nowrap", location.pathname === page.path && "underline")}
                            >
                                {page.label}
                            </Link>
                        ))}
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-error font-bold focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {menuOpen ? <FaTimes/> : <FaBars/>}
                        </button>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div
                    ref={menuRef}
                    className="md:hidden absolute top-16 left-0 w-full text-center bg-white p-4 z-10"
                >
                    {PAGES.map((page) => (
                        <Link
                            to={page.path}
                            onClick={() => setMenuOpen(false)}
                            className={clsx("text-error font-bold block mt-4 hover:text-gray-300 transition duration-300", location.pathname === page.path && "underline")}
                        >
                            {page.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
