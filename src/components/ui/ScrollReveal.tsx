"use client";

import * as React from "react";
import { useRef, useEffect, useState } from "react";

function getInitialVisibility(): boolean {
  if (typeof window === "undefined") return true;
  if (!("IntersectionObserver" in window)) return true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  return false;
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  asChild?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  style,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  delay = 0,
  asChild = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(getInitialVisibility);

  useEffect(() => {
    if (isVisible) return;
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              const timer = setTimeout(() => setIsVisible(true), delay);
              if (triggerOnce) observer.unobserve(element);
              return () => clearTimeout(timer);
            } else {
              setIsVisible(true);
              if (triggerOnce) observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, delay, isVisible]);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      ref,
      className: `${(children as React.ReactElement<any>).props.className || ""} ${className} ${isVisible ? "revealed" : ""}`,
      style: { ...(children as React.ReactElement<any>).props.style, ...style },
    });
  }

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? "revealed" : ""}`}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

interface WordRevealProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export function WordReveal({
  text,
  className = "",
  highlightWords = [],
  highlightClassName = "text-highlight",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
  as: Component = "h1",
}: WordRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(getInitialVisibility);

  useEffect(() => {
    if (isVisible) return;
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              const timer = setTimeout(() => setIsVisible(true), delay);
              observer.unobserve(element);
              return () => clearTimeout(timer);
            } else {
              setIsVisible(true);
              observer.unobserve(element);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, delay, isVisible]);

  const words = text.split(" ").map((word, index) => {
    const isHighlight = highlightWords.some((hw) => word.toLowerCase().includes(hw.toLowerCase()));
    return (
      <span
        key={index}
        className={`inline-block ${isHighlight ? highlightClassName : ""}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(0.75em)",
          transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
          transitionDelay: `${index * 60 + delay}ms`,
        }}
      >
        {word}
      </span>
    );
  });

  return (
    <Component ref={ref as any} className={className}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          {word}
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </Component>
  );
}

interface LineRevealProps {
  text: string;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  as?: "p" | "div" | "span";
}

export function LineReveal({
  text,
  className = "",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
  as: Component = "p",
}: LineRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(getInitialVisibility);

  useEffect(() => {
    if (isVisible) return;
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, isVisible]);

  const lines = text.split("\n").filter((line) => line.trim());

  return (
    <Component ref={ref as any} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          className="block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(1em)",
            transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
            transitionDelay: `${index * 100 + delay}ms`,
          }}
        >
          {line}
        </span>
      ))}
    </Component>
  );
}
