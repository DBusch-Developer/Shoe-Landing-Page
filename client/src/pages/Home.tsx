import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Paragraph from '../components/ui/Paragraph';
import Heading from '../components/ui/Heading';

const Home: React.FC = () => {
  // State for tracking selected colors in product cards
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({
    'air-comfort-pro': 'Black',
    'trail-explorer': 'Green',
    'urban-classic': 'White'
  });

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

  // Handle color selection for product cards
  const handleColorSelect = (productId: string, color: string) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: color
    }));
    console.log(`Selected ${color} for ${productId}`);
  };

  // Handle product actions
  const handleAddToCart = (productName: string) => {
    const color = selectedColors[productName.toLowerCase().replace(/\s+/g, '-')];
    alert(`Added ${productName} (${color}) to cart!`);
  };

  const handleLearnMore = (productName: string) => {
    alert(`Learn more about ${productName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
            text="Featuring our new reusable Card component with responsive design and interactive features."
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

        {/* Product Cards Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <Heading 
              text="Featured Products"
              level={2}
              className="text-gray-900 mb-4"
            />
            <Paragraph 
              text="Discover our most popular shoes, now showcased with our new Card component."
              className="text-gray-600"
            />
          </div>

          {/* Product Grid - Responsive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card
              title="Air Comfort Pro"
              description="Lightweight running shoes with enhanced cushioning for maximum comfort."
              price="$129.99"
              image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center"
              colors={['Black', 'White', 'Red']}
              selectedColor={selectedColors['air-comfort-pro']}
              onColorSelect={(color) => handleColorSelect('air-comfort-pro', color)}
              primaryAction={{
                text: 'Add to Cart',
                onClick: () => handleAddToCart('Air Comfort Pro')
              }}
              secondaryAction={{
                text: 'Learn More',
                onClick: () => handleLearnMore('Air Comfort Pro')
              }}
              data-testid="air-comfort-card"
            />

            <Card
              title="Trail Explorer"
              description="Rugged hiking boots designed for outdoor adventures and all-terrain performance."
              price="$189.99"
              image="https://images.unsplash.com/photo-1544966503-7cc5ac882400?w=400&h=300&fit=crop&crop=center"
              colors={['Brown', 'Black', 'Green']}
              selectedColor={selectedColors['trail-explorer']}
              onColorSelect={(color) => handleColorSelect('trail-explorer', color)}
              primaryAction={{
                text: 'Add to Cart',
                onClick: () => handleAddToCart('Trail Explorer')
              }}
              secondaryAction={{
                text: 'Learn More',
                onClick: () => handleLearnMore('Trail Explorer')
              }}
              data-testid="trail-explorer-card"
            />

            <Card
              title="Urban Classic"
              description="Timeless sneakers that blend style and comfort for everyday wear in the city."
              price="$89.99"
              image="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center"
              colors={['White', 'Black', 'Gray', 'Navy']}
              selectedColor={selectedColors['urban-classic']}
              onColorSelect={(color) => handleColorSelect('urban-classic', color)}
              primaryAction={{
                text: 'Add to Cart',
                onClick: () => handleAddToCart('Urban Classic')
              }}
              secondaryAction={{
                text: 'Learn More',
                onClick: () => handleLearnMore('Urban Classic')
              }}
              data-testid="urban-classic-card"
            />
          </div>

          {/* Horizontal Card Example */}
          <div className="mb-8">
            <Heading 
              text="Card Layout Variations"
              level={3}
              className="text-gray-900 mb-4"
            />
            <Card
              title="Premium Leather Loafers"
              description="Handcrafted Italian leather loafers perfect for professional and formal occasions. Features premium materials and exceptional comfort."
              price="$249.99"
              image="https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=300&fit=crop&crop=center"
              orientation="horizontal"
              colors={['Black', 'Brown', 'Tan']}
              selectedColor="Brown"
              onColorSelect={(color) => console.log('Selected horizontal card color:', color)}
              primaryAction={{
                text: 'Add to Cart',
                onClick: () => alert('Added Premium Leather Loafers to cart!')
              }}
              className="max-w-4xl mx-auto"
              data-testid="horizontal-card"
            />
          </div>
        </section>

        {/* Card Component Testing Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
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

          {/* Card Component Testing */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Heading 
              text="Card Component Features"
              level={3}
              className="text-gray-900 mb-4"
            />
            <Paragraph 
              text="Our new Card component showcases advanced features and responsive design."
              className="mb-6"
            />
            
            {/* Simple Card Examples */}
            <div className="space-y-4">
              <Card
                title="Simple Card"
                description="Basic card with title and description only."
                className="border-2 border-dashed border-gray-300"
                data-testid="simple-card"
              />

              <Card
                title="Card with Icon"
                description="This card demonstrates icon support."
                icon={
                  <div className="w-12 h-12 bg-[#009488] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                }
                primaryAction={{
                  text: 'Try It',
                  onClick: () => alert('Icon card clicked!')
                }}
                data-testid="icon-card"
              />

              <Card
                title="Clickable Card"
                description="This entire card is clickable and shows hover effects."
                onClick={() => alert('Entire card was clicked!')}
                className="cursor-pointer border-[#009488] hover:border-[#009488] hover:bg-gray-50"
                data-testid="clickable-card"
              />
            </div>
            
            {/* Button Testing */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Heading 
                text="Button Component Tests"
                level={4}
                className="text-gray-600 mb-3"
              />
              <div className="grid grid-cols-2 gap-2">
                <Button
                  text="Primary SM"
                  variant="primary"
                  size="sm"
                  onClick={handleSizeTestClick}
                />
                <Button
                  text="Secondary SM"
                  variant="secondary"
                  size="sm"
                  onClick={handleSizeTestClick}
                />
                <Button
                  text="Primary MD"
                  variant="primary"
                  size="md"
                  onClick={handlePrimaryClick}
                />
                <Button
                  text="Secondary MD"
                  variant="secondary"
                  size="md"
                  onClick={handleSecondaryClick}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section with Card */}
        <section className="mb-8">
          <Heading 
            text="Customer Reviews"
            level={3}
            className="text-gray-900 mb-6 text-center"
          />
          <Card
            title="Amazing Quality and Comfort!"
            description="These shoes have completely transformed my running experience. The comfort and support are unmatched, and they look great with any outfit. I couldn't be happier with my purchase! The customer service was also exceptional."
            icon={
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            }
            className="max-w-2xl mx-auto text-center"
            data-testid="testimonial-card"
          />
          <div className="text-center mt-4">
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