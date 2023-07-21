import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
    pageWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },
    header: {
        fontWeight: "400",
        fontSize: "3.75rem",
    },
    header2: {
        fontWeight: "400",
        fontSize: "2.75rem",
        textAlign: "center",
        paddingBottom: "1rem",
    },
    header3: {
        fontWeight: "400",
        fontSize: "1.75rem",
        textAlign: "center",
        paddingBottom: "1rem",
    },
    image: {
        width: "60%",
    },
    imageContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        verticalAlign: "middle",
        alignContent: "center",
        justifyContent: "center",
        margin: "auto",
    },
    textBody: {
        flexWrap: "wrap",
        verticalAlign: "middle",
        alignContent: "center",
        margin: "0 3rem 0 3rem",
        
    },
   
    blue: {
        color: "#75DEE3",
    },
    bodyText: {
        fontSize: "1.1rem",
    },
    listText: {
        margin: "1rem 0",
        fontSize: "1.1rem"
    },
    subheader: {
        fontWeight: "400",
        marginTop: "1rem",
    },
    link:{
        textDecoration:'none',
    },
    root: {
        paddingBottom: "10px",
    }
    

    }));

function Info() {
    const classes = useStyles();
    return (
        <div className={classes.pageWrapper}>
        <div>
            <h1 className={classes.header}>
                INFORMATION
            </h1>
        </div>
        <div className={classes.imageContainer}>
            <img 
                src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/b2e5fadc-42b1-4e58-a471-86f613e6af68/a37b5fa4-689f-4afb-89ae-4f1c0442111e_rw_1200.jpg?h=5bb4a6983b5413c09eaaa6e52de938dc"
                alt="Dillo Day Image"
                className={classes.image}
            />
        </div>
        <div className={classes.textBody}>
            <h2 className={classes.header2}>DILLO DAY: WHO, WHAT, WHEN, AND WHERE?</h2>
            <h4 className={classes.header3}>
                DILLO DAY IS PRODUCED BY STUDENTS, FOR STUDENTS.
            </h4>

            <p>
            Dillo Day is the largest student-run music festival in the nation and a beloved Northwestern University tradition. For fifty years, Mayfest Productions has planned and produced every detail of the festival for the Northwestern community.
            </p>

            <br></br>

            <p>
                For specific questions about wristbands, admission and accessibility: <a className={classes.link} href="mailto: dilloopsforce@gmail.com"> <span className={classes.blue}>dilloopsforce@gmail.com</span>  </a> 
            </p>
            <p>
                For press and editorial inquiries, media and interviews: <a className={classes.link} href = "mailto: dillodaypromotions@gmail.com"> <span className={classes.blue}>dillodaypromotions@gmail.com</span>  </a> 
            </p>
            <p>
                For all other questions: <a className={classes.link} href = "mailto: dilloday@gmail.com"> <span className={classes.blue}>dilloday@gmail.com</span>  </a> 
            </p>
            <p>
                Dillo Day is held on Northwestern University’s Lakefront, and the entrance is on the East Lawn of the Norris University Center.
            </p>

            <br></br>
            
            <p>
                Dillo Day is open to:
            </p>
            <ol>
                <li>
                    Northwestern undergraduates, graduate students, faculty, staff and alumni
                </li>
                <li>
                    Members of the Evanston community above the age of 18
                </li>
            </ol>
            <p>
                All attendees must have a wristband to attend Dillo Day.
            </p>
            <p>
                Check back on this website to follow any artist announcements. Mayfest announces artists as their contracts are finalized. For real-time updates, follow us on Twitter or like us on Facebook.
            </p>
 
        </div>
    </div>
    );
}

export default Info;

