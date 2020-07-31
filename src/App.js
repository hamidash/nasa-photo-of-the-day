import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Body from './components/Body/Body.js';
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";


function App() {

  const[nasaData, setData] = useState({});

  useEffect(()=>{

    const fetchData = () => {
      axios
    .get('https://api.nasa.gov/planetary/apod?date=2020-07-21&api_key=NEoIPgUrEt8oShcUcEJWSEwwkNBASXu7lOaDweOi')
    .then(response => {
      //log the data coming from response
      console.log(response);
      console.log(response.data);
      // Add the data to the state property
      setData(response.data);
    })
    .catch(err => {return err})
    }

    fetchData();
    
  },[])//add empty dependency array to call once

  //console.log(nasaData);

  return (
    <div className="App">
      <Header />
      <Body nasaData ={nasaData} />
      <Footer/>
    </div>
  );
}

export default App;
