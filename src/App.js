  import React from "react";
  // import logo from './logo.svg';
  import './App.css';
  import {Main} from "./components/main/main";

  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";



  function App() {
    return (
     
       <div>
        <Main />
      </div>
      
    );
  }


  export default App;
