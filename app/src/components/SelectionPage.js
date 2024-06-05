import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useServicesContext } from '../hooks/useServicesContext'; 

const SelectionPage = () => {
  const [showLocation, setShowLocation] = useState(false); 
  const [showPost, setShowPost] = useState(false);

  const { services } = useServicesContext(); 

  const handleRequest = () => {
    setShowLocation(true);
  };

  const handlePost = () => {
    setShowPost(true);
  };

  return (
    <div>
      <div className="flex h-screen flex-row items-center justify-center bg-gray-100 gap-28">
        <div className="h-64 w-96 bg-white p-4 hover:bg-slate-300 justify-center items-center flex flex-col">
          <div className="text-center text-xl font-extrabold">Check Available Service Providers</div>
          <Link to='/display'>
            <button 
              className="w-full mt-4 items-center justify-center bg-blue-500 p-2 text-center text-lg text-white font-semibold" 
              onClick={handleRequest}
            >
              Search
            </button>
          </Link>
        </div>
        <div className="h-64 w-96 bg-white p-4 hover:bg-slate-300 justify-center items-center flex flex-col">
          <div className="text-center text-xl font-extrabold">Offer your Service</div>
          <Link to='/post'>
            <button 
              className="w-full mt-4 items-center justify-center bg-blue-500 p-2 text-center text-lg text-white font-semibold" 
              onClick={handlePost}
            >
              Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelectionPage;
