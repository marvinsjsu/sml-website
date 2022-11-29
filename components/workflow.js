import React, { useState } from 'react';

import ShopContent from '../components/flow/shop';
import PayContent from '../components/flow/pay';
import GetCodeContent from '../components/flow/get-code';
import DoneContent from '../components/flow/done';

import { WORKFLOW_STEPS } from '../constants';

import styles from '../styles/Workflow.module.css';

const WORKFLOW_CONTENTS = {
  [WORKFLOW_STEPS.SHOP]: ShopContent,
  [WORKFLOW_STEPS.PAY]: PayContent,
  [WORKFLOW_STEPS.GET_CODE]: GetCodeContent,
  [WORKFLOW_STEPS.OUT_THE_DOOR]: DoneContent,
};

const Workflow = () => {

  const [expandedSection, setExpandedSection] = useState(WORKFLOW_STEPS.SHOP);

  const TabComponent = WORKFLOW_CONTENTS[expandedSection];

  const onClick = (section) => {
    setExpandedSection(section);
  };



  console.log(expandedSection);

  return (
    <section className={styles.workflow}>
      <div className={styles.tabs}>
        <button
          onClick={() => onClick(WORKFLOW_STEPS.SHOP)}
          className={`${expandedSection === WORKFLOW_STEPS.SHOP ? styles.selected : undefined}`}
        >
          <div className={styles.shoppingCart}>
              <i className='fa-solid fa-basket-shopping' />
              <span>shop</span>
          </div>
        </button>
        <div className={styles.arrows}>
          <i className='fa-solid fa-angles-right' />
          <i className='fa-solid fa-angles-right' />
        </div>
        <button
            onClick={() => onClick(WORKFLOW_STEPS.PAY)}
            className={`${expandedSection === WORKFLOW_STEPS.PAY ? styles.selected : undefined}`}
          >
          <div className={styles.phone}>
              <i className='fa-solid fa-mobile-screen-button' />
              <span>pay</span>
          </div>
        </button>
        <div className={styles.arrows}>
          <i className='fa-solid fa-angles-right' />
          <i className='fa-solid fa-angles-right' />
        </div>
        <button
          onClick={() => onClick(WORKFLOW_STEPS.GET_CODE)}
          className={`${expandedSection === WORKFLOW_STEPS.GET_CODE ? styles.selected : undefined}`}
        >
          <div className={styles.qrcode}>
            <i className='fa-solid fa-qrcode' />
            <span>get code</span>
          </div>
        </button>
        <div className={styles.arrows}>
          <i className='fa-solid fa-angles-right' />
          <i className='fa-solid fa-angles-right' />
        </div>
        <button
          onClick={() => onClick(WORKFLOW_STEPS.OUT_THE_DOOR)}
          className={`${expandedSection === WORKFLOW_STEPS.OUT_THE_DOOR ? styles.selected : undefined}`}
        >
          <div className={styles.circleArrow}>
            <i className='fa-solid fa-circle-chevron-right' />
            <span>done</span>
          </div>
        </button>
      </div>
      <div className={styles.tabContent}>
      {/* shop content */}

      <TabComponent />

      {/* get code content */}
      {/* AI theft detection */}
     
{/* 
      <Player
        src='https://assets9.lottiefiles.com/packages/lf20_ha1sw9v2.json'
        className="player"
        autoplay
        keepLastFrame
      />

      <Player
        src='https://assets4.lottiefiles.com/private_files/lf30_m075yjya.json'
        className="player"
        // hover
        ref={playerRef}
        style={{ height: '300px', width: '300px' }}
      />

      <Player
        src='https://assets7.lottiefiles.com/temp/lf20_33Ejte.json'
        className="player"
        // autoplay
        hover
        keepLastFrame
        style={{ height: '300px', width: '300px' }}
      /> */}
      </div>
    </section>    
  );
};

export default Workflow;
