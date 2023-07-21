import { makeStyles } from '@material-ui/core/styles';

const mayfestStyles = makeStyles((theme) => ({
    pageWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },
    header: {
        fontWeight: "400",
    },
    imgWrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    imageContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        verticalAlign: "middle",
        alignContent: "center",
    },
    textBody: {
        flexWrap: "wrap",
        verticalAlign: "middle",
        alignContent: "center",
    },
    lgimg: {
        width: "62%",
    },
    blue: {
        color: "#75DEE3",
    },
    textWrapper: {
        width: "80%",
        margin: "1rem 0",
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
    valuesList: {
        textIndent: "0",
        margin: "0",
        padding: "0",
    },
    link: {
        textDecoration: "none",
        color: "#75DEE3",
    },
    root: {
        paddingBottom: "10px",
    }
    
}))

export default mayfestStyles