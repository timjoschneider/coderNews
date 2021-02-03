import React from 'react';

const SearchBar = () => {

    const [userInput, setUserInput] = useState ("");
    const handleChange = (event) => {
        const userSearch = event.target.value;
            setUserInput(userSearch);
    }
        
    return (
        <div id="search" className="col-3">
            <input
                id="search-bar"
                className="col-11" 
                type="text" 
                placeholder="Search..."
                name="searchBar"
                //onChange={onInput}
            ></input>
            <button id="search-btn"><i id="search-icon" className="fas fa-search"></i></button>
        </div>
    );
}

export default SearchBar;

// map over entries and insert cards
// const currentPageData = data
//         .slice(offset, offset + PER_PAGE)
//         .map((entry, i) => {return `${i}` userInput={entry}/>});