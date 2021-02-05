import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  // --- API Data --- //
  const [data, setData ] = useState();
  // --- Search --- //
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 300000);

    return () => clearInterval(interval);
  }, []);


  const fetchData = async (userInput) => {
    let url = `https://hn.algolia.com/api/v1/search?tags=front_page`;
    if (userInput) {
      url = `https://hn.algolia.com/api/v1/search?query=${search}`;
    }
    try {
      const response = await fetch(url);
      if (response.ok) {
        console.log("response OK");
        const res = await response.json();
        res && setData(res.hits);
      } else {
        throw new Error("Request failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const getSearchInput = ({target}) => {
    setSearch(target.value);
  }

  return (
    <>
      <NavBar getSearchInput={getSearchInput} search={search} fetchData={fetchData}/>
      <Main data={data}/>
      <Footer />
    </>
  );
}

export default App;
