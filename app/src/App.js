import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Display from "./pages/Display";
import CreateService from "./components/CreateService";
import SelectionPage from './components/SelectionPage';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container mx-auto p-4 pt-16">
        <Routes>
          <Route path="/" element={<SelectionPage />} />
          <Route path="/display" element={<Display />} />
          <Route path="/post" element={<CreateService />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
