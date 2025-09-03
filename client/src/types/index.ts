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