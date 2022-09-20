import React from "react";
import gym from "../practice1/gym-bg.jpg";

const Home = () => {
    return(
        <>
        <h1>This is Home Page</h1>
        <img src={gym} alt="pics" className="img"/>
        </>
    )
}

export default Home;