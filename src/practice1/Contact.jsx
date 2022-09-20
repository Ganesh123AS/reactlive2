import React from "react";
import dslr3 from "../practice1/dslr3.jpg";
import dslr4 from "../practice1/dslr4.jpg";
import sandal from "../practice1/sandal1.jpg";
import sandal2 from "../practice1/sandal2.jpg";
import mobile5 from "../practice1/mobile5.jpg";
import hoodie1 from "../practice1/hoodie1.jpg";

const Contact = () => {
    return(
        <>
        <div className="row">
        <div className="col-lg-12 text-center">
        <h1>This is Contact Page</h1>        
        <img src={dslr3} alt="pics" className="img1"/>
        <img src={dslr4} alt="pics" className="img1"/>
        <img src={sandal} alt="pics" className="img1"/>
        <img src={sandal2} alt="pics" className="img1"/>
        <img src={mobile5} alt="pics" className="img1"/>
        <img src={hoodie1} alt="pics" className="img1"/>
        </div>
        </div>
        </>
    )
}

export default Contact;