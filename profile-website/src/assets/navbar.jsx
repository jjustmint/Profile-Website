import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState("Home");

    return (
        <nav className="flex justify-between items-center px-8 py-4">
            {/* Logo */}
            <h1 className="text-xl font-bold">Artist John</h1>

            {/* Navigation Links */}
            <ul className="flex space-x-6 text-black">
                <li
                    className={`px-4 py-2 rounded-full font-semibold cursor-pointer transition-colors duration-200 ${active === "Home" ? "bg-green-200 text-black" : "hover:bg-green-100 hover:text-black"}`}
                    onClick={() => setActive("Home")}
                >
                    Home
                </li>
                <li
                    className={`px-4 py-2 rounded-full font-semibold cursor-pointer transition-colors duration-200 ${active === "About me" ? "bg-green-200 text-black" : "hover:bg-green-100 hover:text-black"}`}
                    onClick={() => setActive("About me")}
                >
                    About me
                </li>
                <li
                    className={`px-4 py-2 rounded-full font-semibold cursor-pointer transition-colors duration-200 ${active === "Gallery" ? "bg-green-200 text-black" : "hover:bg-green-100 hover:text-black"}`}
                    onClick={() => setActive("Gallery")}
                >
                    Gallery
                </li>
            </ul>

            {/* Contact Button */}
            <button className="bg-green-900 text-white px-5 py-2 rounded-full font-medium hover:bg-green-800">
                Contact
            </button>
        </nav>
    );
};

export default Navbar;