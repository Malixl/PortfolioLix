import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faPhone } from '@fortawesome/free-solid-svg-icons';

function NavigationBar() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <ul>
            <li>
              <a href="#hero">
                <FontAwesomeIcon icon={faHouse} />
              </a>
            </li>
            <li>
              <a href="#about">
                <FontAwesomeIcon icon={faAddressCard} />
              </a>
            </li>
            <li>
              <a href="#contact">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
