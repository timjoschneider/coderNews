import React from 'react';

//const SearchBar = () => {}

const NavBar = () => {

        return (
            <>
            <div id="nav" className="row col-12">
                <img id="logo" className="col-2" src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo"/>
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
                <button type="button" id="login-btn" className="btn btn-primary col-1" type="submit" onClick="#">Log in/Sign in</button>
            </div>
            </>
        );
}

export default NavBar;
