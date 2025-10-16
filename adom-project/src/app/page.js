import Hero from "./components/Hero";
import About from "./components/About";
import Topics from "./components/Topics";
import Courses from "./components/Courses";
import Testimonial from "./components/Testimonial";
import Research from "./components/Research";
import Insights from "./components/Insights";
import Affiliations from "./components/Affiliations";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Topics />
      <Courses />
      <Testimonial />
      <Research />
      <Insights />
      <Affiliations />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
