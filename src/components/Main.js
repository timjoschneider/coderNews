import React, { useState, useEffect } from 'react';
import MyCard from './MyCard';
import {hits} from '../data/dummy.json';


const Main = () => {

    const [data, setData ] = useState([...hits]);
    // https://www.codecademy.com/courses/react-101/lessons/the-effect-hook/exercises/fetch-data


    useEffect(() => {
        let interval = setInterval(() => {
            setData([...hits]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    
    const handleUserInput = (e) => {
        console.log(e.target.value);
      };

    return (
        <div className="container">
            
            <div className="row m-5">

                {data.map((entry, i) => {
                    return <MyCard key={i} data={entry}/>
                })}
            </div>
            
        </div>
    );
}

export default Main;
