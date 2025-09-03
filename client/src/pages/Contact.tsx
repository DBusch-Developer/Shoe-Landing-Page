import React, { useState } from 'react';
import Button from '../components/ui/Button';
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
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <Heading 
            text="Contact Us"
            level={1}
            className="text-gray-900 mb-4"
          />
          <p className="text-gray-600">Testing the Button and Heading components in a contact form context.</p>
        </div>

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

            {/* Button Testing Area */}
            <div className="space-y-4">
              <Heading 
                text="Form Actions"
                level={3}
                className="text-gray-800"
              />
              
              {/* Primary Actions */}
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;