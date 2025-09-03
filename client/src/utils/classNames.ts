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

// Example usage:
// classNames('btn', isActive && 'btn-active', 'text-white')
// cn('btn text-white', { 'btn-active': isActive, 'btn-disabled': disabled })