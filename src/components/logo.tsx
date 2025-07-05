import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <Image
        src="/public/logo.png"
        alt="Immutag Logo"
        width={150}
        height={40}
        data-ai-hint="company logo"
        className="dark:invert"
      />
    </div>
  );
};

export default Logo;
