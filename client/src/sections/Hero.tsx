import React from "react";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import Button from "../components/ui/Button";
import heroimage from "../assets/images/hero/hero-image.webp";

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

const Hero: React.FC<HeroSectionProps> = ({
  heading,
  subtitle,
  primaryButton,
  secondaryButton,
  backgroundImage,
  className = "",
  "data-testid": testId,
}) => {
  const bgimage = heroimage;

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
      data-testid={testId}
      aria-label="Hero section"
    >
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <Heading
            text={heading}
            level={1}
            color="white"
            className="text-white mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
            data-testid="hero-heading"
          />

          {/* Subtitle */}
          <Paragraph
            text={subtitle}
            className="text-white text-opacity-95 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-md"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}
            data-testid="hero-subtitle"
          />

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary button */}
            <Button
              text={primaryButton.text}
              onClick={primaryButton.onClick}
              variant="primary"
              size="lg"
              className="min-w-[200px] transform hover:scale-105 transition-transform duration-200 shadow-lg"
              data-testid="hero-primary-button"
            />

            {/* Secondary button */}
            {secondaryButton && (
              <Button
                text={secondaryButton.text}
                onClick={secondaryButton.onClick}
                variant="primary"
                size="lg"
                className="min-w-[200px] transform hover:scale-105 transition-transform duration-200 shadow-lg backdrop-blur-sm "
                data-testid="hero-secondary-button"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
