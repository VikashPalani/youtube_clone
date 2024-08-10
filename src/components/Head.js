import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
import { LOGO_IMG, YOUTUBE_SEARCH_API } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Head = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  //Debouncing for Search Suggestions
  const[searchQuery,setSearchQuery] = useState("");

  useEffect(() => {

    if (searchQuery){
      const timer = setTimeout(() => getSearchSuggestions(),200);
      return () => {
        clearTimeout(timer);
      }
    }
  },[searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    // console.log(json[1]);
  }


  return (
    <div className="grid grid-flow-col shadow-xl">
      <div className="flex px-3 gap-4">
        <RxHamburgerMenu 
          onClick={() => toggleMenuHandler()}
          className="text-2xl mt-7 ml-3 cursor-pointer"
        />
        <a href="/">
        <img 
          src={LOGO_IMG}
          alt="logo"
          className="w-32 h-20"
        />
        </a>
      </div>

      <div className="m-5">

        <input 
          type="text"
          placeholder="Search"
          className="w-10/12 p-2 border-2 border-black rounded-l-full" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="bg-black text-white p-[10px] rounded-r-full">
          Search
        </button>
      </div>

      <div className="flex justify-end mx-6 mt-6">
        <FaCircleUser className="text-4xl" />
      </div>

    </div>
  )
}

export default Head;
