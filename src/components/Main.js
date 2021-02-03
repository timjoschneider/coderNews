import React, { useState, useEffect } from 'react';
import MyCard from './MyCard';
import {hits} from '../data/dummy.json';
import ReactPaginate from 'react-paginate';
import '../css/pagination.css';


const Main = () => {

    const [data, setData ] = useState([...hits]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setData([...hits]);
            console.log("interval fired");
        }, 300000);
        return () => clearInterval(interval);
    }, []);


    //  --- PAGINATION --- //
    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;
    
    // map over entries and insert cards
    const currentPageData = data
        .slice(offset, offset + PER_PAGE)
        .map((entry, i) => {return <MyCard key={i} data={entry}/>});

    const pageCount = Math.ceil(data.length / PER_PAGE);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    return (
        <div className="container">
            <div className="row m-5 d-flex justify-content-center">
                {/* cards */}
                {currentPageData}
                <div className="col-5 ">
                    <ReactPaginate
                        previousLabel={"← Previous"}
                        nextLabel={"Next →"}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        previousLinkClassName={"pagination__link"}
                        nextLinkClassName={"pagination__link"}
                        disabledClassName={"pagination__link--disabled"}
                        activeClassName={"pagination__link--active"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;
