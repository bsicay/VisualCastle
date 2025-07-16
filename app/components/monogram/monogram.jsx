import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="98"
      height="69"
      viewBox="0 0 2455 3171"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 69.445 83.747 C 69.809 84.711, 147.367 226.237, 241.797 398.250 L 413.488 711 1238.994 710.998 L 2064.500 710.996 2236.198 398.248 C 2330.632 226.237, 2408.194 84.711, 2408.556 83.747 C 2409.184 82.081, 2399.767 82.007, 2216.019 82.247 L 2022.823 82.500 1946.296 222.250 L 1869.769 362 1785.884 362 L 1702 362 1702 222 L 1702 82 1528 82 L 1354 82 1354 222 L 1354 362 1239 362 L 1124 362 1124 222 L 1124 82 950 82 L 776 82 776 222 L 776 362 695.664 362 L 615.327 362 535.264 222.250 L 455.201 82.500 261.993 82.247 C 78.233 82.007, 68.816 82.081, 69.445 83.747 M 414 1946.727 L 414 3140.455 416.418 3137.977 C 417.747 3136.615, 500.321 3042.125, 599.914 2928 L 780.993 2720.500 780.996 1929.250 L 781 1138 1239 1138 L 1697 1138 1697.004 1929.250 L 1697.007 2720.500 1878.086 2928 C 1977.679 3042.125, 2060.253 3136.615, 2061.582 3137.977 L 2064 3140.455 2064 1946.727 L 2064 753 1239 753 L 414 753 414 1946.727" stroke="none" fill="#fffcfc" fillRule="evenodd"/><path d="" stroke="none" fill="#fcfcfc" fillRule="evenodd"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
