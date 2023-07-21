import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/dom";
import './header.css'
const navStyles = makeStyles((theme) => ({
  mobileList: {
    padding: 0,
    margin: 0,
    display: 'flex',
    flexFlow: "column nowrap",
    alignItems: "center",
    textIndent: "none",
    marginTop: "2rem",
  },
  mobileListItem: {
    textAlign: "center",
  },
  hamburgerNav: {
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      zIndex: "10",
    },
  },
  hamburgerIcon: {
    color: "white",
    // position: "absolute",
    // right: 0,
    // top: 0,
    zIndex: "20"
  },
  showList: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100vw",
      height: "100%",
      position: "absolute",
      top: "0rem",
      left: 0,
      paddingTop: "6rem",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      textAlign: "center",
      backgroundSize: 'cover',
      backgroundImage: "url('https://i.imgur.com/IaREssH.jpg')"
  },
  hideList: {
      display: "none",
  },
  hamLink: {
    color: "#888888",
    margin: "0.5rem",
    fontSize: "1.2rem",
  },
  hamLinkHome: {
    color: "#F6FFFD",
    margin: "0.5rem",
    fontSize: "2rem",
    fontFamily: 'inherit',
    WebkitTextStrokeWidth: "1.5px",
    WebkitTextStrokeColor: "black",
    letterSpacing: "1.25px",
    textAlign: "center",
    //width: "fit-content",
  },
  activeIcon: {
      display: "block",
      webkitFilter: "drop-shadow( 1px 1px 0px black)",
      filter: "drop-shadow( 1px 1px 0px black)",
  },
  inactiveIcon: {
      display: "none",
  },
  hamButton: {
    position: "absolute",
    top: 0,
    left: 0,
  },

}));

export default navStyles;
