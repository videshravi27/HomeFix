import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="bg-white p-4 text-black fixed top-0 w-full shadow-md z-10">
        <div className="container mx-auto flex justify-center">
            <Link to="/">
                <h1 className="text-2xl font-bold">HouseFix</h1>
            </Link>
        </div>
    </nav>
    );
};

export default Navbar;
