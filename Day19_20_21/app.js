import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/amazonSearchPage";
import ProductInfo from "./src/pages/productInfo";
import { useState } from "react";
import {
    createBrowserRouter,
    Route,
    RouterProvider,
  } from "react-router-dom";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const productInfoCards = [
    {
        id: 1,
        title: "Appliances for your home | Up to 55% off",
        products: [
            {
                title: "Air Conditioners",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
            },
            {
                title: "Refrigerators",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
            },
            {
                title: "Microwaves",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
            },
            {
                title: "Washing Machines",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
            },
        ],
    },
    {
        id: 2,
        title: "Revamp your home in style",
        products: [
            {
                title: "Cution cover",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
            },
            {
                title: "Figuries, vases and more",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
            },
            {
                title: "Homestorage",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
            },
            {
                title: "Lighting Solution",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
            },
        ],
    },
    {
        id: 3,
        title: "Starting ₹149 | Headphones",
        products: [
            {
                title: "Boat",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg",
            },
            {
                title: "Boult",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg",
            },
            {
                title: "NOICE",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg",
            },
            {
                title: "Zebronics",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Zeb_0.5x._SY116_CB553870684_.jpg",
            },
        ],
    },
    {
        id: 4,
        title: "Automotive essentials | Up to 60% off",
        products: [
            {
                title: "Glass Care",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
            },
            {
                title: "Rim Care",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
            },
            {
                title: "Helmet",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
            },
            {
                title: "Vaccum Cleaner",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
            },
        ],
    },
];

const moreproductInfoCards = [
    {
        id: 1,
        title: "Keep Shoping for",
        products: [
            {
                title: "Urban Indy",
                img: "https://m.media-amazon.com/images/I/61jfwppyIXL._SY741_.jpg",
            },
            {
                title: "Mens Solid Cotten",
                img: "https://m.media-amazon.com/images/I/41eCap87ZuL._SX679_.jpg",
            },
            {
                title: "The Modern Soul",
                img: "https://m.media-amazon.com/images/I/612kLKWfZ2L._SY741_.jpg",
            },
            {
                title: "Lymio Men Cargo",
                img: "https://m.media-amazon.com/images/I/31mTwKMJb7L.jpg",
            },
        ],
    },
    {
        id: 2,
        title: "Up to 60% off| Top picks",
        products: [
            {
                title: "Sports Shoes",
                img: "https://m.media-amazon.com/images/I/61utX8kBDlL._SY575_.jpg",
            },
            {
                title: "Jewellery & accessories",
                img: "https://m.media-amazon.com/images/I/61Cy7OxJO5L._SL1000_.jpg",
            },
            {
                title: "Watches",
                img: "https://m.media-amazon.com/images/I/71kxX+vFv+L._SL1500_.jpg",
            },
            {
                title: "Bags luggage",
                img: "https://m.media-amazon.com/images/I/51zlPiGC1HL._SL1499_.jpg",
            },
        ],
    },
    {
        id: 3,
        title: "Fruits & vegetables",
        products: [
            {
                title: "Fruits",
                img: "https://m.media-amazon.com/images/I/61CuiyI4aBL._SL1500_.jpg",
            },
            {
                title: "Vegetables",
                img: "https://m.media-amazon.com/images/I/41Pi5dfvOoL._SX522_.jpg",
            },
            {
                title: "Seasons's special",
                img: "https://m.media-amazon.com/images/I/71ZaS7W9dYL._SL1500_.jpg",
            },
            {
                title: "visit the store",
                img: "https://m.media-amazon.com/images/I/41RSmlJ7pwL.jpg",
            },
        ],
    },
    {
        id: 4,
        title: "Brands in focus",
        products: [
            {
                title: "Smart phone",
                img: "https://m.media-amazon.com/images/I/61nxQ62qglL._SL1500_.jpg",
            },
            {
                title: "Laptop",
                img: "https://m.media-amazon.com/images/I/81epBowa4UL._SL1500_.jpg",
            },
            {
                title: "Sanitary Pad",
                img: "https://m.media-amazon.com/images/I/71cvryHR3zL._SL1500_.jpg",
            },
            {
                title: "Detergent",
                img: "https://m.media-amazon.com/images/I/719ch00KweL._SL1500_.jpg",
            },
        ],
    },
];
const extraproductInfoCards = [
    {
        id: 1,
        title: "Best Sellers in Home & Kitchen",
        products: [
            {
                title: "",
                img: "https://m.media-amazon.com/images/I/71IB+2LNNBL._SL1500_.jpg",
            },
            {
                title: "",
                img: "https://m.media-amazon.com/images/I/410a9N3gxpL._SL1024_.jpg",
            },
            {
                title: "",
                img: "https://m.media-amazon.com/images/I/6121tV2hW9L._SL1500_.jpg",
            },
            {
                title: "",
                img: "https://m.media-amazon.com/images/I/518qYT-OjaL._SL1000_.jpg",
            },
        ],
    },
    {
        id: 2,
        title: "Pocket-friendly fashion",
        products: [
            {
                title: "",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/apparel/wave3/men/postw3/GW/Brand-QC-withoutCopy-420x420-under599-7.jpg",
            },
            {
                title: "",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-3-186-116._SY116_CB636055991_.jpg",
            },
            {
                title: "",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-2-186-116._SY116_CB636055991_.jpg",
            },
            {
                title: "",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-4-186-116._SY116_CB636055991_.jpg",
            },
        ],
    },
    {
        id: 3,
        title: "Customers’ Most-Loved products",
        products: [
            {
                title: "",
                img: "https://m.media-amazon.com/images/I/41jc30L1jyL._AC_SY145_.jpg",
            },
            {
                title: "",
                img: "https://m.media-amazon.com/images/I/61P8rRWzXUL._AC_SY145_.jpg",
            },
            {
                title: "",
                img: "https://m.media-amazon.com/images/I/71-z6ji5R+L._AC_SY145_.jpg",
            },
            {
                title: "",
                img: "https://m.media-amazon.com/images/I/71MNc4aeG8L._AC_SY145_.jpg",
            },
        ],
    },
    {
        id: 4,
        title: "Customers’ Most-Loved Fashion for you",
        products: [
            {
                title: "",
                img: "https://m.media-amazon.com/images/I/616iBhe2roL._AC_SY145_.jpg",
            },
            {
                title: "",
                img: "https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_SY145_.jpg",
            },
            {
                title: " ",
                img: "https://m.media-amazon.com/images/I/616RCgaeZ4L._AC_SY145_.jpg",
            },
            {
                title: "",
                img: "https://m.media-amazon.com/images/I/61dtCfEcB+L._AC_SY145_.jpg",
            },
        ],
    },
];





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
            element: <HomePage searchText={searchText}
                setSearchText={setSearchText} 
                productInfoCards = {productInfoCards} 
                moreproductInfoCards={moreproductInfoCards}
                extraproductInfoCards={extraproductInfoCards}
                categories ={categories} />
        },
        {
            path: '/search',
            element: <SearchPage searchText={searchText} 
                setSearchText={setSearchText} 
                categories = {categories} />
        },
        {
            path: '/search/:id',
            element: <ProductInfo categories ={categories}
            setSearchText={setSearchText} 
            productInfoCards = {productInfoCards} />
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
};

root.render(<App />);