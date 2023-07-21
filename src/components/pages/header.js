import "../../styles/header.css";
import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import navStyles from "../../styles/headerstyles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from "@material-ui/core/Button";

// Change made on 5/21/2020 to remove some tabs for Digital Dillo
// Remember to undo for normal year

function Header(props) {
  let isHomepage = props.page === "home" || props.page === "battle";
  let navClasses = "navbar navbar-expand-lg";
  if (isHomepage) {
    navClasses = "trans-navbar navbar navbar-expand-lg";
  }
  const classes = navStyles();
  const [menuActive, setMenuActive] = useState(false);
  useEffect(() => {
    if(menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuActive])
  return (
    <>
      <MobileHeader page={props.page} menuActive={menuActive} />
      <nav className={navClasses}>
        <div className="logo-wrap">
          <a class="icon" href="/">
            <img
              class="dillo-icon"
              /*src="https://pro2-bar-s3-cdn-cf.myportfolio.com/b2e5fadc-42b1-4e58-a471-86f613e6af68/86f9037b-498c-433e-9057-399579a7dade_rwc_4x0x763x686x4096.png?h=4bc8c87eb3675df132149861464774c0"
          />*/
              src="https://i.imgur.com/TMeCJar.png"
            />
          </a>
        </div>
        <div className="navbar-collapse collapse" id="collapsingNavbar">
          <ul className="navbar-nav ml-auto">
            <li class="nav-item">
              <Nav.Link href="/"> HOME </Nav.Link>
            </li>
            {/*<li>
                        <Nav.Link href='/schedule'> Dillo 2020 Schedule </Nav.Link>
                    </li>*/}
            <li class="nav-item my-2 my-lg-0">
              <Nav.Link href="/ourteam">OUR TEAM</Nav.Link>
            </li>
            <li class="nav-item my-2 my-lg-0">
              <Nav.Link href="/past-dillos">PAST DILLOS</Nav.Link>
            </li>
            <li class="nav-item my-2 my-lg-0">
              <Nav.Link href="/tickets">TICKETS</Nav.Link>
            </li>
            <li class="nav-item my-2 my-lg-0">
              <Nav.Link href="/info">INFO</Nav.Link>
            </li>
            
            {/*<li>*/}
            {/*<Nav.Link href={Pdf}>Map</Nav.Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*<Nav.Link href='/community'> Community  </Nav.Link>*/}
            {/*</li>*/}
            <li class="nav-item">
              <Nav.Link
                href="https://inktankapparel.com/collections/mayfest"
                target="_blank"
              >
                MERCH
              </Nav.Link>
            </li>
            <li class="nav-item">
              <Nav.Link href="/contact">CONTACT</Nav.Link>
            </li>

            <li class="nav-item my-2 my-lg-0">
              <Nav.Link href="/sponsors">SPONSORS</Nav.Link>
            </li>
            <li class="nav-item my-2 my-lg-0">
              <Nav.Link href="/termsandconditions">TERMS & CONDITIONS</Nav.Link>
            </li>

            {/*<li class="nav-item">
            <Nav.Link href="http://mayfestproductions.com/">
              FOR SPONSORS
            </Nav.Link>
          </li>*/}

            {/*  <li class="nav-item">*/}
            {/*<Nav.Link href='/info'>Info</Nav.Link>*/}
            {/* Temporary change, revert back to info page after covid crisis^ */}
            {/*<Nav.Link href='https://www.northwestern.edu/studentorgs/about/faqs/index.html'>COVID-19 INFO</Nav.Link> */}
            {/*  </li> */}

            {/*<li>*/}
            {/*<Nav.Link href='/sponsors'> Sponsors </Nav.Link>*/}
            {/*</li>*/}
            {/*}<li>
                    <Nav.Link href='/charity'> Giving Back </Nav.Link>
                    </li>*/}
          </ul>
        </div>
        <div className={classes.hamburgerNav}>
          <Button
            className={classes.hamButton}
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          >
            <SvgIcon className={classes.hamburgerIcon}>
              <svg
                className={
                  menuActive ? classes.inactiveIcon : classes.activeIcon
                }
                viewBox="0 0 100 80"
                width="40"
                height="40"
              >
                <rect width="100" height="5" rx="8"></rect>
                <rect y="20" width="100" height="5" rx="8"></rect>
                <rect y="40" width="100" height="5" rx="8"></rect>
              </svg>
              <svg
                className={
                  menuActive ? classes.activeIcon : classes.inactiveIcon
                }
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 22.5L1.5 1.5M1.5 22.5L22.5 1.5L1.5 22.5Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </SvgIcon>
          </Button>
        </div>
      </nav>
    </>
  );
}

const MobileHeader = ({ page, menuActive }) => {
  let isHomepage = page === "home" || page === "battle";
  const classes = navStyles();
  return (
    <div
      className={`${menuActive ? classes.showList : classes.hideList} ${
        isHomepage ? "showList" : "fillerClass"
      } ${classes.hamburgerNav}`}
    >
      <ul className={classes.mobileList}>
        <li>
          <Nav.Link
            className={isHomepage ? classes.hamLinkHome : classes.hamLink}
            href="/"
          >
            {" "}
            HOME{" "}
          </Nav.Link>
        </li>
        <li>
          <Nav.Link
            className={isHomepage ? classes.hamLinkHome : classes.hamLink}
            href="/ourteam"
          >
            OUR TEAM
          </Nav.Link>
        </li>
        <li>
          <Nav.Link
            className={isHomepage ? classes.hamLinkHome : classes.hamLink}
            href="/past-dillos"
          >
            {" "}
            PAST DILLOS{" "}
          </Nav.Link>
        </li>
        <li>
          <Nav.Link
            className={isHomepage ? classes.hamLinkHome : classes.hamLink}
            href="/tickets"
          >
            {" "}
            TICKETS{" "}
          </Nav.Link>
        </li>
        <li>
          <Nav.Link
            className={isHomepage ? classes.hamLinkHome : classes.hamLink}
            href="/info"
          >
            {" "}
            INFO{" "}
          </Nav.Link>
        </li>

        <li>
          <Nav.Link
            className={isHomepage ? classes.hamLinkHome : classes.hamLink}
            href="https://inktankapparel.com/collections/mayfest"
            target="_blank"
          >
            {" "}
            MERCH{" "}
          </Nav.Link>
        </li>
        <li>
          {/*<Nav.Link href='/info'>Info</Nav.Link>*/
          /* Temporary change, revert back to info page after covid crisis^ */}
          <Nav.Link
            className={isHomepage ? classes.hamLinkHome : classes.hamLink}
            href="/contact"
          >
            CONTACT
          </Nav.Link>
        </li>
        <li>
          {/*<Nav.Link href='/info'>Info</Nav.Link>*/
          /* Temporary change, revert back to info page after covid crisis^ */}
          <Nav.Link
            className={isHomepage ? classes.hamLinkHome : classes.hamLink}
            href="/sponsors"
          >
            SPONSORS
          </Nav.Link>
        </li>
        <li>
          <Nav.Link
            className={isHomepage ? classes.hamLinkHome : classes.hamLink}
            href="/termsandconditions"
          >
            {" "}
            TERMS & CONDITIONS{" "}
          </Nav.Link>
        </li>


        {/*<li>*/}
        {/*<Nav.Link href={Pdf}>Map</Nav.Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*<Nav.Link href='/community'> Community  </Nav.Link>*/}
        {/*</li>*/}

        {/*<li>*/}
        {/*<Nav.Link href='/sponsors'> Sponsors </Nav.Link>*/}
        {/*</li>*/}
        {/*<li>
              <Nav.Link className={isHomepage ? classes.hamLinkHome : classes.hamLink} href="http://mayfestproductions.com/">
                {" "}
                FOR SPONSORS{" "}
              </Nav.Link>
            </li>
            */}
      </ul>
    </div>
  );
};
//render black on white
export default Header;

/*
        <Nav activeKey="/home" className="navbar navbar-expand-lg bg-light navbar-light" role="navegador">
            <a className="navbar-brand" href="/">Dillo Day</a>
            <Nav.Item class = "my-2 my-lg-0">
                <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/info'>Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/map'>Map</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/community'> Community  </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='https://inktankapparel.com/collections/mayfest'> Merch  </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/sponsors'> Sponsors </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/gallery'> Gallery </Nav.Link>
            </Nav.Item>
        </Nav>
 */