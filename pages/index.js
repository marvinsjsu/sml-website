import React, { useState } from 'react';

import Head from 'next/head';
import Script from 'next/script';

import Header from '../components/header';
import MainBanner from '../components/main-banner';
import Workflow from '../components/workflow';
import Features from '../components/features';
import Team from '../components/team';
import Footer from '../components/footer';

import styles from '../styles/Home.module.css';

import { SECTIONS } from '../constants';

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
        <title>SkipMyLine</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        currSection={currSection}
        onClickTeam={onClickTeam}
        onClickContact={onClickContact}
        onClickFeatures={onClickFeatures}
      />
      <main className={styles.main}>
        <MainBanner />
        <Workflow />
        <Features ref={featuresRef} />
        <Team ref={teamRef} />
      </main>
      <Footer ref={contactRef} />
      <Script src="https://kit.fontawesome.com/1516a28d30.js" crossorigin="anonymous"></Script>
    </div>
  )
}
