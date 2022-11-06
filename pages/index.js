import React, { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

import ExpandingCard from '../components/expandingCard';

import styles from '../styles/Home.module.css';


const SECTIONS = {
  FEATURES: 'features',
  CONTACT: 'contact', 
  TEAM: 'team', 
};

export default function Home() {

  const teamRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const featuresRef = React.useRef(null);

  const [currSection, setCurrSection] = useState(null);

  const scrollOptions = {
    behavior: 'smooth',
    inline: 'center',
    block: 'start',
  };

  const onClickFeatures = (evt) => {
    evt.preventDefault();
    featuresRef.current.scrollIntoView(scrollOptions);
    setCurrSection(SECTIONS.FEATURES);
  };

  const onClickTeam = (evt) => {
    evt.preventDefault();
    teamRef.current.scrollIntoView(scrollOptions);
    setCurrSection(SECTIONS.TEAM);
  };

  const onClickContact = (evt) => {
    evt.preventDefault();
    contactRef.current.scrollIntoView(scrollOptions);
    setCurrSection(SECTIONS.CONTACT);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Skip My Line</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <main className={styles.main}>
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
                src={'/images/iphone-img.png'}
                alt='SkipMyLine on iPhone'
                height={520}
                width={520}
              />
            </div>
          </div>
        </section>
        <section className={styles.workflow}>
          <div className={styles.shoppingCart}>
            <i className='fa-solid fa-basket-shopping' />
            <span>pick up</span>
          </div>
          <div className={styles.arrows}>
            <i className='fa-solid fa-angles-right' />
            <i className='fa-solid fa-angles-right' />
          </div>
          <div className={styles.phone}>
            <i className='fa-solid fa-mobile-screen-button' />
            <span>pay</span>
          </div>
          <div className={styles.arrows}>
            <i className='fa-solid fa-angles-right' />
            <i className='fa-solid fa-angles-right' />
          </div>
          <div className={styles.qrcode}>
            <i className='fa-solid fa-qrcode' />
            <span>get code</span>
          </div>
          <div className={styles.arrows}>
            <i className='fa-solid fa-angles-right' />
            <i className='fa-solid fa-angles-right' />
          </div>
          <div className={styles.circleArrow}>
            <i className='fa-solid fa-circle-chevron-right' />
            <span>out the door</span>
          </div>
        </section>
        <section ref={featuresRef} className={styles.features}>
          <div className={styles.left}>
            {/* <div className={styles.iconWrapper}>
              <i className='fa-solid fa-cart-shopping' />
              <i className='fa-solid fa-circle-chevron-right' />
              <i className='fa-solid fa-qrcode' />
              <i className='fa-solid fa-mobile-screen-button' />
              <i className='fa-solid fa-basket-shopping' />
              <i className='fa-solid fa-angles-right' />
            </div> */}
            <h2>Store Owners</h2>
            <ExpandingCard
              title='maintain accurate inventory'
              open
            >
              {/* <Image
                src='/images/operations-dc-migration.png'
                alt='Data Center Migration image'
                height={92}
                width={77}
              /> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </ExpandingCard>
            <ExpandingCard
              title='minimize personnel needs'
            >
              {/* <Image
                src='/images/operations-dc-migration.png'
                alt='Data Center Migration image'
                height={92}
                width={77}
              /> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </ExpandingCard>
            <ExpandingCard
              title='enhanced customer experience'
            >
              {/* <Image
                src='/images/operations-dc-migration.png'
                alt='Data Center Migration image'
                height={92}
                width={77}
              /> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </ExpandingCard>
            <ExpandingCard
              title='theft deterrence'
            >
              {/* <Image
                src='/images/operations-dc-migration.png'
                alt='Data Center Migration image'
                height={92}
                width={77}
              /> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </ExpandingCard>
          </div>
          <div className={styles.right}>
            <h2>Customers</h2>
            <ExpandingCard
              title='check inventory of stores nearby'
              open
            >
              {/* <Image
                src='/images/operations-dc-migration.png'
                alt='Data Center Migration image'
                height={92}
                width={77}
              /> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </ExpandingCard>
            <ExpandingCard
              title='find the best prices'
            >
              {/* <Image
                src='/images/operations-dc-migration.png'
                alt='Data Center Migration image'
                height={92}
                width={77}
              /> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </ExpandingCard>
            <ExpandingCard
              title='fast checkout'
            >
              {/* <Image
                src='/images/operations-dc-migration.png'
                alt='Data Center Migration image'
                height={92}
                width={77}
              /> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </ExpandingCard>
            <ExpandingCard
              title='minimize purchase friction'
            >
              {/* <Image
                src='/images/operations-dc-migration.png'
                alt='Data Center Migration image'
                height={92}
                width={77}
              /> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </ExpandingCard>
          </div>
        </section>
        <section ref={teamRef} className={styles.team}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className={styles.teamMembers}>
              <div className={styles.member}>
                <i className='fa-solid fa-user' />
                <span className={styles.name}>Murali Kandlagunta</span>
                <span className={styles.title}>Co-Founder</span>
              </div>
              <div className={styles.member}>
                <i className='fa-solid fa-user' />
                <span className={styles.name}>Srinivas Totapally</span>
                <span className={styles.title}>Co-Founder</span>
              </div>
              <div className={styles.member}>
                <i className='fa-solid fa-user' />
                <span className={styles.name}>Sandeep Narra</span>
                <span className={styles.title}>CTO</span>
              </div>
          </div>
        </section>
      </main>
      <footer ref={contactRef} className={styles.footer}>
        <i className='fa-solid fa-angles-right' />
        <h3>SkipMyLine</h3>
        {/* <i className='fa-solid fa-angles-right' /> */}
        <i className='fa-solid fa-circle-chevron-right' />
        
        
      </footer>
      <Script src="https://kit.fontawesome.com/1516a28d30.js" crossorigin="anonymous"></Script>
    </div>
  )
}
