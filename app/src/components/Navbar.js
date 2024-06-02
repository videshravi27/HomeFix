import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-center">
            <Link to="/">
                <h1 className="text-white text-2xl font-bold">HouseFix</h1>
            </Link>
        </div>
    </nav>
    );
};

export default Navbar;
