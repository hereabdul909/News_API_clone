import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Home from "./components/Home/home";
import FetchData from "./components/ApiData/FetchData";
import Navbar from './components/Header/Navbar'
function App() {
  return (
    <>
    <Router>
    <Header />
    <Navbar/>
       <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/general" element={<FetchData cat="General"/>} />
        <Route exact path="/business" element={<FetchData cat="business"/>} />
        <Route exact path="/sports" element={<FetchData cat="Sports"/>} />
        <Route exact path="/health" element={<FetchData cat="Health"/>} />
        <Route exact path="/science" element={<FetchData cat="science"/>} />
        <Route exact path="/tech" element={<FetchData cat="Technology"/>} />
        <Route exact path="/entertainment" element={<FetchData cat="Entertainment"/>} />
       </Routes>
    </Router>
    </>
  );
}

export default App;
