import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'

import Navbar from "./components/Navbar";
import Display from "./pages/Display";
import CreateService from "./components/CreateService";
import SelectionPage from './components/SelectionPage';
import AboutUs from "./components/AboutUs";
import Login from './pages/Login';
import Signup from './pages/Signup';
import ReviewForm from './components/ReviewForm';

export default function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container mx-auto p-4 pt-16">
        <Routes>
          <Route path="/about" element={user ? <AboutUs /> : <Navigate to="/login"/>} />
          <Route path="/" element={user ? <SelectionPage /> : <Navigate to="/login"/>} />
          <Route path="/display" element={user ? <Display /> : <Navigate to="/login"/>} />
          <Route path="/post" element={user ? <CreateService /> : <Navigate to="/login"/>} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/"/>} />
          <Route path="/review" element={user? <ReviewForm /> : <Navigate to="/login"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
