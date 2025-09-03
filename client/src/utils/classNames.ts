/**
 * Utility function to combine CSS classes
 * Filters out falsy values and joins remaining classes with spaces
 * 
 * @param classes - Array of class names (can include falsy values)
 * @returns Combined class string
 */
export function classNames(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Alternative syntax that's more explicit about conditional classes
 * 
 * @param baseClasses - Base classes that are always applied
 * @param conditionalClasses - Object with condition -> className pairs
 * @returns Combined class string
 */
export function cn(
  baseClasses: string,
  conditionalClasses?: Record<string, boolean | undefined>
): string {
  let result = baseClasses;
  
  if (conditionalClasses) {
    Object.entries(conditionalClasses).forEach(([className, condition]) => {
      if (condition) {
        result += ` ${className}`;
      }
    });
  }
  
  return result;
}

/**
 * Reusable Heading component for semantic HTML headings (H1-H6)
 * 
 * Features:
 * - Semantic HTML output based on level prop
 * - Responsive font sizing that follows design specifications
 * - Custom styling support via className
 * - Accessibility best practices
 * - TypeScript support with proper typing
 * 
 * Design Specifications:
 * - H1: 48px desktop / 32px mobile, weight 700, line-height 1.1
 * - H2: 36px desktop / 28px mobile, weight 700, line-height 1.2  
 * - H3: 24px desktop / 20px mobile, weight 600, line-height 1.3
 * - H4: 20px desktop / 18px mobile, weight 600, line-height 1.4
 * - H5: 18px desktop / 16px mobile, weight 600, line-height 1.4
 * - H6: 16px desktop / 14px mobile, weight 600, line-height 1.4
 * - Color: #1E293B (default brand color from design system)
 * 
 * @param level - Heading level (1-6)
 * @returns Object with desktop, mobile, weight, and lineHeight styles
 */
export function getHeadingStyles(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const headingStyles = {
    1: { desktop: 'text-5xl', mobile: 'text-3xl', weight: 700, lineHeight: 1.1 }, // 48px -> 32px
    2: { desktop: 'text-4xl', mobile: 'text-2xl', weight: 700, lineHeight: 1.2 }, // 36px -> 28px  
    3: { desktop: 'text-2xl', mobile: 'text-xl', weight: 600, lineHeight: 1.3 }, // 24px -> 20px
    4: { desktop: 'text-xl', mobile: 'text-lg', weight: 600, lineHeight: 1.4 }, // 20px -> 18px
    5: { desktop: 'text-lg', mobile: 'text-base', weight: 600, lineHeight: 1.4 }, // 18px -> 16px
    6: { desktop: 'text-base', mobile: 'text-sm', weight: 600, lineHeight: 1.4 }   // 16px -> 14px
  };
  
  return headingStyles[level];
}

/**
 * Generates complete heading class names with base styles and level-specific styles
 * 
 * @param level - Heading level (1-6)
 * @param customClassName - Additional custom classes
 * @returns Combined class string for heading element
 */
export function getHeadingClasses(level: 1 | 2 | 3 | 4 | 5 | 6, customClassName?: string): string {
  const baseStyles = 'font-bold leading-tight tracking-tight';
  const levelStyles = getHeadingStyles(level);
  
  return classNames(
    baseStyles,
    levelStyles.desktop,
    levelStyles.mobile,
    customClassName
  );
}

// Example usage:
// classNames('btn', isActive && 'btn-active', 'text-white')
// cn('btn text-white', { 'btn-active': isActive, 'btn-disabled': disabled })
// getHeadingClasses(1, 'text-blue-600 mb-4')