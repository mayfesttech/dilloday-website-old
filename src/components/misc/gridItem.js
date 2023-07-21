import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
//import '../styles/Grid.css';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: "100%",
    height: "100%",
    padding: '0',
    opacity: '0.07',
  },
  img: {
    //margin: 'auto',
    display: 'flex',
    // maxWidth: '100%',
    // maxHeight: '100%',
  },
  item: {
    zIndex: 0,
    backgroundColor: '#257c8a',
    boxSizing: 'none',
    border: '0',
    position: 'relative',
    opacity: '1',
    '&:hover $image': {
      opacity: '1',
      transition: '0.15s',
    },
    '&:hover $text': {
      opacity: '0.3',
      textAlign: 'left',
      underline: 'none',
      marginLeft: '5px',
      marginRight: '2px'
    },
    '&:hover $datetext': {
      opacity: '1',
      textAlign: 'center',
      underline: 'none',
    },
  },
  title: {

  },
  // overlay: {
  //   height: '100%',
  //   width: '100%',
  // },
  text: {
    opacity: '1',
    color: 'white',
    fontSize: '20px',
    lineHeight: '32px',
    color: '#a8a5a5',
    top: '30%',
    width: '100%',
    position: 'absolute',
    whiteSpace: 'normal',
    textAlign: 'center',
  },
  datetext: {
    fontSize: '13px',
    position: 'absolute',
    whiteSpace: 'normal',
    width: '100%',
    opacity: '1',
    color: '#999999',
    textAlign: 'center',
  },
  dummy: {
    width: 0,
    //display: 'none',
    ['@media (max-width:960px)']: { //Media query for collapsed grid layout (960px corresponds to 'md' in material ui)
      display: 'none',
    }
  },
  cover: {
    margin: '3px',
    zIndex: 0,
    backgroundColor: '#1c7e87',
    boxSizing: 'none',
    border: '0',
    position: 'relative',
    opacity: '1',
    '&:hover $image': {
      opacity: '.5',
      transition: '0.25s',
    },
    '&:hover $text': {
      textAlign: 'center',
      underline: 'none',
      color: 'white',
      fontSize: '23px',
      transition: '.25s',
    },
    '&:hover $datetext': {
      opacity: '1',
      textAlign: 'center',
      underline: 'none',
      color: 'white',
      fontSize: '15px',
      transition: '.25s',
    },
  },
  gridHolder: {
    display: 'inline',
  },

}));


function ItemWrapper(props) {
  const classes = useStyles();
  let link = props.link;
  let title = props.title;
  let date = props.date;
  let routerlink = props.routerlink;
  let gridpage = props.page;
  routerlink = "/" + gridpage + "/" + routerlink;
  let type = props.boxType;
  let num = props.number;
  if (type === "dummy") {
    return (

        <div>

        </div>
       

    );
  }
  else {
      return (

          <Grid  item xs={10} sm={5} md={2} xl={2} className={classes.cover} border={0}>
            <a href={routerlink} className={classes.link}>
              <img className={classes.image} src={link}></img>
              <div className={classes.text}>{title}
                <div className={classes.datetext}>{date}</div>
              </div>
            </a>
          </Grid>
       


      );
  }
}

export default ItemWrapper;
