import React from 'react';
import Button from '../components/ui/Button';

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
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Home Page</h1>
          <p className="text-gray-600 mb-8">Testing the reusable Button component with different variants and sizes.</p>
        </div>

        <div className="space-y-6">
          {/* Primary Variants */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Primary Buttons</h2>
            <div className="flex flex-col space-y-3">
              <Button
                text="Small Primary Button"
                variant="primary"
                size="sm"
                onClick={handleSizeTestClick}
              />
              <Button
                text="Medium Primary Button"
                variant="primary"
                size="md"
                onClick={handlePrimaryClick}
              />
              <Button
                text="Large Primary Button"
                variant="primary"
                size="lg"
                onClick={handleSizeTestClick}
              />
            </div>
          </div>

          {/* Secondary Variants */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Secondary Buttons</h2>
            <div className="flex flex-col space-y-3">
              <Button
                text="Small Secondary Button"
                variant="secondary"
                size="sm"
                onClick={handleSizeTestClick}
              />
              <Button
                text="Medium Secondary Button"
                variant="secondary"
                size="md"
                onClick={handleSecondaryClick}
              />
              <Button
                text="Large Secondary Button"
                variant="secondary"
                size="lg"
                onClick={handleSizeTestClick}
              />
            </div>
          </div>

          {/* Disabled States */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Disabled States</h2>
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
    </div>
  );
};

export default Home;