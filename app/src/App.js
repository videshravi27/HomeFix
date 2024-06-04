import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Display from "./pages/Display";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateService from "./components/CreateService";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container mx-auto p-4 pt-16"> {/* Adjusted padding */}
        <Routes>
          <Route path="/display" element={<Display />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<CreateService />} />
        </Routes>
      </div>
    </Router>
  );
}
