import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="mt-1 p-2 w-full border rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="mt-1 p-2 w-full border rounded" required />
                    </div>
                    <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-blue-500 text-white p-2 rounded">
                    Sign Up
                    </button>
                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                </form>
                <div className="mt-4 text-center">
                    <Link to="/login">
                        <button className="w-full bg-gray-300 text-black p-2 rounded">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
