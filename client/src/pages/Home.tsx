import React from 'react';
import Button from '../components/ui/Button';
import Paragraph from '../components/ui/Paragraph';
import Heading from '../components/ui/Heading';

const Home: React.FC = () => {
  const handlePrimaryClick = () => {
    console.log('Primary button clicked in Home!');
    alert('Primary button clicked in Home!');
  };

  const handleSecondaryClick = () => {
    console.log('Secondary button clicked in Home!');
    alert('Secondary button clicked in Home!');
  };

  const handleSizeTestClick = () => {
    console.log('Size test button clicked!');
    alert('Size test button clicked!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Heading 
            text="Shoe Landing Page"
            level={1}
            className="text-gray-900 mb-6"
          />
          <Paragraph 
            text="Welcome to our premium shoe collection. Discover comfort, style, and performance in every step."
            className="text-xl text-gray-600 mb-4"
          />
          <Paragraph 
            text="Testing the reusable Button, Paragraph, and Heading components with different variants and sizes."
            className="text-gray-500"
          />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#009488] to-[#0C827A] rounded-2xl p-8 mb-12 text-white">
          <div className="text-center">
            <Heading 
              text="Premium Athletic Footwear"
              level={2}
              color="white"
              className="mb-4"
            />
            <Paragraph 
              text="Experience the perfect blend of comfort, durability, and style with our latest collection of athletic shoes."
              className="text-white text-lg mb-6 leading-relaxed"
            />
            <Button
              text="Shop Now"
              variant="secondary"
              size="lg"
              onClick={handlePrimaryClick}
              className="bg-white text-[#009488] hover:bg-gray-100"
            />
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Features Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Heading 
              text="Why Choose Our Shoes?"
              level={3}
              className="text-gray-900 mb-4"
            />
            <div className="space-y-4">
              <div>
                <Heading 
                  text="Superior Comfort"
                  level={4}
                  className="text-gray-800 mb-2"
                />
                <Paragraph 
                  text="Advanced cushioning technology provides all-day comfort for any activity."
                  className="text-gray-600"
                />
              </div>
              <div>
                <Heading 
                  text="Durable Materials"
                  level={4}
                  className="text-gray-800 mb-2"
                />
                <Paragraph 
                  text="High-quality materials ensure your shoes last through countless adventures."
                  className="text-gray-600"
                />
              </div>
              <div>
                <Heading 
                  text="Stylish Design"
                  level={4}
                  className="text-gray-800 mb-2"
                />
                <Paragraph 
                  text="Modern aesthetics that complement any outfit, from casual to athletic wear."
                  className="text-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Component Testing Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Heading 
              text="Component Testing"
              level={3}
              className="text-gray-900 mb-4"
            />
            <Paragraph 
              text="This section demonstrates our reusable components in action."
              className="mb-6"
            />
            
            {/* Heading Level Testing */}
            <div className="mb-6">
              <Heading 
                text="Heading Levels Demo"
                level={4}
                className="text-gray-800 mb-3"
              />
              <div className="space-y-2">
                <Heading text="H1 Example" level={1} className="text-[#009488]" />
                <Heading text="H2 Example" level={2} className="text-[#009488]" />
                <Heading text="H3 Example" level={3} className="text-[#009488]" />
                <Heading text="H4 Example" level={4} className="text-[#009488]" />
                <Heading text="H5 Example" level={5} className="text-[#009488]" />
                <Heading text="H6 Example" level={6} className="text-[#009488]" />
              </div>
            </div>
            
            {/* Primary Buttons */}
            <div className="mb-6">
              <Heading 
                text="Primary Buttons"
                level={4}
                className="text-gray-800 mb-3"
              />
              <div className="flex flex-col space-y-3">
                <Button
                  text="Small Primary"
                  variant="primary"
                  size="sm"
                  onClick={handleSizeTestClick}
                />
                <Button
                  text="Medium Primary"
                  variant="primary"
                  size="md"
                  onClick={handlePrimaryClick}
                />
                <Button
                  text="Large Primary"
                  variant="primary"
                  size="lg"
                  onClick={handleSizeTestClick}
                />
              </div>
            </div>

            {/* Secondary Buttons */}
            <div className="mb-6">
              <Heading 
                text="Secondary Buttons"
                level={4}
                className="text-gray-800 mb-3"
              />
              <div className="flex flex-col space-y-3">
                <Button
                  text="Small Secondary"
                  variant="secondary"
                  size="sm"
                  onClick={handleSizeTestClick}
                />
                <Button
                  text="Medium Secondary"
                  variant="secondary"
                  size="md"
                  onClick={handleSecondaryClick}
                />
                <Button
                  text="Large Secondary"
                  variant="secondary"
                  size="lg"
                  onClick={handleSizeTestClick}
                />
              </div>
            </div>

            {/* Disabled States */}
            <div>
              <Heading 
                text="Disabled States"
                level={4}
                className="text-gray-800 mb-3"
              />
              <div className="flex flex-col space-y-3">
                <Button
                  text="Disabled Primary"
                  variant="primary"
                  disabled={true}
                  onClick={handlePrimaryClick}
                />
                <Button
                  text="Disabled Secondary"
                  variant="secondary"
                  disabled={true}
                  onClick={handleSecondaryClick}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <section className="bg-white rounded-lg shadow-sm p-8 text-center">
          <Heading 
            text="What Our Customers Say"
            level={3}
            className="text-gray-900 mb-6"
          />
          <div className="max-w-2xl mx-auto">
            <Paragraph 
              text="These shoes have completely transformed my running experience. The comfort and support are unmatched, and they look great with any outfit. I couldn't be happier with my purchase!"
              className="text-lg italic text-gray-700 mb-4 leading-relaxed"
            />
            <Paragraph 
              text="- Sarah Johnson, Marathon Runner"
              className="font-semibold text-[#009488]"
              as="span"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;