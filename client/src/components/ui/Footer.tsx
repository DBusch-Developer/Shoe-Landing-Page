import React from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Button from './Button';

export interface FooterProps {
  /** Additional CSS classes */
  className?: string;
  /** Company name for branding */
  companyName?: string;
  /** Copyright year */
  copyrightYear?: number;
  /** Contact information */
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  /** Useful links sections */
  linkSections?: Array<{
    title: string;
    links: Array<{
      label: string;
      href?: string;
      onClick?: () => void;
    }>;
  }>;
  /** Social media links */
  socialLinks?: Array<{
    name: string;
    href?: string;
    onClick?: () => void;
    icon: React.ReactNode;
  }>;
  /** Newsletter signup handler */
  onNewsletterSignup?: (email: string) => void;
}

const Footer: React.FC<FooterProps> = ({
  className = '',
  companyName = 'ShoeStyle',
  copyrightYear = new Date().getFullYear(),
  contactInfo = {
    email: 'hello@shoestyle.com',
    phone: '(555) 123-4567',
    address: '123 Fashion Street, Style City, SC 12345'
  },
  linkSections = [
    {
      title: 'Products',
      links: [
        { label: 'Running Shoes', href: '#running' },
        { label: 'Casual Wear', href: '#casual' },
        { label: 'Formal Shoes', href: '#formal' },
        { label: 'Athletic Gear', href: '#athletic' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Press', href: '#press' },
        { label: 'Blog', href: '#blog' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#help' },
        { label: 'Contact Us', href: '#contact' },
        { label: 'Size Guide', href: '#size-guide' },
        { label: 'Returns', href: '#returns' }
      ]
    }
  ],
  socialLinks = [
    {
      name: 'Facebook',
      href: '#facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.017 0C8.396 0 8.02.01 6.79.048 2.51.206.206 2.51.048 6.79.01 8.02 0 8.396 0 12.017c0 3.621.01 3.997.048 5.227.158 4.28 2.462 6.584 6.742 6.742 1.23.038 1.606.048 5.227.048 3.621 0 3.997-.01 5.227-.048 4.28-.158 6.584-2.462 6.742-6.742.038-1.23.048-1.606.048-5.227 0-3.621-.01-3.997-.048-5.227C23.794 2.51 21.49.206 17.21.048 15.98.01 15.604 0 12.017 0zm0 5.838a6.179 6.179 0 110 12.358 6.179 6.179 0 010-12.358zM12.017 15.55a3.371 3.371 0 10-.001-6.743 3.371 3.371 0 00.001 6.743zm6.624-10.845a1.48 1.48 0 11-2.96 0 1.48 1.48 0 012.96 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    }
  ],
  onNewsletterSignup
}) => {
  const [emailInput, setEmailInput] = React.useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNewsletterSignup && emailInput.trim()) {
      onNewsletterSignup(emailInput);
      setEmailInput('');
    }
  };

  const handleLinkClick = (link: { href?: string; onClick?: () => void }) => {
    if (link.onClick) {
      link.onClick();
    }
  };

  return (
    <footer className={`bg-gray-900 text-white ${className}`} role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info & Contact */}
          <div className="lg:col-span-2">
            <Heading
              text={companyName}
              level={3}
              color="white"
              className="mb-4"
            />
            <Paragraph
              text="Premium footwear that combines style, comfort, and sustainability. Step into excellence with every pair."
              className="text-gray-300 mb-6 leading-relaxed"
            />
            
            {/* Contact Information */}
            <div className="space-y-3">
              <Heading
                text="Contact Information"
                level={4}
                color="white"
                className="text-sm font-semibold uppercase tracking-wider mb-3"
              />
              
              {contactInfo.email && (
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-[#009488] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              )}
              
              {contactInfo.phone && (
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-[#009488] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              )}
              
              {contactInfo.address && (
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-[#009488] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <Paragraph
                    text={contactInfo.address}
                    className="text-gray-300 leading-relaxed"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Links Sections */}
          {linkSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <Heading
                text={section.title}
                level={4}
                color="white"
                className="text-sm font-semibold uppercase tracking-wider"
              />
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={link.onClick ? (e) => {
                        if (link.onClick) {
                          e.preventDefault();
                          handleLinkClick(link);
                        }
                      } : undefined}
                      className="text-gray-300 hover:text-white hover:underline transition-colors duration-200 block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        {onNewsletterSignup && (
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="max-w-md">
              <Heading
                text="Stay Updated"
                level={4}
                color="white"
                className="mb-2"
              />
              <Paragraph
                text="Subscribe to our newsletter for the latest updates and exclusive offers."
                className="text-gray-300 mb-4"
              />
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#009488] focus:border-transparent"
                  required
                />
                <Button
                  text="Subscribe"
                  variant="primary"
                  size="md"
                  type="submit"
                  className="whitespace-nowrap"
                />
              </form>
            </div>
          </div>
        )}

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-6">
              <Paragraph
                text="Follow Us:"
                className="text-gray-400 font-medium"
                as="span"
              />
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  onClick={social.onClick ? (e) => {
                    if (social.onClick) {
                      e.preventDefault();
                      social.onClick();
                    }
                  } : undefined}
                  className="text-gray-400 hover:text-[#009488] transition-colors duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
              <Paragraph
                text={`© ${copyrightYear} ${companyName}. All rights reserved.`}
                className="text-gray-400 text-sm"
              />
              <div className="flex space-x-6">
                <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;