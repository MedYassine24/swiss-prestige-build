interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  return (
    <span className={`font-montserrat font-bold tracking-tight ${sizeClasses[size]} ${className}`}>
      <span className="text-foreground">SWISS</span>
      <span className="inline-flex items-center justify-center w-5 h-5 mx-1 bg-swiss-red rounded-sm">
        <span className="text-white text-xs font-bold">+</span>
      </span>
      <span className="text-gold">PRESTIGE</span>
      <span className="text-foreground/80 ml-1">BUILD</span>
    </span>
  );
}

