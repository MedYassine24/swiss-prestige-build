import { useState, useEffect, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.2, rootMargin = '0px', triggerOnce = true } = options;
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce && ref) {
            observer.unobserve(ref);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      });
    },
    [triggerOnce, ref]
  );

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(callback, {
      threshold,
      rootMargin,
    });

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, callback, threshold, rootMargin]);

  return { ref: setRef, isIntersecting };
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}

export function useAnimatedCounter(
  end: number,
  duration: number = 2000,
  start: number = 0
) {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);

  const animate = useCallback(() => {
    setIsAnimating(true);
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(start + (end - start) * easeOut);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, start]);

  return { count, animate, isAnimating };
}

export function useTypingEffect(text: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = useCallback(() => {
    setDisplayedText('');
    setIsComplete(false);
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
        setIsComplete(true);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return { displayedText, isComplete, startTyping };
}
