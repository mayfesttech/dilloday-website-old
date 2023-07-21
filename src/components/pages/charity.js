// import charity from "../../images/charity.jpg"

import React, { useState, useEffect } from "react";
import '../../styles/lineup.css'



function Charity() {
    // const [onSwitch, setOnSwitch] = useState(false);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setOnSwitch(onSwitch => !onSwitch);
    //     }, 500);
    //     return () => clearInterval(interval);
    // }, []);

    //const getImageName = () => onSwitch ? lineupOn : lineupOff

    // const getImageName = charity;

    return (

        <div id="flex-container">

            <div className="lineupPoster" id="poster"/>
        </div>

    );
}

export default Charity;
