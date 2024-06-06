import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout()
    }

    return (
    <header className="bg-white p-4 text-black fixed top-0 w-full shadow-md z-10">
        <div className="container mx-auto flex justify-center">
            <Link to="/">
                <h1 className="text-2xl font-bold">HouseFix</h1>
            </Link>
            <nav>
                {user && (
                    <div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                )}
                {!user && (
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                )}
            </nav>
        </div>
    </header>
    );
};

export default Navbar;
