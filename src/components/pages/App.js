import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/App.css";
import Header from "../../components/pages/header";
import Footer from "../../components/pages/footer";
import sliderStyles from "../../styles/sliderStyles";

//change logo?

function App() {
  const cl = sliderStyles();

  return (
    <div>
      <div className="background">
        <Header />
        <header className="App-header">
          <img
            src="https://i.imgur.com/Cg9k8CS.png"
            className="App-logo"
            alt="Mayfest Productions Logo"
          />
        </header>
        <Footer />
      </div>
      <Carousel className="carousel" fade interval={null}>
        <Carousel.Item className="carousel-item" id="first-slide">
          <div className={cl.pageBody1}>
            <h1 className={cl.pageTitle}>About Dillo Day</h1>
            <div className={cl.bodyContainer}>
              <div className={`${cl.textWrapper}`}>
                <p className={cl.bodyText}>
                  Mayfest Productions is a student organization at Northwestern
                  University that plans and produces the nation's largest
                  student- run music festival — Dillo Day, with over 12,000
                  festival attendees. The organization is comprised of{" "}
                  <span className={cl.blue}>
                    10 committees and subcommittees
                  </span>{" "}
                  — The General Board, Booking, Corporate, DIW (Diversity,
                  Inclusion, and Wellness), Finance, Production, Programming, Promotions,
                  Tech Team, and Operations — with a number of
                  core responsibilities and cross-committee collaborations that
                  translate directly to the success of our events. In addition
                  to the festival, Mayfest hosts and promotes a number of other
                  programming events including Battle of the Bands and Battle of
                  the DJs. <br />
                  <br />
                  Mayfest Productions is{" "}
                  <span className={cl.blue}>
                    committed to fostering community on campus
                  </span>{" "}
                  with events and campus engagement. The organization strives to
                  bring people together through music and seeks to curate
                  diverse, inclusive, and accessible spaces while creating
                  experiences for{" "}
                  <span className={cl.blue}>
                    <i>all</i>
                  </span>{" "}
                  to enjoy. <br />
                  <br />
                  Ultimately, we love music, we promote community, and, most
                  importantly,{" "}
                  <span className={cl.blue}>“We Do Dillo Day.”</span>
                </p>
              </div>
              <div className={cl.videoContainer}>
                <iframe
                  className={cl.video}
                  title="We Do Dillo Day"
                  src="https://player.vimeo.com/video/291397953"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  width="1000"
                  height="300"
                ></iframe>
              </div>
            </div>
            <div>
            <iframe className={cl.sponsorVideo} src="https://player.vimeo.com/video/696661425?h=bce1750159&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="384" height="216" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="evanston_final_revised.mp4 (2160p).mp4"></iframe>
              </div>
          </div>
          <Footer />
        </Carousel.Item>
        <Carousel.Item className="carousel-item" id="second-slide">
          <div className={cl.pageBody1}>
            <h1 className={cl.pageTitle}>Our Core Values</h1>

            <ul className={cl.valuesList}>
              <li className={cl.listText}>
                <span className={cl.blue}>
                  1. Mayfest Productions is committed to creating diverse,
                  inclusive, and accessible environments in which members (both
                  within and without the organization) feel a sense of equal
                  value and belonging.
                </span>
              </li>
              <li className={cl.listText}>
                2. Mayfest Productions remains dedicated to cultivating an
                environment in which there is (1) mutual respect among its
                members in addition to attendees of Mayfest-sponsored events and
                (2) respect towards the spaces (both social and physical) which
                we occupy.
              </li>
              <li className={cl.listText}>
                <span className={cl.blue}>
                  3. Mayfest Productions seeks to foster community at
                  Northwestern together through university-wide events such as
                  Battle of the Bands, Battle of the DJs, and Dillo Day.
                </span>
              </li>
              <li className={cl.listText}>
                4. Mayfest Productions encourages its members to actively
                understand the way in which they impact their environments and
                use that awareness to inspire self-development.
              </li>
              <li className={cl.listText}>
                <span className={cl.blue}>
                  5. Mayfest Productions strives to remain transparent in
                  communicating necessary information to the entirety of the
                  organization and its aforementioned stakeholders — barring any
                  contractual obligations.
                </span>
              </li>
            </ul>
          </div>
          <Footer />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
