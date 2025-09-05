import React from 'react';
import Heading from '../components/ui/Heading';
import Paragraph from '../components/ui/Paragraph';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import sarahjohnson from '../assets/images/employees/sarah-johnson.jpg';
import michaelchen from '../assets/images/employees/michael-chen.jpg';
import emilyrodriguez from '../assets/images/employees/emily-rodriguez.jpg';

const About: React.FC = () => {
  const handleLearnMore = () => {
    alert('Learn more about our story!');
  };

  const handleJoinTeam = () => {
    alert('Join our team - careers page coming soon!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Heading 
            text="About ShoeStyle"
            level={1}
            className="text-gray-900 mb-6"
          />
          <Paragraph 
            text="We're passionate about creating premium footwear that combines style, comfort, and sustainability. Founded in 2020, ShoeStyle has been dedicated to revolutionizing the way people think about shoes."
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          />
          <Button
            text="Learn Our Story"
            variant="primary"
            size="lg"
            onClick={handleLearnMore}
          />
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <Heading 
                text="Our Mission"
                level={2}
                className="text-gray-900 mb-4"
              />
              <Paragraph 
                text="To create exceptional footwear that empowers people to walk confidently through life while protecting our planet."
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card
                title="Quality Craftsmanship"
                description="Every shoe is meticulously crafted using premium materials and time-tested techniques."
                icon={
                  <div className="w-12 h-12 bg-[#009488] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                }
                data-testid="quality-card"
              />

              <Card
                title="Sustainable Practices"
                description="We're committed to reducing our environmental impact through eco-friendly materials and processes."
                icon={
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                }
                data-testid="sustainability-card"
              />

              <Card
                title="Customer First"
                description="Your satisfaction drives everything we do, from design to delivery and beyond."
                icon={
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                }
                data-testid="customer-card"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Heading 
              text="Meet Our Team"
              level={2}
              className="text-gray-900 mb-4"
            />
            <Paragraph 
              text="The passionate individuals behind ShoeStyle who make it all possible."
              className="text-lg text-gray-600"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Sarah Johnson"
              description="Founder & CEO"
              image={sarahjohnson}
              primaryAction={{
                text: 'View Profile',
                onClick: () => alert('Sarah Johnson profile')
              }}
              data-testid="founder-card"
            />

            <Card
              title="Michael Chen"
              description="Head of Design"
              image={michaelchen}
              primaryAction={{
                text: 'View Profile',
                onClick: () => alert('Michael Chen profile')
              }}
              data-testid="designer-card"
            />

            <Card
              title="Emily Rodriguez"
              description="Sustainability Director"
              image={emilyrodriguez}
              primaryAction={{
                text: 'View Profile',
                onClick: () => alert('Emily Rodriguez profile')
              }}
              data-testid="sustainability-card"
            />
          </div>
        </section>

        {/* CTA Section - FIXED */}
        <section className="bg-gradient-to-r from-[#009488] to-[#0C827A] rounded-2xl p-8 text-white text-center">
          <Heading 
            text="Join Our Journey"
            level={2}
            color="white"
            className="mb-4"
          />
          <Paragraph 
            text="We're always looking for talented individuals who share our passion for quality and sustainability."
            className="text-white text-lg mb-6 max-w-2xl mx-auto"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text="View Careers"
              variant="primary"
              size="lg"
              onClick={handleJoinTeam}
              className="!bg-transparent !border-white !text-white hover:!bg-white hover:!text-[#009488] border-2"
            />
            <Button
              text="Contact Us"
              variant="primary"
              size="lg"
              onClick={() => alert('Navigating to contact page...')}
              className="!bg-transparent !border-white !text-white hover:!bg-white hover:!text-[#009488] border-2"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-16">
          <div className="bg-white rounded-2xl p-8">
            <div className="text-center mb-8">
              <Heading 
                text="Our Impact"
                level={3}
                className="text-gray-900 mb-4"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Heading 
                  text="50,000+"
                  level={3}
                  className="text-[#009488] mb-2"
                />
                <Paragraph 
                  text="Happy Customers"
                  className="text-gray-600"
                />
              </div>
              <div>
                <Heading 
                  text="200+"
                  level={3}
                  className="text-[#009488] mb-2"
                />
                <Paragraph 
                  text="Shoe Designs"
                  className="text-gray-600"
                />
              </div>
              <div>
                <Heading 
                  text="95%"
                  level={3}
                  className="text-[#009488] mb-2"
                />
                <Paragraph 
                  text="Customer Satisfaction"
                  className="text-gray-600"
                />
              </div>
              <div>
                <Heading 
                  text="5"
                  level={3}
                  className="text-[#009488] mb-2"
                />
                <Paragraph 
                  text="Years Experience"
                  className="text-gray-600"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;