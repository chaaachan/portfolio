"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealHeading({ as = "h2", children }) {
  const Heading = as;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <Heading ref={ref} className={`section-heading reveal-heading${visible ? " is-visible" : ""}`}>{children}</Heading>;
}
