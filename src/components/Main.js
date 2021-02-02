import React, { useState, useEffect } from 'react';
import MyCard from './MyCard';
import dummy from '../data/dummy.json';
//import SearchBar from './SearchBar';


const Main = () => {

    const [data, setData ] = useState({});
    // console.log(data);
    // https://www.codecademy.com/courses/react-101/lessons/the-effect-hook/exercises/fetch-data

    const fetchJSONData = () =>{
        fetch('dummy.json', 
        {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => {
            // console.log(response);
            return response.json();
          })
          .then((myJson) => {
            // console.log(myJson.hits);
            setData(myJson);
            console.log(`heree: ${data}`);
          });
      }

    useEffect(() => {
        fetchJSONData()
        // setData(dummy);
        // console.log(`heree: ${data}`);
    }, [])
    
    const handleUserInput = (e) => {
        // setUserInput({
        //   ...userInput,
        //   [e.target.name]: e.target.value
        // });
        console.log(e.target.value);
      };

    return (
        <div className="container">
            
            <div className="row m-5">
                {/* <SearchBar handleUserInput={handleUserInput}/> FOR EMELINE*/}

                {dummy.hits.map((entry, i) => {
                    return <MyCard key={i} data={entry}/>
                })}
                {/* <Card data={dummy.hits[0]}/> */}
            </div>
            
        </div>
    );
}

export default Main;
