import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import "../practice1/main.css";

const Main = () => {
    return(
        <>
        <Navbar />
        <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        </>
    )
}

export default Main;