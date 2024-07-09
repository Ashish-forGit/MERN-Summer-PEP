import { useContext, useEffect, useState } from "react";
import AppContext from "../context/appContext";

const useGetProducts = ({ isSearchTextDependent = true }) => {
    const {searchText} = useContext(AppContext)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getData(stx) {
        try {
            const res = await fetch(`https://dummyjson.com/products/search?q=${stx}`);
            const data = await res.json();
            setProducts(data.products);
            setLoading(false);
        } catch (e) {
            alert(JSON.stringify(e));
        }
    }

    useEffect(() => {
        if (isSearchTextDependent) {
            getData(searchText);
        } else{
            getData('')
        }


        
    }, [searchText]);

    return { products, loading };
};

export default useGetProducts;
