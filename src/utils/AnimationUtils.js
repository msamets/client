import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS animation library with default configuration
export const initializeAnimations = () => {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: false, // whether animation should happen only once
    mirror: false, // whether elements should animate out while scrolling past them
    offset: 120, // offset (in px) from the original trigger point
  });
};

// Refresh AOS when the window is resized
export const refreshAnimations = () => {
  AOS.refresh();
};

// Animation presets
export const ANIMATION_PRESETS = {
  FADE_IN: {
    'data-aos': 'fade-in',
  },
  FADE_UP: {
    'data-aos': 'fade-up',
  },
  FADE_DOWN: {
    'data-aos': 'fade-down',
  },
  FADE_LEFT: {
    'data-aos': 'fade-left',
  },
  FADE_RIGHT: {
    'data-aos': 'fade-right',
  },
  ZOOM_IN: {
    'data-aos': 'zoom-in',
  },
  FLIP_LEFT: {
    'data-aos': 'flip-left',
  },
  FLIP_RIGHT: {
    'data-aos': 'flip-right',
  },
};