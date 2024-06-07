import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray overflow-hidden">
            <div className="bg-gray-100 p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email" 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} 
                            className="mt-1 p-2 w-full border rounded" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input 
                            type="password" 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} 
                            className="mt-1 p-2 w-full border rounded" 
                            required 
                        />
                    </div>
                    <button 
                        disabled={isLoading}
                        type="submit" 
                        className="w-full bg-blue-500 text-white p-2 rounded"
                    >
                        Login
                    </button>
                    {error && <div className="text-red-500 text-xs italic mt-4">{error}</div>}
                </form>
                <div className="mt-4 text-center">
                    <Link to="/signup">
                        <button className="w-full bg-gray-300 text-black p-2 rounded">Signup</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
