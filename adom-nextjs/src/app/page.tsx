import { Navigation } from '../components/layout/Navigation';
import { Hero } from '../components/sections/Hero';
import { getNavigationData, getHeroData } from '../utils/dataLoader';

export default async function Home() {
  const [navigationData, heroData] = await Promise.all([
    getNavigationData(),
    getHeroData()
  ]);

  return (
    <main>
      <Navigation data={navigationData} />
      <Hero data={heroData} />
    </main>
  );
}
