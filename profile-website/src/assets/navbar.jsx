const Navbar = () => {

    return (
      <nav className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">Artist John</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-black">
          <li className="px-4 py-2 rounded-full font-semibold cursor-pointer transition-colors duration-200 text-black hover:bg-green-200 hover:text-black">
            Home
          </li>
          <li
            className="px-4 py-2 rounded-full font-semibold cursor-pointer transition-colors duration-200 text-black hover:bg-green-200 hover:text-black"
          >
            About me
          </li>
          <li
            className="px-4 py-2 rounded-full font-semibold cursor-pointer transition-colors duration-200 text-black hover:bg-green-200 hover:text-black"
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