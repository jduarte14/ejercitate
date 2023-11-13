import { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
    return useContext(ProductContext);
}


export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState();

    const getProducts = async () => {
        try {
            const response = await fetch(`https://ejercitatebackend-production.up.railway.app/api/products/`);
            const data = await response.json();
            setProducts(data);
        }
        catch (error) {
            console.error("There was an error on the request");
        }
    }

    const getProductsByGym = async (gymId) => {
        try {
            const response = await fetch(`https://ejercitatebackend-production.up.railway.app/api/products/gyms/${gymId}`);
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error("There was an error on the request");
        }
    }

    useEffect(() => {
        getProducts();
    }, [])
    return (
        <ProductContext.Provider value={{ products, setProducts, getProductsByGym }}>{children}</ProductContext.Provider>
    )
}