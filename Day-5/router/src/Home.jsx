import React from "react";
import About from "./About";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/about");
    };
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleClick}>About Page</button>
        </div>
    );
}

export default Home;