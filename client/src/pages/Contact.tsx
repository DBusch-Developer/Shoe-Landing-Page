import React, { useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Heading from "../components/ui/Heading";
import type { FormData } from "../types/index";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert(
      `Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    console.log("Form reset");
    alert("Form has been reset!");
  };

  const handleCancel = () => {
    console.log("Form cancelled");
    alert("Form cancelled!");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid =
    formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Heading text="Contact Us" level={1} className="text-gray-900 mb-4" />
          <p className="text-gray-600">
            Get in touch with our team. We're here to help with any questions
            about our products.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg p-6">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
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
              </form>
            </div>
          </div>

          {/* Sidebar with Cards */}
          <div className="space-y-6">
            {/* FAQ Card */}
            <Card
              title="Frequently Asked Questions"
              description="Find quick answers to common questions about our products and services."
              onClick={() => alert("Opening FAQ section...")}
              className="cursor-pointer hover:border-[#009488] hover:bg-gray-50"
              data-testid="faq-card"
            />

            {/* Support Card */}
            <Card
              title="Customer Support"
              description="Need immediate help? Our support team is ready to assist you."
              icon={
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              }
              primaryAction={{
                text: "Live Chat",
                onClick: () => alert("Opening live chat..."),
              }}
              secondaryAction={{
                text: "Call Us",
                onClick: () => alert("Calling (555) 123-4567..."),
              }}
              data-testid="support-card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
