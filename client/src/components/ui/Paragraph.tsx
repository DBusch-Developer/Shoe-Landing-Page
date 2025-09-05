import type { ParagraphProps } from '../../types';

const Paragraph: React.FC<ParagraphProps> = ({
  text,
  className = '',
  as = 'p',
  style = {},
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
    style, // Apply custom styles
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