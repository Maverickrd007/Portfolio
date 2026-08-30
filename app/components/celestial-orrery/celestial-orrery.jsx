import React from 'react';
import { classes } from '~/utils/style';
import styles from './celestial-orrery.module.css';

// SVG for the Lucide Shield icon
const Shield = ({ size = 24, strokeWidth = 2, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

export const CelestialOrrery = ({ className }) => {
  return (
    <div className={classes(styles.heroSection, className)} aria-hidden="true">
      <div className={styles.glyphField}>
        <div className={classes(styles.glyphContainer, styles.glyph1)} />
        <div className={classes(styles.glyphContainer, styles.glyph2)} />
        <div className={classes(styles.glyphContainer, styles.glyph3)} />
      </div>

      <div className={styles.orreryField}>
        <div className={classes(styles.orbit, styles.orbit1)}>
          <div className={styles.securityShield}>
            <Shield size={14} strokeWidth={1.8} />
          </div>
        </div>

        <div className={classes(styles.orbit, styles.orbit2)}>
          <div className={styles.securityShield}>
            <Shield size={12} strokeWidth={1.8} />
          </div>
        </div>

        <div className={classes(styles.orbit, styles.orbit3)}>
          <div className={styles.securityShield}>
            <Shield size={15} strokeWidth={1.8} />
          </div>
        </div>

        <div className={classes(styles.orbit, styles.orbit4)}>
          <div className={styles.securityShield}>
            <Shield size={11} strokeWidth={1.8} />
          </div>
        </div>
      </div>
    </div>
  );
};
