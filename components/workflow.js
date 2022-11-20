import React, { useState } from 'react';

import { WORKFLOW_STEPS } from '../constants';

import styles from '../styles/Workflow.module.css';

const Workflow = () => {

  const [ expandedSection, setExpandedSection ] = useState(WORKFLOW_STEPS.SHOP);

  const onClickSection = (section) => {
    setExpandedSection(section);
  };

  console.log({ expandedSection });

  return (
    <section className={styles.workflow}>
      <div className={styles.tabs}>
        <button
          onClick={() => onClickSection(WORKFLOW_STEPS.SHOP)}
          className={`${expandedSection === WORKFLOW_STEPS.SHOP ? 'active' : undefined}`}
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
            onClick={() => onClickSection(WORKFLOW_STEPS.PAY)}
            className={styles.stepWrapper}
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
          onClick={() => onClickSection(WORKFLOW_STEPS.GET_CODE)}
          className={styles.stepWrapper}
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
          onClick={() => onClickSection(WORKFLOW_STEPS.GET_CODE)}
          className={styles.stepWrapper}
        >
          <div className={styles.circleArrow}>
            <i className='fa-solid fa-circle-chevron-right' />
            <span>out the door</span>
          </div>
        </button>
      </div>
      <div className={styles.tabContent}>
        <p>Tab content here</p>
      </div>
    </section>    
  );
};

export default Workflow;
