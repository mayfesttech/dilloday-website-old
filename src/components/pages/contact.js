import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import email from '../../images/social/contact-us.png'
import Footer from './footer.js'

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    color: "white",
    fontWeight: "300",
  },
  email:{
    textAlign: "center",
    color: "white",
  },
  social:{
    width: "100%",
    display: "table",
    margin: "0",
    alignContent:"center",
    backgroundColor: "#040404",
    textAign: "center",
  },
  iconBar:{
    alignContent: "center",
    paddingTop: "10px",
    paddingLeft: "0px",
    paddingRight: "44px",
    textAlign:"center",
  },
  icon:{
    display: "inline",
    padding: "4px",
    width: "38px",
    paddingRight:"15px",
    paddingBottom:"20px",
  },
  formParameters:{
    color:"white",
  },
  formClass:{
    textAlign: "center",
  },
  inputboxes:{
    width: "35%",
    height:"40px",
  },
  messageinputbox:{
    width: "35%",
    height:"130px",
  },
  justinbarbin:{
    color:"white",
    fontSize:"15px",
    textAlign: "center",
    paddingTop:"70px",
    paddingBottom:"70px",
  },
  inputButton: {
    fontFamily: "inherit",
    backgroundColor: "#333333",
    color: "white",
    border: 0,
    borderRadius: "5px",
    fontWeight: "300",
    width: "100px",
    height: "40px",
  }
  }));


function Contact() {
  const classes = useStyles();
  return (
    <div>
        <h1 className={classes.header}>CONTACT</h1>
        <div>
            <p className={classes.email}> email: dilloday@gmail.com</p>
            <Footer />
            <div className={classes.form}>
            <form className={classes.formClass} action="https://formsubmit.co/dilloday@gmail.com" method="POST">
                <label className={classes.formParameters} for="name">Name *</label>
                <br></br>
                <input className={classes.inputboxes} type="text" id="fname" name="name" placeholder="Your Name..." required></input>
                <br></br>
                <br></br>

                <label className={classes.formParameters} for="email">Email Address *</label>
                <br></br>
                <input className={classes.inputboxes} type="text" id="lname"  name="email" placeholder="Your Email Address..." required></input>
                <br></br>
                <br></br>

                <label className={classes.formParameters} for="email">Message *</label>
                <br></br>
                <textarea className={classes.messageinputbox} name="message" height="100px" type="text" id="lname" placeholder="Your Message..." required></textarea>
                <br></br>
                <br></br>

                <input className = {classes.inputButton} type="submit" value="Submit"></input>
            </form>
            </div>
            <div className={classes.justinbarbin}>
                <span>all photos courtesy of Justin Barbin Photography</span>
            </div>
        </div>
    </div>
    );
}





export default Contact;
