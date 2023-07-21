import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ItemWrapper from './gridItem';
//import '../../styles/griddummy.css'
//import '../styles/Grid.css';

//Styles
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
  },
  img: {
    //margin: 'auto',
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  flexbox: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'black',
    width: '117.5%', //100% if you have 4 griditem per row, 120% for 5 griditems per row
    margin: 'auto',
    borderRadius: '15px',
    padding: 'none',

  },
 overlay:{
   
 }
  // dummy: {
  //   backgroundColor: 'blue',
  // }
}));


function GridWrapper(props){
  const classes = useStyles();
  let contents=[]
  let pics = props.images
  let page = props.page
  for(let i=0; i < pics.length; i++){
    if(i===5 || i === 11){ //these are the two dummy boxes that are pushed off the screen
      contents.push(
          <ItemWrapper boxType={"dummy"}/>
        )
    }
  contents.push(
        <ItemWrapper number = {i} link = {pics[i].link} title = {pics[i].title} date = {pics[i].date} routerlink = {pics[i].routerlink} page = {page}/>
    )
}


  return(
<div className={classes.flexbox}>
    <div className={classes.root}>
      <Grid container spacing={0}>
        {contents}
      </Grid>
    </div>
</div>
  );
}

export default GridWrapper
