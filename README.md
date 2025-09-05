# ShoeStyle Landing Page

A modern, responsive e-commerce landing page for premium athletic footwear built with React, TypeScript, and Tailwind CSS. This project showcases a complete shoe retail website with product catalog, company information, and customer engagement features.

## 🔗 Repository

**GitHub Repository:** [https://github.com/DBusch-Developer/Shoe-Landing-Page]

📋 **Quick Links:**
- [Live Demo](#) ([https://shoe-landing-page-u213-acd9xrial-diana-buschs-projects.vercel.app/])

## 🚀 Features

### Core Pages
- **Home** - Hero section with featured products and brand story
- **Products** - Complete product catalog with filtering and color selection
- **About** - Company mission, team, and impact statistics
- **Contact** - Contact form with support options

### UI Components
- **Reusable Components** - Button, Card, Heading, Paragraph with TypeScript props
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Elements** - Product color selection, category filtering
- **Form Handling** - Contact form with validation and state management

### Technical Features
- **TypeScript** - Full type safety and IntelliSense support
- **Component Architecture** - Modular, reusable React components
- **Routing** - Client-side navigation with React Router
- **Modern Build** - Vite for fast development and optimized builds
- **Code Quality** - ESLint configuration with React and TypeScript rules

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.1
- **Language:** TypeScript 5.8.3
- **Build Tool:** Vite 7.1.2
- **Styling:** Tailwind CSS 4.1.12
- **Routing:** React Router DOM 7.8.2
- **Code Quality:** ESLint 9.33.0
- **Font:** Inter (Google Fonts)

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── Button.tsx       # Reusable button component
│   │       ├── Card.tsx         # Product/feature card component
│   │       ├── Heading.tsx      # Semantic heading component
│   │       └── Paragraph.tsx    # Text paragraph component
│   ├── pages/
│   │   ├── Home.tsx            # Landing page
│   │   ├── About.tsx           # Company information
│   │   ├── Products.tsx        # Product catalog
│   │   └── Contact.tsx         # Contact form
│   ├── sections/
│   │   ├── Hero.tsx            # Hero banner section
│   │   ├── Features.tsx        # Features showcase
│   │   ├── Footer.tsx          # Site footer
│   │   └── Navbar.tsx          # Navigation header
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── utils/
│   │   └── classNames.ts       # Utility functions for CSS classes
│   ├── styles/
│   │   └── index.css           # Global styles and Tailwind imports
│   ├── assets/                 # Images and static assets
│   ├── App.tsx                 # Main application component
│   └── main.tsx               # Application entry point
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js (version 20.19.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Shoe-Landing-Page
   ```

2. **Navigate to client directory**
   ```bash
   cd client
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Component Library

### UI Components

#### Button
```tsx
<Button
  text="Shop Now"
  variant="primary"
  size="lg"
  onClick={() => console.log('clicked')}
/>
```

#### Card
```tsx
<Card
  title="Air Comfort Pro"
  description="Lightweight running shoes..."
  price="$129.99"
  image="/path/to/image.jpg"
  colors={['Black', 'White', 'Red']}
  primaryAction={{ text: 'Add to Cart', onClick: handleAddToCart }}
/>
```

#### Heading
```tsx
<Heading
  text="Welcome to ShoeStyle"
  level={1}
  className="text-center"
/>
```

### Section Components

- **Hero** - Full-screen hero banner with call-to-action buttons
- **Features** - Product showcase grid with interactive cards
- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Comprehensive site footer with links and newsletter signup

## 🎯 Key Features Explained

### Product Catalog
- **Category Filtering** - Filter products by Running, Casual, Formal, Sport
- **Color Selection** - Interactive color picker for each product
- **Responsive Grid** - Adapts from 1-3 columns based on screen size

### Type Safety
- **Comprehensive Types** - All components have detailed TypeScript interfaces
- **Prop Validation** - Runtime and compile-time prop checking
- **IntelliSense Support** - Enhanced developer experience with autocomplete

### Responsive Design
- **Mobile-First** - Optimized for mobile devices first
- **Breakpoint System** - Uses Tailwind's responsive utilities
- **Touch-Friendly** - Appropriate touch targets and interactions

## 🎨 Design System

### Colors
- **Primary:** `#009488` (Teal)
- **Secondary:** `#0C827A` (Dark Teal)
- **Text:** `#1E293B` (Slate Gray)
- **Background:** `#F8FAFC` (Light Gray)

### Typography
- **Font Family:** Inter
- **Heading Scales:** H1 (48px) to H6 (16px) with responsive scaling
- **Line Heights:** Optimized for readability

### Spacing
- **Consistent Scale** - Uses Tailwind's spacing system
- **Component Padding** - Standardized internal spacing
- **Grid Gaps** - Consistent spacing between elements

## 🔧 Development Guidelines

### Component Development
1. Create components in `src/components/ui/`
2. Add TypeScript interfaces in `src/types/index.ts`
3. Use Tailwind CSS for styling
4. Include proper accessibility attributes

### Styling Conventions
- Use Tailwind utility classes
- Avoid custom CSS when possible
- Follow mobile-first responsive design
- Use semantic color names from design system

### TypeScript Best Practices
- Define interfaces for all props
- Use union types for variants
- Include optional properties with defaults
- Export types for reuse

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

**Built with ❤️ using React, TypeScript, and Tailwind CSS**