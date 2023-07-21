import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import "../../styles/battleofthebands.css";
import Footer from '../../components/pages/footer';

const useStyles = makeStyles((theme) => ({
  dummy:{
    backgroundImage: 'url("https://i.imgur.com/Nqkz9Bc.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "120vh",
    display: "flex",
    flexFlow: "column nowrap",
    overflowX: "hidden",
  },
  page:{
    backgroundColor: "inherit",
    display: "flex",
    flexFlow: "column nowrap",
    textAlign: "center",
    alignItems: "center",
  },
  title: {
    padding: "2rem 0 4rem 0",
    color: "white",
    fontSize: "3.75rem",
    fontFamily: "Solid Grooves",
    textShadow: "-4px 4px #F2497B",
    textStroke: "1px #F2497B",
  },
  content:{
    width:"100%",
    height:"25rem",
    paddingBottom:"3rem",
    [theme.breakpoints.down('lg')]: {
       height: "25rem",
    },[theme.breakpoints.down('md')]: {
       height: "25rem",
    },
    [theme.breakpoints.down('sm')]: {
       height: "30rem",
    },[theme.breakpoints.down('xs')]: {
     height: "20rem",
    },
  },
  iframe:{
    width: "50%",
    height: "100%",
    [theme.breakpoints.down('sm')]: {
     width: "80%",
    },
    [theme.breakpoints.down('xs')]: {
     width: "80%",
    },
  },
  logoWrap:{
    float: "left",
    width: "100%",
    marginLeft: "4%",
    marginTop: "2.25rem",
  },
  icon:{
  },
  dilloIcon:{
    minWidth: "70px",
    maxWidth: "80px",
  },

}));


function Battle() {

const classes = useStyles();

return (

  <div className={classes.dummy}>
  <div className ={classes.logoWrap}>
    <a className={classes.icon} href="/">
      <img
        className={classes.dilloIcon}
        src="https://i.imgur.com/TMeCJar.png" />
    </a>
  </div>
    <div className={classes.page}>
      <h1 className={classes.title}>DILLO DAY 2021</h1>
        <div className={classes.content}>
          <iframe className= {classes.iframe} src="https://www.youtube.com/embed/u6l5NRqofXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className={classes.content}>
          <iframe className= {classes.iframe} src="https://www.youtube.com/live_chat?v=u6l5NRqofXI&embed_domain=www.dilloday.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    <Footer />
  </div>

    );
}

export default Battle;
