

  // const fetchStartData = (userInput) => {
  //   console.log("fetching start data  ... ");
  //   let url = `https://hn.algolia.com/api/v1/search?tags=front_page`
  //   if (userInput) {
  //     url = `https://hn.algolia.com/api/v1/search?query=${userInput}`
  //   }
  //   fetch(url)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Request failed!");
  //     }, networkError => console.log(networkError.message)
  //     ).then((res) => {
  //       setData(res.hits);
  //     });
  // }


  // const fetchData = () => {
  //   console.log("fetching data ... ");
  //   fetch(`https://hn.algolia.com/api/v1/search?query=${search}`)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Request failed!");
  //     }, networkError => console.log(networkError.message)
  //     ).then((res) => {

  //       setData(res.hits);
  //     });
  // }
