import React from 'react';
import type { ParagraphProps, ParagraphElement } from '../../types';

/**
 * Reusable Paragraph component for standardized body text
 * 
 * Features:
 * - Flexible element rendering (p, span, div)
 * - Custom styling support via className
 * - Accessibility best practices
 * - TypeScript support
 * 
 * @param props - ParagraphProps
 * @returns JSX.Element
 */
const Paragraph: React.FC<ParagraphProps> = ({
  text,
  className = '',
  as = 'p',
  'aria-label': ariaLabel,
  id,
  'data-testid': testId,
  ...restProps
}) => {
  // Base styles for consistent typography
  const baseStyles = 'text-base leading-relaxed text-gray-700';
  
  // Combine base styles with custom className
  const combinedClasses = className 
    ? `${baseStyles} ${className}` 
    : baseStyles;

  // Common props to apply to any element
  const elementProps = {
    className: combinedClasses,
    'aria-label': ariaLabel,
    id,
    'data-testid': testId,
    ...restProps
  };

  // Render the appropriate element based on the 'as' prop
  switch (as) {
    case 'span':
      return <span {...elementProps}>{text}</span>;
    case 'div':
      return <div {...elementProps}>{text}</div>;
    case 'p':
    default:
      return <p {...elementProps}>{text}</p>;
  }
};

export default Paragraph;