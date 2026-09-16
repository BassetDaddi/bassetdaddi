"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

// The one reveal pattern on the site: opacity + 14px rise, once, when 15% of
// the element is visible. Styling lives in globals.css under html.js — without
// JavaScript the content is simply visible. Stagger with `delay` (ms).
type Props = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
};

export function Reveal({ as: Tag = "div", delay = 0, className, children }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.dataset.inview) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.inview = "true";
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined;

  return (
    <Tag ref={ref} data-reveal="" style={style} className={className}>
      {children}
    </Tag>
  );
}
