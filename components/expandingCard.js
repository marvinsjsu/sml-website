import React, { useState, useEffect, useRef } from 'react';

import style from '../styles/expandingCard.module.css';

export default function ExpandingCard({ title, children, open = false }) {

  const [isOpen, setIsOpen] = useState(open);
  const [containerHeight, setContainerHeight] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  const observerRef = useRef(null);
  const animationRef = useRef(null);
  const paddedHeight = 48;

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new ResizeObserver((containers) => {
        setContainerHeight(containers[0].contentRect.height + paddedHeight); 
      });
    }

    if (containerRef) {
      observerRef.current.observe(containerRef.current);
    }

    let currentContainerRef = containerRef.current;

    return () => {
      if (observerRef?.current && currentContainerRef) {
        observerRef.current.unobserve(currentContainerRef);
      }
    };
  }, []);

  useEffect(() => {
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }

    animationRef.current = setInterval(() => setIsAnimating(false), 1000);

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [isOpen]);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
    if (!isAnimating) {
      setIsAnimating(true);
    }
  };

  return (
    <div className={style.expandingCard}>
      <div
        onClick={toggleIsOpen}
        className={style.header}
      >
        <div className={style.title}>
          {title}
        </div>
        <div className={style.ctaContainer}>
          <button
            className={style.ctaBtn}
            onClick={toggleIsOpen}
          >
            {isOpen ? '-' : '+'}
          </button>
        </div>
      </div>
      <div
        className={`${style.content}`}
        style={{height: isOpen ? containerHeight : 0}}
      >
        <div
          ref={containerRef}
          className={`${style.children}, ${isOpen ? style.open : style.closed}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};