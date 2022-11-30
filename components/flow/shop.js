import React, { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import styles from '../../styles/ShopContent.module.css';

const ShopContent = () => {

  const personalizationDivRef = React.createRef(null);
  const vicinityDivRef = React.createRef(null);
  const optimalDivRef = React.createRef(null);

  const notificationsPlayerRef = React.createRef(null);
  const personalizationPlayerRef = React.createRef(null);
  const vicinityPlayerRef = React.createRef(null);
  const optimalPlayerRef = React.createRef(null);

  const playerDivRefs = [
    {
      divRef: personalizationDivRef,
      playerRefs: [notificationsPlayerRef, personalizationPlayerRef],
    },
    {
      divRef: vicinityDivRef,
      playerRefs: [vicinityPlayerRef],
    },
    {
      divRef: optimalDivRef,
      playerRefs: [optimalPlayerRef],
    }
  ];

  const update = () => {
    playerDivRefs.forEach(({ divRef, playerRefs }) => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        if (rect.top < 450) {
          playerRefs.forEach(player => player && player.current && player.current.play());
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
    <div className={styles.content}>
      <p className={styles.tagLine}>
        With the <span className={styles.appName}>SkipMyLine</span> mobile app, customers
        can start their shopping experience before getting to the store.  Through the app,
        customers can browse products, compare prices, get details of surrounding stores,
        and so much more.
      </p>
      <div className={styles.contentRow} ref={personalizationDivRef}>
        <div className={styles.playerContainer}>
          <Player
            src='https://assets10.lottiefiles.com/packages/lf20_tzcqru4w.json'
            className={styles.playerNotifications}
            style={{ height: '200px', width: '250px' }}
            ref={notificationsPlayerRef}
            keepLastFrame
          />  
          <Player
            src='https://assets7.lottiefiles.com/packages/lf20_z9gxmvaq.json'
            className={styles.playerPersonalizations}
            style={{ height: '250px', width: '250px' }}
            ref={personalizationPlayerRef}
            keepLastFrame
          />
        </div>
        <p>
          <span className={styles.highlight}>Personalized notifications and product recommendations.</span>
          Reach out to customers with promotions and provide a dynamic smart list of product suggestions.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.contentRow} ref={vicinityDivRef}>
        <p>
          <span className={styles.highlight}>Real-time inventory and value by vicinity.</span>
          Allow your customers to see what products are nearby, compare prices, and pre-order.  Share
          store details beyond open hours and elevate customer experience.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <div className={styles.playerContainer}>
          <Player
            src='https://assets5.lottiefiles.com/packages/lf20_xq4r0atm.json'
            className={styles.player}
            style={{ height: '350px', width: '400px' }}
            keepLastFrame
            ref={vicinityPlayerRef}
          />  
        </div> 
      </div>
      <div className={styles.contentRow} ref={optimalDivRef}>
        <div className={styles.playerContainer}>
          <Player
            src='https://assets5.lottiefiles.com/packages/lf20_JEC7Oo.json'
            className={styles.playerCheckout}
            keepLastFrame
            style={{ height: '200px', width: '250px' }}
            ref={optimalPlayerRef}
          />
        </div>
        <p>
          <span className={styles.highlight}>Optimal shopping experience.</span>
          Reduce friction and provide your customers a fast, painless shopping
          experience.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default ShopContent;
