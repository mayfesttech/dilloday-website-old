import React from "react";
import '../../styles/footer.css';
import email from '../../images/social/contact-us.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTwitter, faSpotify} from "@fortawesome/free-brands-svg-icons";




function Footer(){
    return (
          <div class="social-footer">
            <a href="https://www.facebook.com/DilloDay">
              <FontAwesomeIcon icon={faFacebook} class="footer-icon"/>
            </a>
            <a href="https://www.instagram.com/dillo_day/">
              <FontAwesomeIcon icon={faInstagram} class="footer-icon"/>
            </a>
            <a href="https://twitter.com/dillo_day">
              <FontAwesomeIcon icon={faTwitter} class="footer-icon"/>
            </a>
            <a href="https://open.spotify.com/user/dillo_day">
              <FontAwesomeIcon icon={faSpotify} class="footer-icon"/>
            </a>
          </div>
    );

}

export default Footer;
