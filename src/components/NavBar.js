import React from 'react';


const NavBar = ({getSearchInput, search, fetchData}) => {

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchData(search);
          }
    }

    return (
        <>
        <div id="nav" className="row col-12">
            <a href="index.html" className="col-2">
                <img id="logo"  src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo"/>
            </a>
            <div id="search" className="col-3">
                <input
                    value={search}
                    onChange={getSearchInput}
                    onKeyDown={_handleKeyDown}
                    id="search-bar"
                    className="col-11" 
                    type="text" 
                    placeholder="Search..."
                    name="searchBar">
                </input>
                <button id="search-btn"><i id="search-icon" className="fas fa-search" onClick={() => fetchData(search)}></i></button>
            </div>
            <button type="button" id="login-btn" className="btn btn-primary col-1">Log in/Sign in</button>
        </div>
        </>
    );
}

export default NavBar;
