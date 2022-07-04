import React from "react";
import { MdSearch } from "react-icons/md";


const Search = ({ handleSearchNote, wordEntered }) => {
  return (
    <>
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" color="white" />
      <input
        onChange={handleSearchNote}
        type="text"
        placeholder="Type Title / Desc. to Search..."
        value={wordEntered}
      />
    
    </div>
      </>
  );
};

export default Search;
