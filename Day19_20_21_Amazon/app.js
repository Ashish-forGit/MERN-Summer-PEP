import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/amazonSearchPage";
import ProductInfo from "./src/pages/productInfo";
import { useState } from "react";
import AppContext from "./src/context/appContext";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);



const categories = [
    "Fresh",
    "Amazon MiniTV",
    "Sell",
    "Best Sellers",
    "Mobiles",
    "Todays Deals",
    "Prime",
    "Fashion",
    "Electronics",
];


const App = () => {
    const [searchText, setSearchText] = useState("");

    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/search',
            element: <SearchPage  />
        },
        {
            path: '/search/:id',
            element: <ProductInfo />
        },
    ]);

    const contextValues ={
        searchText,
        setSearchText,
        categories
    }

    return (
        <AppContext.Provider value={contextValues}>
            <RouterProvider router={router} />
        </AppContext.Provider>
        
    );
};

root.render(<App />);