import React from "react";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };
    return (
        <div>
            <h1>About</h1>
            <button onClick={handleClick}>Home Page</button>
        </div>
    );
}

export default About;