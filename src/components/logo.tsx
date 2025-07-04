import { Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Cpu className="h-8 w-8 text-primary" />
      <span className="font-headline text-2xl font-bold text-primary">
        Immutag
      </span>
    </div>
  );
};

export default Logo;
