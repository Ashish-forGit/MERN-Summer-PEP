// import { useState, useEffect } from 'react';

// const useGetProducts = (searchText) => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const getData = async () => {
//         setLoading(true);
//         const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
//         const data = await res.json();
//         setProducts(data.products);
//         setLoading(false);
//     };

//     useEffect(() => {
//         getData();
//     }, [searchText]);

//     return { products, loading };
// }

// export default useGetProducts;
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/appContext";

const useGetProducts = () => {
    const {searchText} = useContext(AppContext)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getData() {
        try {
            const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
            const data = await res.json();
            setProducts(data.products);
            setLoading(false);
        } catch (e) {
            alert(JSON.stringify(e));
        }
    }

    useEffect(() => {
        getData();
    }, [searchText]);

    return { products, loading };
};

export default useGetProducts;
