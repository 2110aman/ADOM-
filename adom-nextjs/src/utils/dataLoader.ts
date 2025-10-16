import { promises as fs } from 'fs';
import path from 'path';
import { NavigationData, HeroData, AboutData, TopicsData, CoursesData, TestimonialsData } from '../types';

// Generic function to load JSON data
export async function loadJsonData<T>(filename: string): Promise<T> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', filename);
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents) as T;
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    throw new Error(`Failed to load ${filename}`);
  }
}

// Specific data loading functions
export async function getNavigationData(): Promise<NavigationData> {
  return loadJsonData<NavigationData>('navigation.json');
}

export async function getHeroData(): Promise<HeroData> {
  return loadJsonData<HeroData>('hero.json');
}

export async function getAboutData(): Promise<AboutData> {
  return loadJsonData<AboutData>('about.json');
}

export async function getTopicsData(): Promise<TopicsData> {
  return loadJsonData<TopicsData>('topics.json');
}

export async function getCoursesData(): Promise<CoursesData> {
  return loadJsonData<CoursesData>('courses.json');
}

export async function getTestimonialsData(): Promise<TestimonialsData> {
  return loadJsonData<TestimonialsData>('testimonials.json');
}
