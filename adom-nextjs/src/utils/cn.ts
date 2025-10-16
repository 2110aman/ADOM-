import { clsx, type ClassValue } from 'clsx';

// Utility function for conditional CSS classes
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Common CSS class combinations
export const commonClasses = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-16 lg:py-24',
  heading: 'text-3xl lg:text-4xl xl:text-5xl font-bold',
  subheading: 'text-lg lg:text-xl text-gray-600',
  button: {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors',
    secondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors'
  },
  card: 'bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow',
  grid: {
    two: 'grid grid-cols-1 lg:grid-cols-2 gap-8',
    three: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    four: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
  }
};

