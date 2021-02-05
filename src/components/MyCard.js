import React from 'react';
import { Card } from 'react-bootstrap';

const MyCard = ({ data }) => {

    return (
        <>
            <Card className="shadow mb-3">
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                        <a href={data.url} target="blank_" className="title pr-5">{data.title}</a> 
                    </Card.Subtitle>
                    <span className="card-span">{data.author}  </span> 
                    <span className="card-span"> {data.created_at.substring(0, 10)}  </span>
                    <span className="card-span"> {data.num_comments} Comments  </span>
                </Card.Body>
            </Card>
        </>
    );
}

export default MyCard;
