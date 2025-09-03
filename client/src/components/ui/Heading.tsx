import React from 'react';
import type { HeadingProps } from '../../types';
import { getHeadingClasses, getHeadingStyles } from '../../utils/classNames';

const Heading: React.FC<HeadingProps> = ({
  text,
  level = 1,
  className = '',
  color = '#1E293B',
  'aria-label': ariaLabel,
  id,
  'data-testid': testId,
  ...restProps
}) => {
  // Get styles using utility functions
  const currentLevelStyles = getHeadingStyles(level);
  const headingClasses = getHeadingClasses(level, className);
  
  // Common props to apply to any heading element
  const elementProps = {
    className: headingClasses,
    style: { 
      color,
      fontWeight: currentLevelStyles.weight,
      lineHeight: currentLevelStyles.lineHeight 
    },
    'aria-label': ariaLabel,
    id,
    'data-testid': testId,
    ...restProps
  };

  // Render the appropriate semantic heading element based on the level prop
  switch (level) {
    case 1:
      return <h1 {...elementProps}>{text}</h1>;
    case 2:
      return <h2 {...elementProps}>{text}</h2>;
    case 3:
      return <h3 {...elementProps}>{text}</h3>;
    case 4:
      return <h4 {...elementProps}>{text}</h4>;
    case 5:
      return <h5 {...elementProps}>{text}</h5>;
    case 6:
      return <h6 {...elementProps}>{text}</h6>;
    default:
      // Fallback to h1 for invalid levels, but this shouldn't happen with proper TypeScript typing
      return <h1 {...elementProps}>{text}</h1>;
  }
};

export default Heading;