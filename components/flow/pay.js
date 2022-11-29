import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import styles from '../../styles/PayContent.module.css';


const PayContent = () => {
  return (
    <div className={styles.payContent}>
      <div className={styles.contentRow}>
        <Player
          // src='https://assets9.lottiefiles.com/packages/lf20_DaD4lb.json'
          src='https://assets9.lottiefiles.com/packages/lf20_meNSkq.json'
          className="player"
          autoplay
          keepLastFrame
          style={{ height: '300px', width: '300px' }}
        />
        <p>
          Fastest checkout for your customers.
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
