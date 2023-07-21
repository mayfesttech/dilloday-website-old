import React from "react";
import "../../styles/App.css";
import "../../styles/aboutdillo.css";

let AboutDillo = () => {
  return (
    <div id="aboutdillopage">
      <h1 className={"aboutdillo-title"}>DILLO DAY</h1>
      <header>
        <div class="image-container" id="main-image">
          <img
            src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/b2e5fadc-42b1-4e58-a471-86f613e6af68/a37b5fa4-689f-4afb-89ae-4f1c0442111e_rw_1200.jpg?h=5bb4a6983b5413c09eaaa6e52de938dc"
            alt="Dillo Day Image"
          />
        </div>
      </header>
      <main>
        <p>
          Armadillo Day began in 1972 when Northwestern University Texans held a
          small celebration in honor of the official mammal of their home state.
          More than 40 years later, Dillo Day continues as the largest
          student-run music festival in the nation, planned and produced by
          Mayfest Productions every year for the Northwestern community.
        </p>
        <h2>PAST LINEUPS</h2>
        <ul className="year-lineup">
          <li>
            <h3 className="year-link">
              <a href="/about/dillo-2021" id = "y2021">2021</a>
            </h3>
          </li>
          <li className="lineup-artist">Playboi Carti</li>
          <li className="lineup-artist">Kaytranada</li>
          <li className="lineup-artist">Beabadoobee</li>
          <li className="lineup-artist">Omar Apollo</li>
        </ul>
        <ul className="year-lineup">
          <li>
            <h3 className="year-link">
              <a href="/about/dillo-2020" id = "y2020">2020</a>
            </h3>
          </li>
          <li className="lineup-artist">Rico Nasty</li>
          <li className="lineup-artist">Jai Wolf</li>
          <li className="lineup-artist">The Regrettes</li>
        </ul>
        <ul className="year-lineup">
          <li>
            <h3 className="year-link">
              <a href="/about/dillo-2019" id = "y2019">2019</a>
            </h3>
          </li>
          <li className="lineup-artist">A$AP Ferg</li>
          <li className="lineup-artist">Daya</li>
          <li className="lineup-artist">Anna Lunoe</li>
          <li className="lineup-artist">Teyana Taylor</li>
          <li className="lineup-artist">Hippo Campus</li>
        </ul>
        <ul className="year-lineup">
          <li>
            <h3 className="year-link">
              <a href="/about/dillo-2018" id = "y2018">2018</a>
            </h3>
          </li>
          <li className="lineup-artist">YOUNG THE GIANT</li>
          <li className="lineup-artist">Joey Bada$$</li>
          <li className="lineup-artist">Daniel Caesar</li>
          <li className="lineup-artist">Whitney</li>
          <li className="lineup-artist">TOKiMONSTA</li>
        </ul>
        <ul className="year-lineup">
          <li>
            <h3 className="year-link">
              <a href="/about/dillo-2017" id = "y2017">2017</a>
            </h3>
          </li>
          <li className="lineup-artist">MGMT</li>
          <li className="lineup-artist">Gramatik</li>
          <li className="lineup-artist">Little Simz</li>
          <li className="lineup-artist">D.R.A.M feat Daf</li>
          <li className="lineup-artist">Porches</li>
        </ul>
        <ul className="year-lineup">
          <li>
            <h3 className="year-link">
              <a href="/about/dillo-2016" id = "y2016">2016</a>
            </h3>
          </li>
          <li className="lineup-artist">Schoolboy Q</li>
          <li className="lineup-artist">Cashmere Cat</li>
          <li className="lineup-artist">Hayden James (DJ Set)</li>
          <li className="lineup-artist">
            Anderson .Paak and The Free Nationals
          </li>
          <li className="lineup-artist">The Mowgli's</li>
        </ul>
        <ul className="year-lineup">
          <li>
            <h3 className="year-link">
              <a href="/about/dillo-2015" id = "y2015">2015</a>
            </h3>
          </li>
          <li className="lineup-artist">Miguel</li>
          <li className="lineup-artist">Odesza</li>
          <li className="lineup-artist">Charli XCX</li>
          <li className="lineup-artist">A$AP Ferg</li>
          <li className="lineup-artist">Saint Motel</li>
        </ul>
        <ul className="year-lineup">
          <li>
            <h3 className="year-link">
              <a href="/about/dillo-2014" id = "y2014">2014</a>
            </h3>
          </li>
          <li className="lineup-artist">2 Chainz</li>
          <li className="lineup-artist">Ryan Hemsworth</li>
          <li className="lineup-artist">Cults</li>
          <li className="lineup-artist">Chance the Rapper</li>
          <li className="lineup-artist">OK Go</li>
        </ul>
        <ul className="year-lineup">
          <li>
            <h3 className="year-link">
              <a href="/about/dillo-2013" id = "y2013">2013</a>
            </h3>
          </li>
          <li className="lineup-artist">Wiz Khalifa</li>
          <li className="lineup-artist">Lunice</li>
          <li className="lineup-artist">Smash Mouth</li>
          <li className="lineup-artist">Danny Brown</li>
          <li className="lineup-artist">Walk the Moon</li>
        </ul>
        <ul className="year-lineup">
          <li>
            <h3 className="year-link">
              <a href="/about/dillo-2012" id = "y2012">2012</a>
            </h3>
          </li>
          <li className="lineup-artist">Steve Aoki</li>
          <li className="lineup-artist">Big Boi</li>
          <li className="lineup-artist">Reel Big Fish</li>
          <li className="lineup-artist">Kendrick Lamar</li>
          <li className="lineup-artist">Cold War Kids</li>
        </ul>
      </main>
    </div>
  );
};

export default AboutDillo;
