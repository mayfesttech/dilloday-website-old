import React from "react";
import mayfestStyles from "../../styles/mayfestStyles";

const Mayfest = () => {
  const cl = mayfestStyles();
  return (
    <div className={cl.pageWrapper}>
      <h1 className={cl.header}>MAYFEST</h1>
      <div className={cl.imgWrapper}>
        <img
          className={cl.lgimg}
          src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/b2e5fadc-42b1-4e58-a471-86f613e6af68/d6a84734-459a-42b3-b8d6-e1994d4ad609_rw_1920.jpg?h=15d3d87e3d4ff7e9019f23693a2c0304"
          alt="Picture of the Mayfest Team"
        />
      </div>
      <div className={cl.textWrapper}>
        <p className={cl.bodyText}>
          Mayfest Productions is a student organization at Northwestern
          University that plans and produces the nation’s largest student- run
          music festival — Dillo Day, with over 12,000 festival attendees. The
          organization is comprised of{" "}
          <span className={cl.blue}>10 committees and subcommittees</span> — The
          General Board, Booking, Corporate, DIW (Diversity, Inclusion, and
          Wellness), Production, Programming, Promotions, Tech Team, and 
          Operations — with a number of core responsibilities and
          cross-committee collaborations that translate directly to the success
          of our events. In addition to the festival, Mayfest hosts and promotes
          a number of other programming events including Battle of the Bands and
          Battle of the DJs. <br />
          <br />
          Mayfest Productions is{" "}
          <span className={cl.blue}>
            committed to fostering community on campus
          </span>{" "}
          with events and campus engagement. The organization strives to bring
          people together through music and seeks to curate diverse, inclusive,
          and accessible spaces while creating experiences for{" "}
          <span className={cl.blue}>
            <i>all</i>
          </span>{" "}
          to enjoy. <br />
          <br />
          Ultimately, we love music, we promote community, and, most
          importantly, <span className={cl.blue}>“We Do Dillo Day.”</span>
        </p>
      </div>
      <iframe
        src="https://player.vimeo.com/video/291397953"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h2 className={cl.subheader}>
        <span className={cl.blue}>"WE DO DILLO DAY." </span>
        <i>BUT THAT'S NOT ALL WE DO.</i>
      </h2>
      <div className={cl.textWrapper}>
        <p className={cl.bodyText}>
          Although it’s easy to conflate the two, Dillo is not all we do. The
          slogan <span className={cl.blue}>“We Do Dillo Day”</span> is an
          important part of the Mayfest brand as it encompasses a large part of
          the Mayfest spirit. Still, Dillo represents only a part of who we are
          as we host a number of events throughout the year including the
          aforementioned Battle of the Bands and Battle of the DJs amongst a
          number of others and{" "}
          <span className={cl.blue}>
            <i>foster a community for our members that is unrivaled</i>
          </span>{" "}
          by many organizations on campus.
        </p>
      </div>
      <div className={cl.imgWrapper}>
        <img
          className={cl.lgimg}
          src="https://pro2-bar-s3-cdn-cf.myportfolio.com/b2e5fadc-42b1-4e58-a471-86f613e6af68/19b17913-1572-4dd2-b8d0-b6f0b51eda06_rw_1920.jpg?h=5af21739665eb8b038796fb4bb56dc80"
          alt="Mayfest team"
        />
      </div>
      <h2 className={cl.subheader}>
        <span className={cl.blue}>OUR CORE VALUES</span>
      </h2>
      <div className={cl.textWrapper}>
        <p className={cl.bodyText}>
          Northwestern University’s Mayfest Productions is a student
          organization that hosts the nation’s largest student-run music
          festival, Dillo Day, along with a number of other events. Given
          Mayfest’s ongoing interactions with a number of individual entities,
          the organization upholds a responsibility to gain and maintain the
          confidence of its stakeholders (including, but not limited to, the
          student body, the residents of Evanston, and our sponsors). In
          accordance with this responsibility,{" "}
          <span className={cl.blue}>
            <i>Mayfest’s Core Values</i>
          </span>{" "}
          are as follows:
        </p>
        <ul className={cl.valuesList}>
          <li className={cl.listText}>
            <span className={cl.blue}>
              1. Mayfest Productions is committed to creating diverse,
              inclusive, and accessible environments in which members (both
              within and without the organization) feel a sense of equal value
              and belonging.
            </span>
          </li>
          <li className={cl.listText}>
            2. Mayfest Productions remains dedicated to cultivating an
            environment in which there is (1) mutual respect among its members
            in addition to attendees of Mayfest-sponsored events and (2) respect
            towards the spaces (both social and physical) which we occupy.
          </li>
          <li className={cl.listText}>
            <span className={cl.blue}>
              3. Mayfest Productions seeks to foster community at Northwestern
              together through university-wide events such as Battle of the
              Bands, Battle of the DJs, and Dillo Day.
            </span>
          </li>
          <li className={cl.listText}>
            4. Mayfest Productions encourages its members to actively understand
            the way in which they impact their environments and use that
            awareness to inspire self-development.
          </li>
          <li className={cl.listText}>
            <span className={cl.blue}>
              5. Mayfest Productions strives to remain transparent in
              communicating necessary information to the entirety of the
              organization and its aforementioned stakeholders — barring any
              contractual obligations.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mayfest;
