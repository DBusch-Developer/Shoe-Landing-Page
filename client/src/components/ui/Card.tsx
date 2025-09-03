import React from 'react';
import Button from './Button';
import Heading from './Heading';
import Paragraph from './Paragraph';
import type { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  image,
  icon,
  colors = [],
  selectedColor,
  onColorSelect,
  primaryAction,
  secondaryAction,
  className = '',
  orientation = 'vertical',
  onClick,
  'aria-label': ariaLabel,
  'data-testid': testId,
}) => {
  // Base card styles following design specifications
  const baseStyles = 'bg-white border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:shadow-gray-200/50';
  
  // Layout styles based on orientation
  const layoutStyles = orientation === 'horizontal' 
    ? 'flex flex-col sm:flex-row sm:items-center gap-4'
    : 'flex flex-col';
  
  // Combine all styles
  const cardClasses = `${baseStyles} ${layoutStyles} ${className}`;
  
  // Handle color selection
  const handleColorSelect = (color: string) => {
    if (onColorSelect) {
      onColorSelect(color);
    }
  };

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
      aria-label={ariaLabel}
      data-testid={testId}
    >
      {/* Image/Icon Section */}
      {(image || icon) && (
        <div className={`${orientation === 'horizontal' ? 'flex-shrink-0' : 'mb-4'}`}>
          {image && (
            <div className="w-full h-48 sm:h-56 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback for broken images
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback placeholder */}
              <div className="hidden w-full h-full flex items-center justify-center text-gray-400">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          )}
          {icon && !image && (
            <div className="flex justify-center mb-2">
              {icon}
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className={`flex-1 ${orientation === 'horizontal' ? 'min-w-0' : ''}`}>
        {/* Header with Title and Price */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1 min-w-0">
            <Heading
              text={title}
              level={3}
              className="text-gray-900 text-2xl font-semibold leading-tight"
            />
          </div>
          {price && (
            <div className="ml-4 flex-shrink-0">
              <span className="text-2xl font-bold text-[#009488]">{price}</span>
            </div>
          )}
        </div>

        {/* Description */}
        {description && (
          <div className="mb-4">
            <Paragraph
              text={description}
              className="text-gray-600 text-base leading-relaxed"
            />
          </div>
        )}

        {/* Color Selection */}
        {colors.length > 0 && (
          <div className="mb-6">
            <Paragraph
              text="Available Colors:"
              className="text-sm font-medium text-gray-700 mb-2"
            />
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className={`
                    px-3 py-1 text-sm rounded-md border transition-colors duration-200
                    ${selectedColor === color
                      ? 'bg-[#009488] text-white border-[#009488]'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                    }
                  `}
                  aria-pressed={selectedColor === color}
                  aria-label={`Select ${color} color`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col sm:flex-row gap-3">
            {primaryAction && (
              <Button
                text={primaryAction.text}
                onClick={primaryAction.onClick}
                variant="primary"
                size="md"
                className="flex-1"
              />
            )}
            {secondaryAction && (
              <Button
                text={secondaryAction.text}
                onClick={secondaryAction.onClick}
                variant="secondary"
                size="md"
                className={primaryAction ? 'flex-1' : 'flex-1'}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;