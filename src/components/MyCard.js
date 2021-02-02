import React from 'react';
// import MyModal from './MyModal';
import { Card } from 'react-bootstrap';

const MyCard = ({ data }) => {


    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = (e) => {
    //     e.preventDefault();
    //     setShow(true)
    // };   


    return (
        <>

            {/* <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card> */}

            <div className="card shadow mb-3">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                        {/* <a href="index.html" className="title pr-5" onClick={handleShow}>{data.title}</a>  */}
                        <a href={data.url} target="blank_" className="title pr-5">{data.title}</a> 

                        {/* <small>
                            <a href="index.html" className="title pl-5">{data.url}</a>
                        </small> */}
                    </h6>
                    <span className="card-span">{data.author}  </span> 
                    <span className="card-span"> {data.created_at.substring(0, 10)}  </span>
                    <span className="card-span"> {data.num_comments} Comments  </span>
                </div>
            </div>

            {/* <MyModal show={show} handleClose={handleClose} data={data}/> */}

        </>
    );
}

export default MyCard;
