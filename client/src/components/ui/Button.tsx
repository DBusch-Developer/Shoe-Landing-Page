import React from 'react';
import type { ButtonProps, ButtonVariant, ButtonSize } from '../../types';

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}) => {
  // Base button styles
  const baseStyles = 'font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant styles
  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-[#009488] text-white hover:bg-[#0C827A] focus:ring-[#009488]',
    secondary: 'bg-transparent border-2 border-[#009488] text-[#009488] hover:bg-[#009488] hover:text-white focus:ring-[#009488]'
  };
  
  // Size styles
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-2 py-1 text-sm', // 8x16px equivalent
    md: 'px-3 py-1.5 text-base', // 12x20px equivalent  
    lg: 'px-4 py-2 text-lg' // 16x24px equivalent
  };
  
  // Combine all styles
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;