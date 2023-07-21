import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  * as aboutdata from '../../about.json';
import  * as ourteamdata from '../../ourteam.json';
import GridListWrapper from './gridList';
import AboutDillo from '../pages/aboutdillo'
import Collage from './collage'
//const arrayData = data.picsArray;

const useStyles = makeStyles((theme) => ({
  pageHeader:{
     width: '100%',
     height: '90px',
     fontSize: '60px',
     [theme.breakpoints.down('md')]: {
      fontSize: '50px'
    },
     [theme.breakpoints.down('sm')]: {
      fontSize: '40px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px'
    },
     color: 'white',
     textAlign: 'center',
     marginTop: '25px',
     marginBottom: '25px',
     color: '#F6FFFD',
     display: "flex",
     justifyContent: "center",
     fontFamily: "inherit"
  },
  imageWrapper:{
    width:"100%",
  },
  image:{
    display: 'flex',
    width: "100%",
    height: "100%",
  },
  description:{
    marginTop: '20px',
    width:'95%',
    fontSize: '20px',
    color: 'white',
    fontSize: '20px',
    margin:'auto',
    fontFamily: 'sans-serif',
  }

}));
function PageWrapper(props){
  const classes = useStyles();
  let id = props.item;
  let arrayData;
  let routerlink = props.routerlink;
  let page = props.page;
  if(page=="about"){
    arrayData= aboutdata.picsArray;
  }
  else{
    arrayData= ourteamdata.picsArray;
  }
  let pageList =  arrayData.filter(arrayData => arrayData.routerlink == id);

  /*This is for the first box in gridlist which has special routing*/
  if(!pageList[0]){
    return (
      <AboutDillo/>
    );
  }

  else{
    let pageTitle = pageList[0].title;
    let pageDescription= pageList[0].pageInfo.description;
    let topRowPics= pageList[0].pageInfo.images;
    let collagePics = pageList[0].pageInfo.collage;
    return (

      <div className={classes.container}>
        <div className={classes.pageHeader}>
          {pageTitle}
        </div>
        <div className = {classes.imageWrapper}>
          <GridListWrapper firstRow={topRowPics}/>
        </div>
        <div className={classes.description}>
          {pageDescription}
          </div>
        <div className={classes.description}>
          <Collage collage = {collagePics} />
        </div>
      </div>
    );
  }
}

export default PageWrapper;
