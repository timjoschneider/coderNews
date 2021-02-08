import React, { useState, useEffect} from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

// TODO import Article from './Article';


const ArticlePage = ({ articleID }) => {

    const [singleArticle, setSingleArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState();

    useEffect(() => {
        const fetchArticle = async () => {
          setIsError(false);
          setIsLoading(true);
          const url = `https://hn.algolia.com/api/v1/items/${articleID}`
          try {
            const response = await fetch(url);
            const jsonRes = await response.json();
            console.log(jsonRes);
            setIsLoading(false);
            setSingleArticle({...jsonRes});
          } catch (error) {
            setIsLoading(false);
            setIsError(true);
            console.log(error.message);
          }
        };
        fetchArticle();
      }, []);


    return (


        <Container>
            <Row className="m-5 d-flex justify-content-center">

            {isLoading && <>
                <h2 className="center mb-3">Loading ... </h2>
                <Spinner animation="grow" /> </>}

                {!isLoading && 
                <>
                    {/* TODO replace with: <Article/> */}
                    <h1>{singleArticle.title}</h1>
                    <h2>{singleArticle.author}</h2>
                </>}
            </Row>
        </Container>
    );
}

export default ArticlePage;
