import React from 'react';
import whiteLogo from '../images/sindano_health_logo_white.svg';
import instagram from '../images/social/icon_instagram.svg';
import twitter from '../images/social/icon_twitter.svg';
import facebook from '../images/social/icon_facebook.svg';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div>
        <div>
          <img src={whiteLogo} alt="Sindano logo"></img>
          <p>&copy; {currentYear} Sindano&#8482;</p>
          <p>All Rights Reserved</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">What we do</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms and conditions</a>
            </li>
          </ul>
        </nav>
        <div>
          <ul>
            <li>
              <a href="#">
                <img src={instagram} alt="instagram icon"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="twitter icon"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebook} alt="facebook icon"></img>
              </a>
            </li>
          </ul>
          <div>
            <p>(555)555-1234</p>
            <p>hello@sindanohealth.com</p>
            <p>2748 Callison Lane, Newark, DE</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
