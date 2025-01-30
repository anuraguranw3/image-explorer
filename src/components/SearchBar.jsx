import { useContext, useState } from "react";
import { ImageContext } from "../context/ImageContext";

const SearchBar = () => {

  const { setSearchTerm, setIsLoading, searchTerm } = useContext(ImageContext);

  const [inputVal, setInputVal] = useState("");
  const [searchError, setSearchError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) {
      setSearchError(true);
      return;
    }
    if (searchTerm != inputVal) {
      setIsLoading(true);
    }
    setSearchError(false);
    setSearchTerm(inputVal);
    setInputVal("");
  };

  const handleEnter = () => {
    if (!inputVal.trim()) {
      setSearchError(true);
      return;
    }
    if (searchTerm != inputVal) {
      setIsLoading(true);
    }
    setSearchError(false);
    setSearchTerm(inputVal);
    setInputVal("");

  }

  return (
    <div className="w-[95%] sm:w-96 overflow-hidden my-10 flex items-center justify-evenly gap-2 rounded-t border-b-2 border-green-950 py-2 px-5 sticky top-2 z-20 bg-white">
      <input type="text" className="w-full sm:w-[80%] text-lg appearance-none bg-transparent focus:outline-none" placeholder={searchError ? "Please type something" : "eg-car"} value={inputVal} onChange={(e) => setInputVal(e.target.value)} onKeyDown={(e) => {
        if (e.code === "Enter") {
          handleEnter();
        }
      }} />
      <button type="submit" className="py-1 px-3 text-white font-bold bg-black rounded active:bg-gray-800" onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;