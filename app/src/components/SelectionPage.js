import { Link } from 'react-router-dom';

const SelectionPage = () => {
  const handleRequest = () => {
  };

  const handlePost = () => {
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="h-64 w-96 bg-gray-100 p-4 hover:bg-slate-300 justify-center items-center flex flex-col">
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
        <div className="h-64 w-96 bg-gray-100 p-4 hover:bg-slate-300 justify-center items-center flex flex-col">
          <div className="text-center text-xl font-extrabold">Offer Service</div>
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
