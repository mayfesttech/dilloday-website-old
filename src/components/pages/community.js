import logo from "../../images/background2020_trans.png";
import React from "react";
import '../../styles/App.css';
import community19 from '../../images/community.jpg'



function Community() {
    return (
        <div className="Community">
            <div className ='flex-container'>
                <div>
                    <header>
                        COMMUNITY
                    </header>
                </div>

                <div>
                    <img src={community19} className="banner-img" alt="community    "/>

                </div>

                <div>
                    <p>Dillo Day is an annual all-day music festival and a Northwestern tradition since 1972. Today it is the largest student-run music festival in the nation, organized by Mayfest Productions, a Northwestern student group.

                        Mayfest spends the entire academic year preparing for Dillo Day. The extensive planning required to create a music festival of this magnitude includes meeting with the highest members of Northwestern University administration (including President Morton Schapiro), the office of Off-Campus Life, local and University law enforcement, members of the Evanston municipal government, production vendors, and more. Mayfest’s goal is to provide a music festival that is fun and safe, along with providing an opportunity to strengthen ties between the student body and Evanston community in a day of mutual enjoyment.

                        Dillo Day will be held on June 1, 2019, and the festival is indeed open to members of the Evanston community! Registration, wristband costs, and distribution details can be found in the "Information" section of this website. We look forward to seeing members of the Evanston community on the Lakefront Dillo Day 2019.</p></div>
                <div>
                    <header>
                        COMMUNITY RELATED PLANNING SCHEDULE
                    </header>

                    <h2>
                            Fall Quarter:
                    </h2>
                    <ul>
                        <li>
                            <p>
                                Received approval from President Morton Schapiro, along with various Northwestern administrators, on the date and timeline of Dillo 2019.
                            </p>
                        </li>

                        <li>
                            <p>
                                Preliminary meetings with Northwestern University Student Affairs staff, including Vice President Julie Payne-Kirchmeier.
                            </p>
                        </li>

                        <li>
                            <p>
                                Continuous contact with the Northwestern University Assistant Dean of Students/Director of Off-Campus Life, Anthony “Tony” Kirchmeier, to discuss progress on prior years.
                            </p>
                        </li>
                    </ul>


                    <h2>
                        Winter Quarter:
                    </h2>
                    <ul>
                        <li>
                            <p>
                                Regular Taskforce meetings begin between Northwestern Facilities Management, Risk Management, Director of Athletics, Student Affairs staff, Off-Campus Life, along with the Mayfest Executive Board and production vendors.
                            </p>
                        </li>

                        <li>
                            <p>
                                Mayfest Co-Chairs meet to discuss Dillo Day with President Morton Schapiro and Vice President Julie Payne-Kirchmeier relating to safety and security both on and off-campus.
                            </p>
                        </li>

                            <li>
                                <p>
                                    Mayfest’s Productions committee applies for sound permits from the City of Evanston, with procedures in place to ensure that all day-of music is directed away from local Evanston residents.
                                </p>
                            </li>

                            <li>
                                <p>
                                    Meetings with Norris Box Office (NBO) to discuss wristband design, along with wristband technology improvements for a safe Dillo for all festival-attendees.
                                </p>
                            </li>
                            </ul>


                        <h2>
                            Spring Quarter:
                        </h2>
                        <ul>
                            <li>
                                <p>
                                    Taskforce meetings now occur weekly to ensure that all finishing touches are in place relating to safety, security, city permits, and Lakefront festivities.
                                </p>
                            </li>

                            <li>
                                <p>
                                                Letter sent out to the Evanston Township High School (ETHS) community highlighting the rules & restrictions for minors attempting to attend Dillo.
                                </p>
                            </li>

                            <li>
                                <p>
                                    Mayfest’s Operations committee plans free food distribution for all concert-goers.
                                </p>
                            </li>

                            <li>
                                <p>
                                    Mayfest’s Corporate and Operations committee work with ride-sharing companies to provide discounted rides for all concert attendees to mitigate off-campus pedestrian traffic.
                                </p>
                            </li>
                        </ul>


                </div>
                <div>
                    <header>
                        INFORMATION AND RESOURCES
                    </header>
                    <ul>
                        <li>
                            Download the Dillo Day 2019 app from the <a href="https://apps.apple.com/us/app/dillo-day-2019/id1463746487"> App Store </a> and <a href="https://play.google.com/store/apps/details?id=com.mayfest.dilloday2019"> Google Play! </a>

                        </li>
                        <li>
                            Smart Dillo Flyer
                        </li>
                        <li>
                            <a href="https://twitter.com/SmartDillo">
                                Smart Dillo Twitter

                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Community;
