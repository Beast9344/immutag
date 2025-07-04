import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
import Logo from '@/components/logo';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <footer className="border-t bg-background/50">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <Logo />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Immutag. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="neon-ghost">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="neon-ghost">
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="neon-ghost">
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
