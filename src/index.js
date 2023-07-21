import React from 'react';
import ReactDOM from 'react-dom';
//import Link from "react-router-dom";
import { Link, useParams } from 'react-router-dom';
import './styles/index.css';
import App from './components/pages/App';
import About from './components/pages/about'
import Team from './components/pages/ourteam'
import Community from './components/pages/community'
import Info from './components/pages/info'
import Tickets from './components/pages/tickets'
import Terms from './components/pages/terms'
import Sponsors from "./components/pages/sponsors";
import Lineup from "./components/pages/lineup"
import Charity from "./components/pages/charity"
import Schedule from "./components/pages/schedule"
import AboutDillo from './components/pages/aboutdillo'
import Mayfest from './components/pages/mayfest'
import * as serviceWorker from './components/util/serviceWorker';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/pages/header";
import Footer from "./components/pages/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ChooseRedirect from "./components/misc/chose-redirect";
import Contact from "./components/pages/contact";
import Battle from "./components/pages/battleofthebands";
import { TicketSharp } from 'react-ionicons';
//test test comment


const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/">

                    <App/>

                </Route>
                <Route exact path="/past-dillos">
                    <Header />
                    <About/>
                </Route>
                <Route exact path="/ourteam">
                    <Header />
                    <Team/>
                </Route>
                <Route exact path="/tickets">
                    <Header />
                    <Tickets/>
                    <Footer />
                </Route>
                <Route exact path="/info">
                    <Header />
                    <Info/>
                    <Footer />
                </Route>
                {/* <Route exact path="/community">
                    <Header />
                    <Community/>
                    <Footer />
                </Route> */}
                <Route exact path="/sponsors">
                    <Header />
                    <Sponsors/>
                    <Footer />
                </Route>
                <Route exact path="/termsandconditions">
                    <Header />
                    <Terms/>
                    <Footer />
                </Route>
                <Route exact path="/contact">
                    <Header />
                    <Contact/>
                </Route>
                <Route exact path="/about/dillo-day">
                    <Header />
                    <AboutDillo/>
                    <Footer />
                </Route>
                {/* <Route exact path="/lineup">
                    <Lineup/>
                </Route> */}
                {/* <Route exact path="/charity">
                    <Charity/>
                </Route> */}
                {/* <Route exact path="/schedule">
                    <Schedule/>
                </Route> */}
                {/* <Route exact path="/battle">
                    <Battle/>
                </Route> */}
                {/* <Route exact path="/ourteam/mayfest">
                    <Header />
                    <Mayfest />
                    <Footer />
                </Route> */}
                <Route path="/about/:id" children={<ChooseRedirect page="about"/>}/>
                <Route path="/ourteam/:id" children={<ChooseRedirect page="ourteam"/>} />
                <Route exact path="/live" render={() => (window.location = "https://www.liveshow.link/digitaldillo2020")} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));