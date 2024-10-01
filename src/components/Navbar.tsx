import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import LogoImage from "../assets/LogoImage";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-20 bg-transparent h-[10%]">
            <div className=" p-[2%]">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <LogoImage/>
                        <Link to="/" className="text-error text-2xl font-bold">
                            MAISON BAUDELAIRE
                        </Link>
                    </div>
                    {/* Liens de Navigation en Version Web */}
                    <div className="hidden md:flex md:gap-12 items-center mr-[4%]  space-x-6">
                        <Link
                            to="/"
                            className="text-error font-bold hover:text-gray-300 transition duration-300"
                        >
                            HOME
                        </Link>
                        <Link
                            to="/about"
                            className="text-error font-bold whitespace-nowrap  hover:text-gray-300 transition duration-300"
                        >
                            À PROPOS
                        </Link>
                    </div>
                    {/* Bouton Mobile */}
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
                    <Link
                        to="/"
                        style={{textDecoration: "underline"}}
                        className="text-error font-bold block mt-4 hover:text-gray-300 transition duration-300"
                    >
                        HOME
                    </Link>
                    <Link
                        to="/contact"
                        className="text-error font-bold block mt-4 hover:text-gray-300 transition duration-300"
                    >
                        A PROPOS
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
