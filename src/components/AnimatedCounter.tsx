"use client";

import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const increment = (to - from) / steps;
    let current = from;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [from, to]);

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  );
}
