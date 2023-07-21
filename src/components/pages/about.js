import React from "react";
import '../../styles/App.css';
import { makeStyles } from '@material-ui/core/styles';
import GridWrapper from '../misc/grid'
import  * as data from '../../about.json'
import '../../styles/background.css'
const a = data.picsArray;
let objects = [];
for(let i=0; i< a.length; i++){
  objects.push(a[i])
  };

const useStyles = makeStyles((theme) => ({
  wrap:{
  maxWidth: '100%',
  overflowX: 'hidden',
  }
  }));

function About() {
    const classes = useStyles();
    return (
      <div className={classes.wrap}>
        <GridWrapper images={objects} page="about"/>
      </div>
    );
}

export default About;
