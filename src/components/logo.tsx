import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <Image
        src="/logo.png"  // Removed /public from path
        alt="Immutag Logo"
        width={150}
        height={40}
        data-ai-hint="company logo"
        // className="dark:invert"  // Optional: remove to test
      />
    </div>
  );
};

export default Logo;