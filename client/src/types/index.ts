// Page navigation types
export type PageName = 'home' | 'contact' | 'about' | 'product' | 'footer-demo';

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
  /** Inline styles object */
  style?: React.CSSProperties;
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
  /** Inline styles object */
  style?: React.CSSProperties;
  /** Accessibility label for screen readers */
  'aria-label'?: string;
  /** Unique identifier for the heading */
  id?: string;
  /** Test identifier for automated testing */
  'data-testid'?: string;
}

// Card component types
export interface CardProps {
  /** Card title/heading */
  title: string;
  /** Optional card description */
  description?: string;
  /** Optional price display */
  price?: string;
  /** Optional image URL */
  image?: string;
  /** Optional icon at top or left */
  icon?: React.ReactNode;
  /** Available color options */
  colors?: string[];
  /** Selected color */
  selectedColor?: string;
  /** Color selection callback */
  onColorSelect?: (color: string) => void;
  /** Primary action button */
  primaryAction?: {
    text: string;
    onClick: () => void;
  };
  /** Secondary action button */
  secondaryAction?: {
    text: string;
    onClick: () => void;
  };
  /** Additional CSS classes */
  className?: string;
  /** Card layout orientation */
  orientation?: 'vertical' | 'horizontal';
  /** Click handler for entire card */
  onClick?: () => void;
  /** Accessibility label */
  'aria-label'?: string;
  /** Test identifier */
  'data-testid'?: string;
}

// Product types
export interface Product {
  /** Unique identifier for the product */
  id: string;
  /** Product name/title */
  title: string;
  /** Product description */
  description: string;
  /** Product price as formatted string */
  price: string;
  /** Product image URL */
  image: string;
  /** Available color options */
  colors: string[];
  /** Default selected color */
  defaultColor: string;
}

// Feature types
export interface Feature {
  /** Unique identifier for the feature */
  id: string;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Feature icon component */
  icon: React.ReactNode;
}

// Product action handlers
export type ProductActionHandler = (productName: string) => void;
export type ColorSelectHandler = (productId: string, color: string) => void;

// Features component types
export interface FeaturesProps {
  /** Section title */
  title?: string;
  /** Section subtitle/description */
  subtitle?: string;
  /** Additional CSS classes */
  className?: string;
  /** Test identifier */
  'data-testid'?: string;
}

// Navbar component types 
export interface NavbarProps {
  /** Additional CSS classes */
  className?: string;
  /** Logo text */
  logoText?: string;
  /** Sign in button handler */
  onSignInClick?: () => void;
}

// Footer component types
export interface FooterProps {
  className?: string;
}

// Social media platforms
export type SocialPlatform = 'Facebook' | 'Twitter' | 'Instagram' | 'LinkedIn';

// Footer link names (for the handleLinkClick function)
export type FooterLinkName = 
  | 'Size Guide'
  | 'FAQ'
  | 'Shipping Info'
  | 'Returns'
  | 'Customer Service'
  | 'Track Order'
  | 'Privacy Policy'
  | 'Terms of Service'
  | 'Cookie Policy'
  | 'Accessibility';

// Handler function types
export type FooterLinkClickHandler = (linkName: FooterLinkName) => void;
export type SocialClickHandler = (platform: SocialPlatform) => void;
export type NewsletterSignupHandler = () => void;

// Newsletter form data
export interface NewsletterFormData {
  email: string;
}

// Footer section data structure 
export interface FooterSection {
  title: string;
  items: Array<{
    label: string;
    type: 'link' | 'button';
    href?: string;
    action?: string;
  }>;
}

// Hero section component types
export interface HeroSectionProps {
  /** Main heading text */
  heading: string;
  /** Subtitle/description text */
  subtitle: string;
  /** Primary call-to-action button */
  primaryButton: {
    text: string;
    onClick: () => void;
  };
  /** Optional secondary button */
  secondaryButton?: {
    text: string;
    onClick: () => void;
  };
  /** Background image from /assets */
  backgroundImage?: string;
  /** Additional CSS classes */
  className?: string;
  /** Test identifier */
  "data-testid"?: string;
}