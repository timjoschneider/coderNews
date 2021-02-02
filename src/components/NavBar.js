import { render } from '@testing-library/react';
import React from 'react';

//const SearchBar = () => {}

const NavBar = () => {

    render() 
        return (
            <>
            <div id="nav" class="row col-12">
                <img id="logo" class="col-2" src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo"/>
                <div id="search" class="col-3">
                    <input
                    id="search-bar"
                    class="col-11" 
                    type="text" 
                    placeholder="Search..."
                    name="searchBar"
                    //onChange={onInput}
                    ></input>
                    <button id="search-btn"><i id="search-icon" class="fas fa-search"></i></button>
                </div>
                <button type="button" id="login-btn" class="btn btn-primary col-1" type="submit" onClick="#">Log in/Sign in</button>
            </div>
            </>
        );
}

export default NavBar;
