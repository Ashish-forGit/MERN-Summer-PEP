import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import { useState } from "react";

const SearchPage = (props) => {
    const { categories } = props;

    const customStyles = {
        padding: "48px",
        textAlign: "center",
        backgroundColor: "Yellow",
        
    };

   
    const [products, setProducts] = useState([]);

   

    async function getData(e) {
        const val = e.target.value;
        const res = await fetch(`https://dummyjson.com/products/search?q=${val}`);
        const data = await res.json();
        setProducts(data.products);
        console.log("Api called");
    }

    return (
        <div>
            <Navbar getData={getData}/>
            <CategoryBar categories={categories} />
            <div style={customStyles}>
                { products.map((elem) => {
                    return( 
                    <div key={elem.id}>
                        <h2>{elem.title}</h2>
                        <img src={elem.thumbnail} />
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SearchPage;