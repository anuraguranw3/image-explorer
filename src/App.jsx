import { Routes, Route, useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Images from './components/Images';
import Footer from './components/Footer';

function App() {

  const navigate = useNavigate();

  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col items-center">
      <h1 onClick={() => navigate("/")} className="text-3xl font-light mt-4 text-green-700 cursor-pointer"><span className="text-black font-medium">Image</span> Explorer</h1>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Images />}></Route>
        <Route path="*" element={<h1 className="text-lg m-5">Page Not Found</h1>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
