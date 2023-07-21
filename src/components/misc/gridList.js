import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    boxSizing: 'none',
    '& ul': {
      textIndent: '0px',
      width: '95%',
    }
  },
  eachPic: {
    width: '100%',
      [theme.breakpoints.down('sm')]: {
        height: "auto" ,
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        height: "300px!important" ,
        width: "auto!important" ,
      },
      [theme.breakpoints.up('lg')]: {
        height: "400px!important" ,
        width: "auto!important" ,
      },
  },
  imageWrapper: {
    width: '100%',
    height: 'auto', 
    display: 'flex!important',
    justifyContent: 'center!important',
    maxWidth: '100%',
  },
  

}));


function GridListWrapper(props){
    const classes = useStyles();

    let contents=[]

    let topRow = props.firstRow;
    const theme = useTheme();
    const ifSmall = useMediaQuery(theme.breakpoints.down('xs'));
    let gridCols = ifSmall ? 1 : 3;
    let gridHeight = 'auto';
    //if !props
    console.log(props);
    for(let i =0; i< topRow.length; i++){
      contents.push(
        <GridListTile>
          <div className = {classes.imageWrapper}>
            <img className={classes.eachPic} src= {topRow[i]}/>
          </div>
        </GridListTile>
      );
    }


  return(
    <div className={classes.root}>
      <GridList cellHeight={gridHeight} cols={gridCols} spacing={0}>
          {contents}
      </GridList>
    </div>
  );
}

export default GridListWrapper;
