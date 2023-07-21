import { makeStyles } from '@material-ui/core/styles';

const sliderStyles = makeStyles((theme) => ({
    pageWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },
    pageTitle: {
        marginTop: "5rem",
        color: "white",
        fontSize: "3.75rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2.5rem"
        },
    },
    header: {
        color: "#75DEE3",
        fontWeight: "400",
    },
    imgWrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    lgimg: {
        width: "62%",
    },
    blue: {
        color: "#75DEE3",
    },
    textWrapper: {
        width: "50%",
        paddingRight: "2rem",
        color: "white",
        [theme.breakpoints.down("sm")]: {
            width: "75%",
            paddingRight: "0",
        },
    },
    video: {
        width: "100%",
        padding: 0,
        margin: 0,
    },
    videoContainer: {
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            width: "80%",
        },
    },
    sponsorVideo:{
        marginTop: "3rem",
        [theme.breakpoints.down("sm")]: {
            width: "60%",
        },
    },
    bodyContainer: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "2rem 10% 0 10%",
        textAlign: "left",
        [theme.breakpoints.down("sm")]: {
            flexFlow: "column nowrap",
            margin: "2rem 0 0 0",
        },
    },
    bodyText: {
        fontSize: "1rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem"
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "1.2rem"
        },
    },
    listText: {
        margin: "1rem 0",
        fontSize: "1.1rem",
        color:"white",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem"
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "1.2rem"
        },
    },
    subheader: {
        fontWeight: "400",
        marginTop: "1rem",
    },
    valuesList: {
        textIndent: "0",
        margin: "0 10%",
        padding: "0",
        [theme.breakpoints.down("sm")]: {
            margin: "0 12%"
        },
        
    },
    pageBody1: {
        textAlign: "center",
        display: "flex",
        flexFlow: "column",
        minHeight: "80vh",
        alignContent:"center",
        justifyContent:"center"
    },
    
}))

export default sliderStyles