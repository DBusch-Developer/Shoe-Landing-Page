// Page navigation types
export type PageName = 'home' | 'contact';

// Button component types
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

// Form data types
export type FormData = {
  name: string;
  email: string;
  message: string;
};

// Paragraph component types
export type ParagraphElement = 'p' | 'span' | 'div';

export interface ParagraphProps {
  /** The text content to display */
  text: string;
  /** Additional CSS classes to apply */
  className?: string;
  /** HTML element to render as (defaults to 'p') */
  as?: ParagraphElement;
  /** Accessibility label for screen readers */
  'aria-label'?: string;
  /** Unique identifier for the paragraph */
  id?: string;
  /** Additional data attributes */
  'data-testid'?: string;
}

// Heading component types
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  /** The text content to display in the heading */
  text: string;
  /** The heading level (1-6) which determines the semantic HTML tag and styling */
  level?: HeadingLevel;
  /** Additional CSS classes to apply */
  className?: string;
  /** Text color (defaults to design system primary text color) */
  color?: string;
  /** Accessibility label for screen readers */
  'aria-label'?: string;
  /** Unique identifier for the heading */
  id?: string;
  /** Test identifier for automated testing */
  'data-testid'?: string;
}