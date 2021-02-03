import React from 'react';
import SearchBar from './SearchBar';

//const SearchBar = () => {}

const NavBar = () => {

        return (
            <>
            <div id="nav" className="row col-12">
                <img id="logo" className="col-2" src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo"/>
                <SearchBar />
                <button type="button" id="login-btn" className="btn btn-primary col-1" type="submit" onClick="#">Log in/Sign in</button>
            </div>
            </>
        );
}

export default NavBar;
