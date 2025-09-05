import Card from '../components/ui/Card';
import Paragraph from '../components/ui/Paragraph';
import Heading from '../components/ui/Heading';
import HeroSection from '../sections/Hero';
import Features from '../sections/Features';

const Home: React.FC = () => {

  // Hero Section handlers
  const handleShopCollection = () => {
    console.log('Shop Collection clicked!');
    alert('Navigating to product collection...');
  };

  const handleLearnMore = () => {
    console.log('Learn More clicked!');
    alert('Learn more about our story...');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        heading="Step Into Comfort & Style"
        subtitle="Discover our new collection of premium shoes designed for both comfort and style. Crafted with the finest materials and attention to detail."
        primaryButton={{
          text: "Shop Collection",
          onClick: handleShopCollection
        }}
        secondaryButton={{
          text: "Learn More",
          onClick: handleLearnMore
        }}
        backgroundImage="/assets/hero-background.jpg"
        data-testid="home-hero-section"
      />

      {/* Rest of the Home page content */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
         

          {/* Features Section - Now using the Features component */}
          <Features
            title="Why Choose Our Shoes?"
            subtitle="Discover the features that make our footwear exceptional for every lifestyle."
            className="mb-12"
            data-testid="home-features-section"
          />             

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
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
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
    </div>
  );
};

export default Home;