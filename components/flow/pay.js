import React, { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import styles from '../../styles/ShopContent.module.css';


const PayContent = () => {

  const fastPayDivRef = React.createRef(null);
  const reportDivRef = React.createRef(null);
  const staffDivRef = React.createRef(null);

  const fastPayPlayerRef = React.createRef(null);
  const fastClockPlayerRef = React.createRef(null);
  const reportPlayerRef = React.createRef(null);
  const staffPlayerRef = React.createRef(null);

  const playerDivRefs = [
    {
      divRef: fastPayDivRef,
      playerRefs: [fastPayPlayerRef, fastClockPlayerRef],
    },
    {
      divRef: reportDivRef,
      playerRefs: [reportPlayerRef],
    },
    {
      divRef: staffDivRef,
      playerRefs: [staffPlayerRef],
    }
  ];

  const update = () => {
    playerDivRefs.forEach(({ divRef, playerRefs }) => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        if (rect.top < 500) {
          playerRefs.forEach(player => {
            player.current.play();
          });
        }
      }
    });
  };

  useEffect(() => {
    document.addEventListener('scroll', update);

    return () => {
      document.removeEventListener('scroll', update);
    };
  }, []);

  return (
    <div className={styles.payContent}>
      <div className={styles.contentRow} ref={fastPayDivRef}>
        <div className={styles.playerContainer}>
          <Player
            // src='https://assets9.lottiefiles.com/packages/lf20_DaD4lb.json'
            // src='https://assets4.lottiefiles.com/packages/lf20_drde2n3z.json'
            // src='https://assets7.lottiefiles.com/packages/lf20_6Ufe0t.json'
            src='https://assets10.lottiefiles.com/datafiles/uoZvuyyqr04CpMr/data.json'
            className={styles.playerPay}
            keepLastFrame
            style={{ height: '300px', width: '300px' }}
            ref={fastPayPlayerRef}
          />
          <Player
            src='https://assets4.lottiefiles.com/packages/lf20_drde2n3z.json'
            // src='https://assets7.lottiefiles.com/packages/lf20_6Ufe0t.json'
            className={styles.playerClock}
            keepLastFrame
            style={{ height: '180px', width: '180px' }}
            ref={fastClockPlayerRef}
          />
        </div>
        <p>
          <span className={styles.highlight}>Fast, Easy, and Secure.</span>
          With the hassle-free and intuitive checkout system,
          customers can skip the checkout line and easily pay on the app.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.contentRow} ref={reportDivRef}>
        <p>
          <span className={styles.highlight}>Dynamic analytics and reports.</span>
          Inventory audits, transactional analysis, and reporting made easy and real-time.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <div className={styles.playerContainer}>
          <Player
            src='https://assets6.lottiefiles.com/packages/lf20_I4WxtH.json'
            // src='https://assets7.lottiefiles.com/packages/lf20_6Ufe0t.json'
            className={styles.playerReport}
            keepLastFrame
            style={{ height: '350px', width: '350px' }}
            ref={reportPlayerRef}
          />
        </div>
      </div>
      <div className={styles.contentRow} ref={staffDivRef}>
        <div className={styles.playerContainer}>
          <Player
            // src='https://assets9.lottiefiles.com/packages/lf20_c8pgmddl.json'
            src='https://assets8.lottiefiles.com/packages/lf20_dyppatws.json'
            className={styles.playerStaff}
            keepLastFrame
            style={{ height: '350px', width: '350px' }}
            ref={staffPlayerRef}
          />
        </div>
        <p>
          <span className={styles.highlight}>Happier Staff.</span>
          Let your staff focus on the more important things.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      {/* <Player
        src='https://assets4.lottiefiles.com/private_files/lf30_m075yjya.json'
        className="player"
        // hover
        ref={playerRef}
        style={{ height: '300px', width: '300px' }}
      /> */}     
    </div>
  );
};

export default PayContent;
