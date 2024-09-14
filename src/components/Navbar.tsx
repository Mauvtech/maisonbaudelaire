import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

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
        <nav className="fixed top-0 left-0 w-full z-20 bg-transparent">
            <div className=" p-[2%]">
                <div className="flex justify-between items-center h-16">
                    {/* Logo et Texte à Gauche */}
                    <div className="flex items-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/logo.png`}
                            alt="Logo"
                            className="w-[10%]  mt-1"
                        />
                        <Link to="/" className="text-error text-xl font-bold">
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
                        <Link
                            to="/contact"
                            className="text-error font-bold hover:text-gray-300 transition duration-300"
                        >
                            CONTACT
                        </Link>
                    </div>
                    {/* Bouton Mobile */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-error font-bold focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Menu Mobile */}
            {menuOpen && (
                <div
                    ref={menuRef}
                    className="md:hidden absolute top-16 left-0 w-full text-center bg-white p-4 z-10"
                >
                    <Link
                        to="/"
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
                    <Link
                        to="/contact"
                        className="text-error font-bold block mt-4 hover:text-gray-300 transition duration-300"
                    >
                        CONTACT
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
