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

// Navbar component types
export interface NavbarProps {
  /** Additional CSS classes */
  className?: string;
  /** Current active page for styling */
  activePage?: string;
  /** Navigation items */
  navItems?: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    isActive?: boolean;
  }>;
  /** Logo text */
  logoText?: string;
  /** Logo click handler */
  onLogoClick?: () => void;
  /** Sign in button handler */
  onSignInClick?: () => void;
}

// Footer component types
export interface FooterLink {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface FooterLinkSection {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  name: string;
  href?: string;
  onClick?: () => void;
  icon: React.ReactNode;
}

export interface FooterContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

export interface FooterProps {
  /** Additional CSS classes */
  className?: string;
  /** Company name for branding */
  companyName?: string;
  /** Copyright year */
  copyrightYear?: number;
  /** Contact information */
  contactInfo?: FooterContactInfo;
  /** Useful links sections */
  linkSections?: FooterLinkSection[];
  /** Social media links */
  socialLinks?: FooterSocialLink[];
  /** Newsletter signup handler */
  onNewsletterSignup?: (email: string) => void;
}