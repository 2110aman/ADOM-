// Navigation Types
export interface NavigationLink {
  name: string;
  href: string;
}

export interface NavigationButton {
  text: string;
  type: 'primary' | 'secondary';
  href: string;
}

export interface NavigationData {
  logo: {
    src: string;
    alt: string;
  };
  banner: {
    text: string;
  };
  links: NavigationLink[];
  buttons: NavigationButton[];
}

// Hero Types
export interface HeroImage {
  src: string;
  alt: string;
  class: string;
}

export interface HeroData {
  hero: {
    title: string;
    titleHighlight: string;
    description: string;
    button: {
      text: string;
      type: string;
    };
    images: {
      decorative: HeroImage[];
      hero: HeroImage[];
    };
  };
}

// About Types
export interface Feature {
  icon: string;
  text: string;
}

export interface Stat {
  number: string;
  text: string;
  highlight: boolean;
}

export interface AboutData {
  about: {
    subtitle: string;
    title: string;
    description: string;
    features: Feature[];
    stats: Stat[];
    button: {
      text: string;
      type: string;
    };
    images: HeroImage[];
    union: {
      src: string;
      alt: string;
    };
  };
}

// Topics Types
export interface TopicCard {
  id: number;
  image: string;
  icon: string;
  title: string;
  description: string;
  button: string;
}

export interface TopicsData {
  topics: {
    subtitle: string;
    title: string;
    description: string;
    union: {
      src: string;
      alt: string;
    };
    cards: TopicCard[];
  };
}

// Courses Types
export interface Course {
  id: number;
  title: string;
  image: string;
  duration: string;
  mode: string;
  schedule: string;
  qualification: string;
  description: string;
  buttons: {
    apply: string;
    learn: string;
  };
}

export interface CoursesData {
  courses: {
    subtitle: string;
    title: string;
    description: string;
    union: {
      src: string;
      alt: string;
    };
    courses: Course[];
    cta: {
      text: string;
      type: string;
    };
  };
}

// Testimonials Types
export interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: string;
  image: string;
  logo: string;
  active: boolean;
}

export interface TestimonialsData {
  testimonials: {
    subtitle: string;
    title: string;
    union: {
      src: string;
      alt: string;
    };
    image: {
      src: string;
      alt: string;
    };
    testimonials: Testimonial[];
  };
}

