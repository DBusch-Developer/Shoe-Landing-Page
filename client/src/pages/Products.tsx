import React, { useState } from 'react';
import Heading from '../components/ui/Heading';
import Paragraph from '../components/ui/Paragraph';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import runningpro from '../assets/images/shoes/running-pro.jpg';
import casualcomfort from '../assets/images/shoes/casual-comfort.webp';
import formalelite from '../assets/images/shoes/formal-elite.jpg';
import sportmax from '../assets/images/shoes/sport-max.jpg';
import urbanwalker from '../assets/images/shoes/urban-walker.jpg';
import adventureboot from '../assets/images/shoes/adventure-boot.webp';
import limitededition from '../assets/images/shoes/limited-edition-runner.jpg';

const Product: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({
    'running-pro': 'Blue',
    'casual-comfort': 'White',
    'formal-elite': 'Black',
    'sport-max': 'Red',
    'urban-walker': 'Gray',
    'adventure-boot': 'Brown'
  });

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'running', label: 'Running' },
    { id: 'casual', label: 'Casual' },
    { id: 'formal', label: 'Formal' },
    { id: 'sport', label: 'Sport' }
  ];

  const products = [
    {
      id: 'running-pro',
      title: 'Running Pro X1',
      description: 'Premium running shoes with advanced cushioning technology for professional athletes.',
      price: '$159.99',
      image: runningpro,
      category: 'running',
      colors: ['Blue', 'Black', 'White', 'Red'],
      features: ['Lightweight', 'Breathable', 'Anti-slip']
    },
    {
      id: 'casual-comfort',
      title: 'Casual Comfort',
      description: 'Everyday sneakers that blend style and comfort for daily wear.',
      price: '$89.99',
      image: casualcomfort,
      category: 'casual',
      colors: ['White', 'Gray', 'Navy', 'Beige'],
      features: ['All-day comfort', 'Versatile style', 'Durable']
    },
    {
      id: 'formal-elite',
      title: 'Formal Elite',
      description: 'Handcrafted leather dress shoes perfect for business and formal occasions.',
      price: '$249.99',
      image: formalelite,
      category: 'formal',
      colors: ['Black', 'Brown', 'Dark Brown'],
      features: ['Premium leather', 'Handcrafted', 'Classic design']
    },
    {
      id: 'sport-max',
      title: 'Sport Max',
      description: 'High-performance athletic shoes designed for intense training and sports.',
      price: '$199.99',
      image: sportmax,
      category: 'sport',
      colors: ['Red', 'Blue', 'Black', 'White'],
      features: ['High performance', 'Energy return', 'Stability']
    },
    {
      id: 'urban-walker',
      title: 'Urban Walker',
      description: 'Stylish walking shoes perfect for city exploration and daily commutes.',
      price: '$119.99',
      image: urbanwalker,
      category: 'casual',
      colors: ['Gray', 'Black', 'White', 'Tan'],
      features: ['Comfortable sole', 'Urban style', 'All-day wear']
    },
    {
      id: 'adventure-boot',
      title: 'Adventure Boot',
      description: 'Rugged hiking boots built for outdoor adventures and challenging terrain.',
      price: '$189.99',
      image: adventureboot,
      category: 'sport',
      colors: ['Brown', 'Black', 'Olive'],
      features: ['Waterproof', 'Durable', 'Traction grip']
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleColorSelect = (productId: string, color: string) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: color
    }));
  };

  const handleAddToCart = (product: typeof products[0]) => {
    const color = selectedColors[product.id];
    alert(`Added ${product.title} (${color}) to cart!`);
  };

  const handleViewDetails = (product: typeof products[0]) => {
    alert(`View details for ${product.title}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Heading 
            text="Our Product Collection"
            level={1}
            className="text-gray-900 mb-6"
          />
          <Paragraph 
            text="Discover our complete range of premium footwear designed for every occasion and lifestyle."
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                text={category.label}
                variant={selectedCategory === category.id ? 'primary' : 'secondary'}
                size="md"
                onClick={() => setSelectedCategory(category.id)}
                className="min-w-[120px]"
              />
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                colors={product.colors}
                selectedColor={selectedColors[product.id]}
                onColorSelect={(color) => handleColorSelect(product.id, color)}
                primaryAction={{
                  text: 'Add to Cart',
                  onClick: () => handleAddToCart(product)
                }}
                secondaryAction={{
                  text: 'View Details',
                  onClick: () => handleViewDetails(product)
                }}
                className="hover:shadow-lg transition-shadow duration-300"
                data-testid={`product-${product.id}`}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Paragraph 
                text="No products found in this category."
                className="text-gray-500 text-lg"
              />
            </div>
          )}
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8">
            <div className="text-center mb-8">
              <Heading 
                text="Why Choose ShoeStyle?"
                level={2}
                className="text-gray-900 mb-4"
              />
              <Paragraph 
                text="Every pair of shoes is crafted with attention to detail and built to last."
                className="text-lg text-gray-600"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card
                title="Premium Materials"
                description="Only the finest materials are used in our manufacturing process."
                icon={
                  <div className="w-12 h-12 bg-[#009488] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                }
                data-testid="materials-feature"
              />

              <Card
                title="Comfort Technology"
                description="Advanced cushioning and support systems for all-day comfort."
                icon={
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                }
                data-testid="comfort-feature"
              />

              <Card
                title="Sustainable Design"
                description="Eco-friendly materials and sustainable production methods."
                icon={
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                }
                data-testid="sustainable-feature"
              />

              <Card
                title="Quality Guarantee"
                description="100% satisfaction guarantee with comprehensive warranty coverage."
                icon={
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                }
                data-testid="quality-feature"
              />
            </div>
          </div>
        </section>

        {/* Featured Product */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <Heading 
              text="Featured Product"
              level={2}
              className="text-gray-900 mb-4"
            />
          </div>
          
          <Card
            title="Limited Edition Runner"
            description="Our most advanced running shoe featuring cutting-edge technology and exclusive colorways. Limited quantities available - perfect for serious athletes who demand the best performance."
            price="$299.99"
            image={limitededition}
            orientation="horizontal"
            colors={['Platinum', 'Gold', 'Rose Gold']}
            selectedColor="Platinum"
            onColorSelect={(color) => console.log('Featured product color:', color)}
            primaryAction={{
              text: 'Pre-Order Now',
              onClick: () => alert('Pre-order Limited Edition Runner!')
            }}
            secondaryAction={{
              text: 'Learn More',
              onClick: () => alert('Learn more about Limited Edition Runner')
            }}
            className="max-w-5xl mx-auto bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200"
            data-testid="featured-product"
          />
        </section>

        {/* CTA Section - FIXED */}
        <section className="bg-gradient-to-r from-[#009488] to-[#0C827A] rounded-2xl p-8 text-white text-center">
          <Heading 
            text="Can't Find What You're Looking For?"
            level={2}
            color="white"
            className="mb-4"
          />
          <Paragraph 
            text="Contact our expert team to help you find the perfect shoe for your needs."
            className="text-white text-lg mb-6"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text="Contact Expert"
              variant="primary"
              size="lg"
              onClick={() => alert('Connecting you with a shoe expert...')}
              className="!bg-transparent !border-white !text-white hover:!bg-white hover:!text-[#009488] border-2"
            />
            <Button
              text="Custom Order"
              variant="primary"
              size="lg"
              onClick={() => alert('Custom shoe order coming soon!')}
              className="!bg-transparent !border-white !text-white hover:!bg-white hover:!text-[#009488] border-2"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;