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
        textAlign: "left",
        paddingBottom: "1rem",
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
    link:{
        textDecoration:'none',
    },
    

    }));

function Tickets() {
    const classes = useStyles();
    return (
        <div className={classes.pageWrapper}>
        <div>
            <h1 className={classes.header}>
                TICKETS
            </h1>
        </div>
        <div className={classes.textBody}>
            <div style={{ textAlign: 'center' }}>
                <p>
                    <b>DILLO DAY</b> is the largest student-run music festival in the nation and one of the most beloved traditions at Northwestern. Order a festival wristband at <a className={classes.link} href = "https://nbo.universitytickets.com/w/event.aspx?id=1990&r=9d0b04f562164cbcb4f17bc58771dbbe"> <span className={classes.blue}>https://nbo.universitytickets.com/</span> </a>. 
                </p>

                <p>
                    <b>All attendees must register for their festival wristband by May 12th and pick up their festival wristband by May 19th.</b>
                </p>
            </div>

            <p>
                <b>Wristband distribution will be held at the Performance Hall at 2122 Sheridan Road from May 11th-May 19th. </b>
            </p>

            <p>
                <b>Distro Times:</b>
            </p>
            <ul>
                <li><b>Fri, May 12: 11:00am-5:00pm</b></li>
                <li><b>Sat, May 13: 11:00am-5:00pm</b></li>
                <li><b>Sun, May 14: 11:00am-5:00pm</b></li>
                <li><b>Mon, May 15: 11:00am-5:00pm</b></li>
                <li><b>Tues, May 16: 11:00am-7:00pm</b></li>
                <li><b>Wed, May 17: 11:00am-5:00pm</b></li>
                <li><b>Thurs, May 18: 11:00am-9:00pm</b></li>
                <li><b>Fri, May 19: 11:00am-5:00pm </b></li>
            </ul>

            <br></br>


            <h2 className={classes.header2}>
                UNDERGRADUATE STUDENTS
                </h2>

            <p>
                Every enrolled Northwestern University undergraduate student may receive a free festival wristband when they register for one through this website. If you are unable to register for an NU Undergraduate Wristband below, contact <a className={classes.link} href = "mailto: dilloopsforce@gmail.com"> <span className={classes.blue}>dilloopsforce@gmail.com</span> </a> immediately.
            </p>

            <br></br>

            <h2 className={classes.header2}>
                GUEST WRISTBANDS
                </h2>

            <h4 className={classes.header3}>
                UNDERGRADUATE GUESTS
            </h4>

            <p>
                A limited number of guest wristbands for the festival will also be available to undergraduates on a first-come-first-served basis at a cost of $25.00/wristband. Undergraduate students are limited to a single (1) guest wristband while quantities last. To purchase a $25.00 wristband, you will need to enter the guest’s name, date of birth, and telephone number at the time of purchase. Only purchase an additional wristband if you have your guest’s complete information; this information <b>cannot</b> be changed later. An incomplete submission will result in the transaction being voided. <b>Guests must be at least 18 years of age. No refunds, transfers, or exchanges. If any purchase is deemed to be fraudulent, or if an on-campus resident purchases more than one guest wristband, the tickets will be voided with no refund.</b>
            </p>

            <h4 className={classes.header3}>
                GRADUATE STUDENTS
            </h4>

            <p>
                A limited number of wristbands will be available to Northwestern University current graduate students (this includes Feinberg, Pritzker, and Kellogg). The wristbands will be available on a first-come-first-served basis at a cost of $30.00/wristband. Graduate students are limited to a single (1) wristband while quantities last. Graduate students can purchase additional guest wristbands through the extended guest option. Additionally, in order to pick up your wristband, you must come in person to either the designated downtown Chicago pick up location (limited hours) or Northwestern’s Evanston campus during the allotted distribution windows. <b>We are unable to accommodate requests outside of these pick up windows/locations.</b>
            </p>

            <h4 className={classes.header3}>
                EVANSTON COMMUNITY AND EXTENDED GUESTS
            </h4>

            <p>
                A limited number of wristbands have been set aside for purchase by Evanston residents and extended guests. These wristbands are $35.00/each. Residents and extended guests must be at least 18 years of age. Identification will be checked at wristband distribution to ensure outside attendees are 18 years of age or older. 
            </p>

            <h4 className={classes.header3}>
                ALUMNI
            </h4>

            <p>
                Alumni are welcome and encouraged to attend Dillo Day! Alumni will purchase a wristband through the Evanston Community and Extended Guests option at $35.00/wristband. 
            </p>

            <h4 className={classes.header3}>
                RULES AND REGULATIONS FOR GUESTS
            </h4>

            <p>
                IDs will be checked against the information provided at checkout. <b>Wristbands are not transferable and must be worn by the purchaser/registered guest.</b> If it is determined that an individual is not the same as the one registered to the wristband on the day of the festival, the wristband will be rendered inactive and that individual will not be admitted into the festival. No refund will be given. 
            </p>

            <h4 className={classes.header3}>
                ACCESSIBILITY
            </h4>

            <p>
                Individuals seeking reasonable accommodations related to accessibility and/or mobility needs on Dillo Day are encouraged to fill out the accessibility needs question in order to arrange appropriate festival accommodations. Mayfest cannot guarantee accommodations, and our Accessibility Team will review requests on a case by case basis. Any other questions or concerns related to accessibility can be sent to <a className={classes.link} href = "mailto: dillocommunity@gmail.com"> <span className={classes.blue}>dillocommunity@gmail.com</span> </a>.
            </p>

            <br></br>

            <h2 className={classes.header2}> WRISTBAND DISTRIBUTION </h2>

            <p>
                <b>NU undergraduates, graduate students, faculty, staff, and Evanston Residents must pick up their wristbands in person at the distribution locations. They must present a valid Wildcard or government-issued ID that matches the name on the wristband order. NU undergraduates and graduate students are also responsible for picking up their registered guest’s wristband during distribution. Undergraduates and graduates with registered guests will also need to present a photo of their guest’s state-issued ID to receive their guest’s wristband.</b> <b><u>Aside from guest wristbands no individual will be permitted to collect any other individual’s wristbands, and will be turned away without exception. </u></b>
            </p>
            
            <p>
                For NU undergraduates or graduates who purchased a guest wristband, a photo of their guest’s state-issued ID must be provided. It is at this time that the guest’s information will be verified against what was entered at the time of purchase.
            </p>

            <p>
                I acknowledge that this guarantees me one wristband per purchase, and if any replacement wristbands are needed I must purchase them through Mayfest Organization for $30.00 per replacement. By submitting this form I hereby agree to pick up my wristband according to the terms and time frame set above, and by not doing so will concede any right to the wristband. As such I may not request a chargeback on behalf of the credit card I have paid on. In the case of cancellation due to inclement weather or other emergency, there are no refunds given. Mayfest has the sole discretion as to any exceptions to these rules and appeals will be heard on a case by case basis. To submit formal requests for exceptions please send a brief description to <a className={classes.link} href = "mailto: dilloopsforce@gmail.com"> <span className={classes.blue}>dilloopsforce@gmail.com</span> </a>. 
            </p>
 
        </div>
    </div>
    );
}

export default Tickets;

