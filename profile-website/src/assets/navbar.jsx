const Navbar = () => {
    return (
        <div className="bg-blue-500 text-white text-center p-4">
            <h1 className="text-2xl">My Website</h1>
                <ul className="flex justify-center space-x-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                </ul>
        </div>
    );
}

export default Navbar;