import React from 'react';

import Image from 'next/image';

import styles from '../styles/Home.module.css';


const Team = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.team}>
      <div className={styles.videoWrapper}>
        <Image
          src={'/images/team-video-placeholder.jpg'}
          alt='SkipMyLine on iPhone'
          height={510}
          width={750}
        />
      </div>

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
  );
});

Team.displayName = 'Team';

export default Team;
