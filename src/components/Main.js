import React, { useState } from 'react';
import MyCard from './MyCard';
import ReactPaginate from 'react-paginate';
import '../css/pagination.css';


const Main = ({data}) => {
    //  --- PAGINATION --- //
    const [currentPage, setCurrentPage] = useState(0);

    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;

    // map over entries and insert cards (paginated)
    const currentPageData = data && data
        .slice(offset, offset + PER_PAGE)
        .map((entry, i) => {return <MyCard key={entry.objectID} data={entry}/>});

    let pageCount = 0;
    if (data) {
        pageCount = Math.ceil(data.length / PER_PAGE)
    }
    
    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }


    if (!data) {
        return (
            <div className="container">
                <div className="row m-5 d-flex justify-content-center">
                    <div className="center" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row m-5 d-flex justify-content-center">
    
                {!data && <h3 className="nothing">Nothing to display</h3>}

                {currentPageData}
                <div className="col-5 ">
                    <ReactPaginate
                        previousLabel={<i className="fas fa-chevron-circle-left"></i>}
                        nextLabel={<i className="fas fa-chevron-circle-right"></i>}
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
