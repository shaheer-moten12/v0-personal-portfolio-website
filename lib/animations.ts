import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Text Reveal Animation - line by line
export const textRevealAnimation = (
  element: HTMLElement | null,
  options: { duration?: number; delay?: number; stagger?: number } = {}
) => {
  if (!element) return;

  const { duration = 0.8, delay = 0, stagger = 0.1 } = options;

  const lines = element.querySelectorAll('[data-line]');

  if (lines.length === 0) {
    // Fallback: animate as a single element
    gsap.from(element, {
      duration,
      delay,
      opacity: 0,
      y: 30,
    });
    return;
  }

  gsap.from(lines, {
    duration,
    delay,
    opacity: 0,
    y: 20,
    stagger,
  });
};

// Section fade-in on scroll
export const sectionFadeInAnimation = (
  element: HTMLElement | null,
  options: { duration?: number; delay?: number } = {}
) => {
  if (!element) return;

  const { duration = 0.8, delay = 0 } = options;

  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    duration,
    delay,
    opacity: 0,
    y: 50,
  });
};

// Title animation - stagger characters or words
export const titleAnimation = (
  element: HTMLElement | null,
  options: { duration?: number; stagger?: number; by?: 'char' | 'word' } = {}
) => {
  if (!element) return;

  const { duration = 0.6, stagger = 0.05, by = 'char' } = options;

  // Split text into individual characters or words
  const text = element.innerText;
  const items = by === 'char' ? text.split('') : text.split(' ');

  element.innerHTML = items
    .map((item) => `<span style="display: inline-block; overflow: hidden;">
      <span style="display: inline-block;">${item}</span>
    </span>`)
    .join(by === 'char' ? '' : ' ');

  const spans = element.querySelectorAll('span > span');

  gsap.from(spans, {
    duration,
    opacity: 0,
    y: 20,
    stagger,
  });
};

// Timeline animation - used for timelines in experience/education
export const timelineAnimation = (
  container: HTMLElement | null,
  options: { duration?: number; stagger?: number } = {}
) => {
  if (!container) return;

  const { duration = 0.6, stagger = 0.15 } = options;

  const items = container.querySelectorAll('[data-timeline-item]');

  gsap.from(items, {
    scrollTrigger: {
      trigger: container,
      start: 'top 60%',
    },
    duration,
    opacity: 0,
    x: (index) => (index % 2 === 0 ? -50 : 50),
    stagger,
  });
};

// Counter animation - count up numbers
export const counterAnimation = (
  element: HTMLElement | null,
  target: number,
  options: { duration?: number; decimals?: number } = {}
) => {
  if (!element) return;

  const { duration = 2, decimals = 0 } = options;

  const obj = { value: 0 };

  gsap.to(obj, {
    duration,
    value: target,
    onUpdate: () => {
      element.innerText = obj.value.toFixed(decimals);
    },
    ease: 'power2.out',
  });
};

// Scroll-triggered stagger animation
export const staggerAnimationOnScroll = (
  selector: string,
  options: {
    duration?: number;
    stagger?: number;
    fromY?: number;
    trigger?: HTMLElement | string;
  } = {}
) => {
  const {
    duration = 0.6,
    stagger = 0.1,
    fromY = 30,
    trigger: triggerElement = undefined,
  } = options;

  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) return;

  gsap.from(elements, {
    scrollTrigger: {
      trigger: triggerElement || elements[0],
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
    duration,
    opacity: 0,
    y: fromY,
    stagger,
  });
};

// Parallax animation
export const parallaxAnimation = (
  element: HTMLElement | null,
  options: { offset?: number } = {}
) => {
  if (!element) return;

  const { offset = 0.5 } = options;

  gsap.to(element, {
    y: gsap.quickSetter(element, 'y', 'px'),
    scrollTrigger: {
      trigger: element,
      onUpdate: (self) => {
        gsap.set(element, {
          y: -(self.getVelocity() * offset) / 300,
        });
      },
    },
  });
};

// Hover scale animation
export const hoverScaleAnimation = (
  element: HTMLElement | null,
  scale: number = 1.05,
  duration: number = 0.3
) => {
  if (!element) return;

  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      duration,
      scale,
      overwrite: 'auto',
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      duration,
      scale: 1,
      overwrite: 'auto',
    });
  });
};

// Glitch effect animation
export const glitchAnimation = (element: HTMLElement | null) => {
  if (!element) return;

  const timeline = gsap.timeline({ repeat: -1 });

  timeline
    .to(element, { x: -2, duration: 0.05 }, 0)
    .to(element, { x: 2, duration: 0.05 }, 0.05)
    .to(element, { x: -2, duration: 0.05 }, 0.1)
    .to(element, { x: 0, duration: 0.05 }, 0.15);

  // Slow down the glitch
  timeline.totalDuration(0.2);
  timeline.paused(true);

  element.addEventListener('mouseenter', () => {
    timeline.play();
  });

  element.addEventListener('mouseleave', () => {
    timeline.pause();
  });
};

// Page transition animation
export const pageTransitionIn = (overlay: HTMLElement | null) => {
  if (!overlay) return;

  return gsap.timeline().from(overlay, {
    duration: 0.6,
    scaleY: 0,
    transformOrigin: 'bottom',
    ease: 'power4.inOut',
  });
};

export const pageTransitionOut = (overlay: HTMLElement | null) => {
  if (!overlay) return;

  return gsap.timeline().to(overlay, {
    duration: 0.6,
    scaleY: 1,
    transformOrigin: 'bottom',
    ease: 'power4.inOut',
  });
};

// Floating animation (continuous up-down motion)
export const floatingAnimation = (
  element: HTMLElement | null,
  options: { duration?: number; distance?: number } = {}
) => {
  if (!element) return;

  const { duration = 3, distance = 20 } = options;

  gsap.to(element, {
    duration,
    y: -distance,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

// Morphing gradient animation (for backgrounds)
export const morphingGradientAnimation = (
  element: HTMLElement | null,
  colors: string[] = ['#00d4ff', '#c000ff', '#ff006e']
) => {
  if (!element) return;

  const timeline = gsap.timeline({ repeat: -1 });

  for (let i = 0; i < colors.length; i++) {
    timeline.to(element, {
      background: colors[i],
      duration: 4,
    });
  }
};

// Pulse animation (scale in and out)
export const pulseAnimation = (
  element: HTMLElement | null,
  options: { duration?: number; scale?: number } = {}
) => {
  if (!element) return;

  const { duration = 1.5, scale = 1.1 } = options;

  gsap.to(element, {
    duration,
    scale,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

// Typing animation (word by word reveal)
export const typingAnimation = (
  element: HTMLElement | null,
  text: string,
  options: { duration?: number; delay?: number } = {}
) => {
  if (!element) return;

  const { duration = 3, delay = 0 } = options;
  const words = text.split(' ');

  let displayedText = '';
  const timePerWord = duration / words.length;

  gsap.to(
    { count: 0 },
    {
      count: words.length,
      duration,
      delay,
      snap: { count: 1 },
      onUpdate: (tween) => {
        const count = Math.floor(tween.progress() * words.length);
        displayedText = words.slice(0, count).join(' ');
        element.innerText = displayedText;
      },
    }
  );
};

// Draw SVG stroke animation
export const drawSVGAnimation = (
  element: SVGElement | null,
  options: { duration?: number; direction?: 'forward' | 'reverse' } = {}
) => {
  if (!element) return;

  const { duration = 1.5, direction = 'forward' } = options;
  const length = (element as any).getTotalLength?.() || 0;

  gsap.fromTo(
    element,
    {
      strokeDasharray: length,
      strokeDashoffset: direction === 'forward' ? length : -length,
    },
    {
      duration,
      strokeDashoffset: direction === 'forward' ? 0 : length,
      ease: 'power2.inOut',
    }
  );
};

// Blur-in animation
export const blurInAnimation = (
  element: HTMLElement | null,
  options: { duration?: number; initialBlur?: number } = {}
) => {
  if (!element) return;

  const { duration = 1, initialBlur = 10 } = options;

  gsap.from(element, {
    duration,
    filter: `blur(${initialBlur}px)`,
    opacity: 0,
  });
};

// Rotate animation (continuous rotation)
export const rotateAnimation = (
  element: HTMLElement | null,
  options: { duration?: number; degrees?: number } = {}
) => {
  if (!element) return;

  const { duration = 4, degrees = 360 } = options;

  gsap.to(element, {
    rotation: degrees,
    duration,
    repeat: -1,
    ease: 'none',
  });
};

// Create a GSAP context for cleanup
export const createAnimationContext = () => {
  const ctx = gsap.context(() => {});
  return {
    add: (animation: () => void) => ctx.add(animation),
    revert: () => ctx.revert(),
  };
};
