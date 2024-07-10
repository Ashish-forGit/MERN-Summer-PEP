import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/amazonSearchPage";
import ProductInfo from "./src/pages/productInfo";
import SignUp from "./src/pages/signUp";
import { useState } from "react";
import AppContext from "./src/context/appContext";
import Cart from "./src/pages/cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from "./src/pages/logIn";

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
            path: '/home',
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
        {
            path: '/cart',
            element: <Cart />
        },
        {
            path: '/',
            element: <SignUp />
        },
        {
            path: '/login',
            element: <Login />
        },
    ]);

    const [cart, setCart] = useState([]);
    const addToCart = (elem)=>{
        
        //check if elem is present all ready in cart
        const isPresent = cart.findIndex((cI)=> cI.id === elem.id);
        if(isPresent == -1){
            const newCart = [...cart];
            newCart.push({
                id: elem.id,
                title: elem.title,
                image: elem.thumbnail,
                price: elem.price,
                count : 1
            });
            setCart(newCart);
            toast.success(`${elem.title} added to cart!`);
        }else{
            const newCart = cart.map((cartItem)=>{
                if(cartItem.id === elem.id){
                    const newCartItem = {...cartItem}
                    newCartItem.count += 1;
                    return newCartItem;

                } else{
                    return cartItem;
                }
            });
            setCart(newCart); 
        }

    }

    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
        toast.warn(`Item removed from cart.`);
    };

    const [user, setUser] = useState(null); // Add user state

    const contextValues ={
        searchText,
        setSearchText,
        categories,
        cart,
        addToCart,
        removeFromCart,
        user, setUser
    }
    console.log(cart);

    return (
        <AppContext.Provider value={contextValues}>
            <RouterProvider router={router} />
            <ToastContainer autoClose={1000} />
        </AppContext.Provider>
        
    );
};

root.render(<App />);