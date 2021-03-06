import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { convertDate, convertTime} from '../Utils';


const MyCard = ({ data, setArticleID }) => {

    return (
        <>
            <Card className="shadow mb-3">
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                    <a href={data.url} target="blank_" className="title">{data.title}</a> 
                    </Card.Subtitle>
                    <Row>
                        <Col className="card-span author col-2">{data.author}</Col>
                        <Col className="col-2">{convertDate(data.created_at)}</Col>
                        <Col className="col-2">{convertTime(data.created_at)}  <i className="far fa-clock"></i></Col>
                        <Col className="col-2"><button className="btn btn-outline-dark card-span" onClick={() => {setArticleID(data.objectID)}} >{data.num_comments} Comments </button></Col>
                    </Row>                    
                </Card.Body>
            </Card>
        </>
    );
}

export default MyCard;
