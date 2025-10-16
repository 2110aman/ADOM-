import { promises as fs } from 'fs';
import path from 'path';

// Generic function to load JSON data
export async function loadJsonData<T>(filename: string): Promise<T> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', filename);
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    throw new Error(`Failed to load ${filename}`);
  }
}

// Specific data loading functions
export async function getNavigationData() {
  return loadJsonData('navigation.json');
}

export async function getHeroData() {
  return loadJsonData('hero.json');
}

export async function getAboutData() {
  return loadJsonData('about.json');
}

export async function getTopicsData() {
  return loadJsonData('topics.json');
}

export async function getCoursesData() {
  return loadJsonData('courses.json');
}

export async function getTestimonialsData() {
  return loadJsonData('testimonials.json');
}

