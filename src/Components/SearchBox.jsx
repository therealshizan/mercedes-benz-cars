import { useCallback, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  const searchContainer = useRef()
  const searchTxt = useRef()

  const hnadleChange = useCallback((e)=>{
    searchTxt.current = e.target.value
  }, [])

  return (
    <div ref={searchContainer} className="searchContainer">
      {searchTxt.current}
      <div className="searchBox">
        <input
        ref={searchTxt}
        onChange={hnadleChange}
          placeholder="Search For Cars"
          type="text"
          name="search-text"
          id="search-text"
        />
        <button onClick={()=> alert(searchTxt.current)} type="button">
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
