import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = ({ setSearchText, getData }) => {
    const handleSearch = (e) => {
        const searchText = e.target.value;
        setSearchText(searchText);
        getData(searchText);
    };

    return (
        <nav className="homepage-nav">
            <h4>Amazon.in</h4>
            <p>
                Address:
                <br />
                LPU University
            </p>
            <div className="homepage-search-container">
                <select />
                <input type="text" onChange={handleSearch} />
                <button>
                    <IoSearchSharp />
                </button>
            </div>
            <h5>Profile</h5>
            <h5>Cart</h5>
        </nav>
    );
};

export default Navbar;
