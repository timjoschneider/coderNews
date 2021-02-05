import React from 'react';

const MyCard = ({ data }) => {

    return (
        <>
            <div className="card shadow mb-3">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                        <a href={data.url} target="blank_" className="title pr-5">{data.title}</a> 
                    </h6>
                    <span className="card-span">{data.author}  </span> 
                    <span className="card-span"> {data.created_at.substring(0, 10)}  </span>
                    <span className="card-span"> {data.num_comments} Comments  </span>
                </div>
            </div>
        </>
    );
}

export default MyCard;
