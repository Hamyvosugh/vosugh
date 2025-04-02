// components/ui/Card.tsx
import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className = '', children }: CardProps) => {
  return (
    <div className={`rounded-lg border border-white/10 bg-black/20 shadow-md ${className}`}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const CardHeader = ({ className = '', children }: CardHeaderProps) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

export const CardTitle = ({ className = '', children }: CardTitleProps) => {
  return (
    <h3 className={`text-xl font-semibold leading-none tracking-tight ${className}`}>
      {children}
    </h3>
  );
};

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export const CardContent = ({ className = '', children }: CardContentProps) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export const CardFooter = ({ className = '', children }: CardFooterProps) => {
  return (
    <div className={`flex items-center p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};