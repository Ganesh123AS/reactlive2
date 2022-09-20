import React, { createContext, useState } from "react";
import hoodie1 from "../image/hoodie1.jpg";
import hoodie2 from "../image/hoodie2.jpg";
import hoodie3 from "../image/hoodie3.jpg";
import hoodie4 from "../image/hoodie4.jpg";
import hoodie5 from "../image/hoodie5.jpg";

const ProductsContext = createContext();

const ProductsContextProvider = () => {
    const [products] = useState[
        {id: 1, name: "Hoddie1", price: 300, image: hoodie1, status: "Available" },
        {id: 2, name: "Hoddie2", price: 400, image: hoodie2, status: "Available" },
        {id: 3, name: "Hoddie3", price: 500, image: hoodie3, status: "Available" },
        {id: 4, name: "Hoddie4", price: 600, image: hoodie4, status: "Available" },
        {id: 5, name: "Hoddie5", price: 700, image: hoodie5, status: "Available" }
    ]
    return(
        <>
        <ProductsContext.Provider value={{products: [...products]}}>
            
        </ProductsContext.Provider>
        </>
    )
}

export default ProductsContextProvider;
export {ProductsContext};