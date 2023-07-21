import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import GridWrapper from '../misc/grid'
import  * as data from '../../ourteam.json'
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

function Team() {
    const classes = useStyles();
    return (
      <div className={classes.wrap}>
        <GridWrapper images={objects} page="ourteam"/>
      </div>

    );
}

export default Team;
