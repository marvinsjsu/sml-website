import React from 'react';

import { SECTIONS } from '../constants';

import styles from '../styles/Header.module.css';

const Header = ({
  currSection,
  onClickTeam,
  onClickContact,
  onClickFeatures,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      <nav>
        <ul>
          <li>
            <a
              onClick={onClickFeatures}
              className={`${styles.btnLink}, ${currSection === SECTIONS.FEATURES ? styles.active : styles.inactive}`}
            >
              FEATURES
            </a>
          </li>
          <li>
            <a
              onClick={onClickTeam}
              className={`${styles.btnLink}, ${currSection === SECTIONS.TEAM ? styles.active : styles.inactive}`}
            >
              OUR TEAM
            </a>
          </li>
          <li>
            <a
              onClick={onClickContact}
              className={`${styles.btnLink}, ${currSection === SECTIONS.CONTACT ? styles.active : styles.inactive}`}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>    
  );
};

export default Header;
