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

function Terms() {
    const classes = useStyles();
    return (
        <div className={classes.pageWrapper}>
        <div>
            <h1 className={classes.header}>
                TERMS AND CONDITIONS
            </h1>
        </div>
        <div className={classes.textBody}>

            <p>
                Dillo Day strives to create the safest and most comfortable environment for all attendees. As such, we are providing a set of guidelines and community standards in order to ensure we meet this goal together. To have the best Dillo Day experience for the students, guests, artists, staff members, and Mayfest members, we have outlined the following expectations. If the following expectations are not met, we reserve the right to remove individuals from the festival without a refund: 
            </p>

            <ul>
                <li>* Dillo Day has a <u>zero-tolerance policy for discrimination of any kind</u>, including but not limited to discrimination on the basis of race, color, religion, sex, gender identity, sexual orientation, national origin, age, disability, or genetic information. Attendees determined to have engaged in discriminatory behavior face removal from the festival. </li>
                <li>* Under no circumstances will harassment of any kind towards festival attendees, festival staff, Northwestern staff, security, or Mayfest members be tolerated and may result in grounds for removal from the festival. </li>
                <li>* Damage, defacement, destruction, or theft of property, including but not limited to festival decor, golf carts, and stages is grounds to be immediately removed from the festival.</li>
                <li>All attendees are required to adhere to the University community standards guidelines found in the <a className={classes.link} href = "https://www.northwestern.edu/communitystandards/student-handbook/"> <span className={classes.blue}>Student Handbook</span> </a>.</li>
            </ul>

            <br></br>

            <h2 className={classes.header2}>
                WHAT TO EXPECT
                </h2>

            <p>
                In order to protect the whole community during Dillo Day, there will be a security presence at the festival. Upon entry, there will be an airport-style check-in with security checking individuals and bags before admittance onto the festival grounds. For more information on our bag policy and what items are allowed and prohibited, check the corresponding section. If specific accommodations are needed, please reach out to <a className={classes.link} href = "mailto: dilloopsforce@gmail.com"> <span className={classes.blue}>dilloopsforce@gmail.com</span> </a> and we will try to accommodate your needs. 
            </p>

            <p>
                We at Mayfest understand the complicated relationship between security and our attendees. As a major event with significant security concerns, a security presence is a necessity. However, we actively work to ensure that this security presence does not take away from anyone’s experience at the festival and that everyone is as comfortable and safe as possible within the festival. For full transparency, at the festival, there will be uniformed NUPD officers and uniformed private security personnel. Mayfest will also have our Student Intervention Service (SIS) out on the Lakefill. SIS is focused on mitigating any problems revolving around security and the attendees. By providing a student buffer, we strive to cut down on tensions and make the festival the best it can be. For more information surrounding SIS, please visit our website or reach out to <a className={classes.link} href = "mailto: dilloopsforce@gmail.com"> <span className={classes.blue}>dilloopsforce@gmail.com</span> </a>. 
            </p>

            <br></br>

            <h4 className={classes.header3}>
                BAG POLICY
            </h4>

            <p>
                While certain bags are permitted within the festival we highly encourage those who do not need a bag to leave them at home. Individuals may bring in one (1) small personal bag, no bigger than a typical backpack. Examples include purses, drawstring bags, or camelbacks. Bigger bags will not be allowed into the festival. All bags will be searched by security prior to entering the festival. For questions, email <a className={classes.link} href = "mailto: dilloopsforce@gmail.com"> <span className={classes.blue}>dilloopsforce@gmail.com</span> </a>. 
            </p>

            <br></br>

            <h4 className={classes.header3}>
                PERMITTED AND PROHIBITED ITEMS
            </h4>

            <p>
                <b><u>Permitted items: </u></b>
            </p>
            <ul>
                <li>* Empty water bottles </li>
                <li>* Sunscreen </li>
                <li>* Blankets, Sheets, Towels </li>
            </ul>

            <p>
                <b><u>Prohibited items:  </u></b>
            </p>
            <ul>
                <li>* Skateboards, scooters, bikes, and other personal vehicles  </li>
                <li>* Water balloons or water guns  </li>
                <li>* Any aerosol  </li>
                <li>* Coolers (exceptions can be made for medical use) </li>
                <li>* Drones, remote-controlled aircraft, or other unstaffed aerial vehicles and flying objects </li>
                <li>* Hammocks </li>
                <li>* Glass containers  </li>
                <li>* Illegal or illicit substances or drug paraphernalia </li>
                <li>* Outside beverages (including alcohol) </li>
                <li>* Umbrellas </li>
                <li>* Pets (excluding service animals) </li>
                <li>* Tents or shade-making devices  </li>
                <li>* Fireworks </li>
                <li>* Weapons of any kind (firearms, knives, etc.) </li>
                <li>* Pepper spray </li>
                <li>* Selfie sticks </li>
                <li>* Any and all professional audio recording equipment </li>
                <li>* Professional cameras and professional recording (photo, video, audio) equipment (NO large professional detachable zoom lenses, stands, monopods, tripods, attachment sticks (selfie sticks), or other commercial equipment). </li>
                <li>* Unauthorized/unlicensed vendors are not allowed. No unauthorized solicitation and materials including handbills, flyers, stickers, beach balls, giveaways, samples, etc. </li>
            </ul>

            <br></br>

            <h4 className={classes.header3}>
                MEDICATION POLICY
            </h4>

            <p>
                Prescription medication is allowed within the festival grounds. To bring in prescription medication, the individual must bring with them the pharmacy-labeled container, which details the prescription, dosage, and patient name. Individuals are only allowed to bring enough supply of medication for that day. Medications needed to be inhaled or smoked are prohibited unless in a prescribed inhaler. 
            </p>

            <p>
                Over-the-counter medications such as Dayquil, acetaminophen, antacids, or antihistamines, can be brought into the festival with only a sufficient amount for the day. 
            </p>

            <br></br>

            <h4 className={classes.header3}>
                ACCESSIBILITY POLICY
            </h4>

            <p>
                Individuals seeking reasonable accommodations related to accessibility and/or mobility needs on Dillo Day are encouraged to reach out to Mayfest in order to arrange appropriate festival accommodations. Mayfest cannot guarantee accommodations, and our Accessibility Team will review requests on a case-by-case basis. When ordering a wristband, fill out the accessibility requests Any questions or concerns related to accessibility can be sent to <a className={classes.link} href = "mailto: dillocommunity@gmail.com"> <span className={classes.blue}>dillocommunity@gmail.com</span> </a>.
            </p>

            <br></br>

            <h4 className={classes.header3}>
                GUEST WRISTBAND POLICY
            </h4>

            <p>
                A limited number of guest wristbands for the festival will also be available to undergraduates on a first-come-first-served basis at a cost of $25.00/wristband. Students living on campus are limited to a single (1) guest wristband while quantities last. Students living off campus can purchase multiple guest wristbands and these guests must stay in off campus housing. To purchase a $25.00 wristband, you will need to enter the guest’s name, date of birth, and telephone number at the time of purchase. Only purchase an additional wristband if you have your guest’s complete information; this information <b>cannot</b> be changed later. An incomplete submission will result in the transaction being voided. <b>Guests must be at least 18 years of age. No refunds, transfers, or exchanges. If any purchase is deemed to be fraudulent, or if an on-campus resident purchases more than one guest wristband, the tickets will be voided with no refund.</b>
            </p>
 
        </div>
    </div>
    );
}

export default Terms;

