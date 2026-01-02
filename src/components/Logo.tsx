interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <span className={`font-montserrat font-bold tracking-tight ${sizeClasses[size]} ${className}`}>
      <span className="text-foreground">SWISS</span>
      <span className="inline-flex items-center justify-center w-6 h-6 mx-1 bg-swiss-red rounded-sm">
        <span className="text-white text-sm font-bold">+</span>
      </span>
      <span className="text-foreground">HABITAT</span>
    </span>
  );
}
