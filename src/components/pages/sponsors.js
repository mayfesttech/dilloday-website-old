import React from "react";
import '../../styles/sponsors.css';
import SponsorsCollage from '../misc/sponsorscollage'
import GridWrapper from '../misc/grid'
import mayfestStyles from "../../styles/mayfestStyles";
import * as data from '../../sponsors.json'
import * as currsponsors from '../../currsponsors.json'

const a = data.collage;

let objects = [];
for (let i = 0; i < a.length; i++) {
    objects.push(a[i])
};

const b = currsponsors.collage;
let curr = [];
for (let i = 0; i < b.length; i++) {
    curr.push(b[i])
};

function Sponsors() {
    const cl = mayfestStyles();
    return (
        <div className={cl.pageWrapper}>
            <div>
                <h1 className={cl.header}>
                    BIG THANK YOU TO OUR 2023 SPONSORS:
                    </h1>
            </div>

            <div className="sponsorcontainer">
                {<SponsorsCollage collage = {curr} /> }
            </div>
            
            <div>
                <h1 className={cl.header}>
                    SPONSORS
                    </h1>
            </div>
            <div>
            <br>
            </br> 
            </div>
            <div className = 'sponsortext'>
                <p>The Dillo Day festival experience not only consists of the main stage, where major acts such as Kendrick Lamar, Steve Aoki, and Chance the Rapper have performed in the past​, but also features the Dillo Village. ​The Dillo Village​ ​is ​an immersive ​section of the​ festival grounds on the shore of Lake Michigan consisting of a second stage featuring local Chicago artists as well as food trucks, interactive art exhibits, and additional programming. This space allows our corporate partners and sponsors to meaningfully and directly engage with our 12,000 largely millennial festival attendees. The Dillo Village is the heartbeat of our festival, a thriving space full of energy and excitement where festivalgoers truly come together as a community and celebrate the start of summer in Chicago.
                </p>
                <p> We’d love to work with you in creating a standout, custom experience. 
                 Please reach out to us at <a className={cl.link} href = "mailto: corporatedilloday@northwestern.edu">corporatedilloday@northwestern.edu </a> 
                 to have your company be a part of Dillo Day 2024.</p>
            </div>
            <br>
            </br>
            <div className = 'pastsponsors'>

                <h2>  
                    SOME OF OUR PAST SPONSORS
                        </h2>
            </div>
            <div className="sponsorcontainer">
                {<SponsorsCollage collage = {objects} /> }
            </div>
        </div>

    );
}

export default Sponsors;