import React from 'react';

import Image from 'next/image';

import styles from '../styles/MainBanner.module.css';

const MainBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <h2>Checkout made easy. <br/>Quickly. Simply. Intuitive.</h2>
        <p>
          <span className={styles.orangeText}>SkipMyLine</span> is everything you need for avoiding
          the lines at your next store checkout.
        </p>
        <button className={styles.btnLinkToStore}>
          <i className='fa-brands fa-apple' />
          <span className={styles.btnText}>
            <span className={styles.smallText}>Download on the </span><br/>
            Apple App Store
          </span>
        </button>
        <button className={styles.btnLinkToStore}>
          <i className='fa-brands fa-google-play' />
          <span className={styles.btnText}>
            <span className={styles.smallText}>Download on the </span><br/>
            Google Play
          </span>
        </button>
      </div>
      <div className={styles.right}>
        <div className={styles.iphoneImgWrapper}>
          <Image
            src={'/images/iphone-with-robot.png'}
            alt='SkipMyLine on iPhone'
            height={510}
            width={550}
          />
        </div>
      </div>
    </section>    
  );
};

export default MainBanner;
