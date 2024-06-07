import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import AboutUs from './AboutUs';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    };

    return (
        <header className="bg-white p-4 text-black fixed top-0 w-full shadow-md z-10">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <h1 className="text-2xl font-bold">HouseFix</h1>
                </Link>
                <Link to="/about">
                    <h1 className="text-2xl font-bold ml-16">About Us</h1>
                </Link>
                <nav className="ml-auto flex items-center">
                    {user && (
                        <div className="flex items-center">
                            <span className="mr-4">{user.email}</span>
                            <button 
                                onClick={handleClick} 
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Log out
                            </button>
                        </div>
                    )}
                    {!user && (
                        <div className="flex items-center">
                            <Link to="/login" className="mr-4">Login</Link>
                            <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded">Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
