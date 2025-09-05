import { useState } from 'react';
import Card from '../components/ui/Card';
import Heading from '../components/ui/Heading';
import Paragraph from '../components/ui/Paragraph';
import aircomfortpro from '../assets/images/shoes/air-comfort-pro.jpg';
import trailexplorer from '../assets/images/shoes/trail-explorer.webp';
import urbanclassic from '../assets/images/shoes/urban-classic.jpg';

// Import types from centralized types file
import type { 
  Product, 
  Feature, 
  FeaturesProps, 
  ProductActionHandler, 
  ColorSelectHandler 
} from '../types';

const Features: React.FC<FeaturesProps> = ({
  title = "Why Choose Our Shoes?",
  subtitle = "Discover the features that make our footwear exceptional",
  className = '',
  'data-testid': testId = 'features-section',
}) => {

  // Product data array - now using the shared Product interface
  const products: Product[] = [
    {
      id: 'air-comfort-pro',
      title: 'Air Comfort Pro',
      description: 'Lightweight running shoes with enhanced cushioning for maximum comfort.',
      price: '$129.99',
      image: aircomfortpro,
      colors: ['Black', 'White', 'Red'],
      defaultColor: 'Black'
    },
    {
      id: 'trail-explorer',
      title: 'Trail Explorer',
      description: 'Rugged hiking boots designed for outdoor adventures and all-terrain performance.',
      price: '$189.99',
      image: trailexplorer,
      colors: ['Brown', 'Pink', 'Orange'],
      defaultColor: 'Green'
    },
    {
      id: 'urban-classic',
      title: 'Urban Classic',
      description: 'Timeless sneakers that blend style and comfort for everyday wear in the city.',
      price: '$89.99',
      image: urbanclassic,
      colors: ['White', 'Black', 'Yellow', 'Navy'],
      defaultColor: 'White'
    }
  ];

  // Initialize selectedColors state based on products array
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>(
    products.reduce((acc, product) => {
      acc[product.id] = product.defaultColor;
      return acc;
    }, {} as Record<string, string>)
  );

  // Feature data array - now using the shared Feature interface
  const features: Feature[] = [
    {
      id: 'superior-comfort',
      title: 'Superior Comfort',
      description: 'Advanced cushioning technology provides all-day comfort for any activity.',
      icon: (
        <div className="w-12 h-12 bg-[#009488] rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      )
    },
    {
      id: 'durable-materials',
      title: 'Durable Materials',
      description: 'High-quality materials ensure your shoes last through countless adventures.',
      icon: (
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      )
    },
    {
      id: 'stylish-design',
      title: 'Stylish Design',
      description: 'Modern aesthetics that complement any outfit, from casual to athletic wear.',
      icon: (
        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
      )
    },
    {
      id: 'performance-technology',
      title: 'Performance Technology',
      description: 'Innovative features designed to enhance your athletic performance and daily comfort.',
      icon: (
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      )
    }
  ];

  // Handle color selection for product cards - now using typed handler
  const handleColorSelect: ColorSelectHandler = (productId: string, color: string) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: color
    }));
    console.log(`Selected ${color} for ${productId}`);
  };

  // Handle product actions - now using typed handlers
  const handleAddToCart: ProductActionHandler = (productName: string) => {
    const productId = productName.toLowerCase().replace(/\s+/g, '-');
    const color = selectedColors[productId];
    alert(`Added ${productName} (${color}) to cart!`);
  };

  const handleLearnMoreProduct: ProductActionHandler = (productName: string) => {
    alert(`Learn more about ${productName}`);
  };

  return (
    <>
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

        {/* Product Grid - Mapped from products array */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
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
                onClick: () => handleAddToCart(product.title)
              }}
              secondaryAction={{
                text: 'Learn More',
                onClick: () => handleLearnMoreProduct(product.title)
              }}
              data-testid={`${product.id}-card`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section 
        className={`bg-white py-12 px-4 sm:px-6 lg:px-8 ${className}`}
        data-testid={testId}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Heading
              text={title}
              level={2}
              className="text-gray-900 mb-4"
              data-testid="features-title"
            />
            {subtitle && (
              <Paragraph
                text={subtitle}
                className="text-gray-600 text-lg max-w-3xl mx-auto"
                data-testid="features-subtitle"
              />
            )}
          </div>

          {/* Features Grid - Responsive 2-3 column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className="text-center hover:shadow-lg transition-shadow duration-300"
                data-testid={`feature-card-${feature.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;