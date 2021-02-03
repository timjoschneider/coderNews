import React, { useState, useEffect } from 'react';
import MyCard from './MyCard';
import {hits} from '../data/dummy.json';


const Main = () => {

    const [data, setData ] = useState([...hits]);

    useEffect(() => {
        let interval = setInterval(() => {
            setData([...hits]);
            console.log("interval fired");
        }, 10000);
        return () => clearInterval(interval);
    }, []);
    
    // const handleUserInput = ({ target }) => {
    //     console.log(target.value);
    //   };

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
