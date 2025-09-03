import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Heading from '../components/ui/Heading';
import type { FormData } from '../types/index';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    console.log('Form reset');
    alert('Form has been reset!');
  };

  const handleCancel = () => {
    console.log('Form cancelled');
    alert('Form cancelled!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Heading 
            text="Contact Us"
            level={1}
            className="text-gray-900 mb-4"
          />
          <p className="text-gray-600">Get in touch with our team. We're here to help with any questions about our products.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg p-6">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#009488] focus:border-[#009488]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#009488] focus:border-[#009488]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#009488] focus:border-[#009488]"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    text="Submit Form"
                    variant="primary"
                    size="md"
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                    type="submit"
                    className="flex-1"
                  />
                  <Button
                    text="Reset Form"
                    variant="secondary"
                    size="md"
                    onClick={handleReset}
                    type="reset"
                    className="flex-1"
                  />
                </div>

                {/* Additional Button Tests */}
                <div className="pt-4 border-t border-gray-200">
                  <Heading 
                    text="Additional Button Tests"
                    level={4}
                    className="text-gray-600 mb-3"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      text="Cancel"
                      variant="secondary"
                      size="sm"
                      onClick={handleCancel}
                    />
                    <Button
                      text="Small Primary"
                      variant="primary"
                      size="sm"
                      onClick={() => alert('Small primary clicked!')}
                    />
                    <Button
                      text="Large Secondary"
                      variant="secondary"
                      size="lg"
                      onClick={() => alert('Large secondary clicked!')}
                      className="col-span-2"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar with Cards */}
          <div className="space-y-6">
            {/* Contact Information Card */}
            <Card
              title="Get In Touch"
              description="We're here to help! Reach out to us through any of these channels."
              icon={
                <div className="w-12 h-12 bg-[#009488] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              }
              primaryAction={{
                text: 'Email Us',
                onClick: () => window.open('mailto:hello@shoestore.com')
              }}
              data-testid="contact-info-card"
            />

            {/* Hours Card */}
            <Card
              title="Business Hours"
              description="Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed"
              icon={
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              }
              data-testid="hours-card"
            />

            {/* Support Card */}
            <Card
              title="Customer Support"
              description="Need immediate help? Our support team is ready to assist you."
              icon={
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              }
              primaryAction={{
                text: 'Live Chat',
                onClick: () => alert('Opening live chat...')
              }}
              secondaryAction={{
                text: 'Call Us',
                onClick: () => alert('Calling (555) 123-4567...')
              }}
              data-testid="support-card"
            />

            {/* FAQ Card */}
            <Card
              title="Frequently Asked Questions"
              description="Find quick answers to common questions about our products and services."
              onClick={() => alert('Opening FAQ section...')}
              className="cursor-pointer hover:border-[#009488] hover:bg-gray-50"
              data-testid="faq-card"
            />
          </div>
        </div>

        {/* Card Component Demo Section */}
        <div className="mt-12">
          <Heading 
            text="Card Component Showcase"
            level={2}
            className="text-gray-900 mb-6 text-center"
          />
          
          {/* Different Card Layouts */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Minimal Card */}
            <Card
              title="Minimal Design"
              description="This card shows the minimal configuration with just title and description."
              className="border-2 border-dashed border-gray-300"
              data-testid="minimal-card"
            />

            {/* Rich Card */}
            <Card
              title="Feature Rich"
              description="This card demonstrates multiple features including colors, actions, and icons."
              icon={
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              }
              colors={['Primary', 'Secondary', 'Accent']}
              selectedColor="Primary"
              onColorSelect={(color) => console.log('Demo card color:', color)}
              primaryAction={{
                text: 'Primary Action',
                onClick: () => alert('Primary action clicked!')
              }}
              secondaryAction={{
                text: 'Secondary',
                onClick: () => alert('Secondary action clicked!')
              }}
              data-testid="rich-card"
            />
          </div>

          {/* Horizontal Card Demo */}
          <Card
            title="Horizontal Layout Example"
            description="This card demonstrates the horizontal layout option, perfect for featured content or product highlights. The layout automatically adapts to smaller screens by stacking vertically."
            image="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop&crop=center"
            orientation="horizontal"
            primaryAction={{
              text: 'Learn More',
              onClick: () => alert('Horizontal card action!')
            }}
            className="mb-8"
            data-testid="horizontal-demo-card"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;