import React from 'react';


import styles from '../styles/Home.module.css';

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} className={styles.footer}>
      <i className='fa-solid fa-angles-right' />
      <h3>SkipMyLine</h3>
      {/* <i className='fa-solid fa-angles-right' /> */}
      <i className='fa-solid fa-circle-chevron-right' />
      
      
    </footer>    
  );
});

export default Footer;
