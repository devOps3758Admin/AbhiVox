import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'primary', children, ...props }, ref) => {
    const variants = {
      primary: 'badge-primary',
      secondary: 'badge-secondary',
      outline: 'badge-outline',
    };

    return (
      <span ref={ref} className={`${variants[variant]} ${className}`} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';