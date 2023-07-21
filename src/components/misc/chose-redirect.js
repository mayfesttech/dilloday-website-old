import React from 'react';
import PageWrapper from "./gridItem-page";
import { useParams } from 'react-router-dom';
import Footer from "../pages/footer";
import Header from "../pages/header";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: "100px",
  },

}));

function ChooseRedirect(props){
  const classes = useStyles();

  let { id } = useParams();
  let page = props.page;

  return (
    <div>
    <Header />
    <PageWrapper item={id} page={page}/>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
    );

}

export default ChooseRedirect;
