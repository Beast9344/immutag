import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
import Logo from '@/components/logo';
import { Button } from '../ui/button';

const navItems = [
  { name: 'About Us', href: '#about' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Whitepaper', href: '#whitepaper' },
  { name: 'How It Works', href: '#how-it-works' },
];

const legalItems = [
  { name: 'Terms of Service', href: '#' },
  { name: 'Privacy Policy', href: '#' },
]

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              The future of digital asset ownership.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-headline text-md font-semibold text-foreground">Platform</h4>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary neon-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-headline text-md font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2">
              {legalItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary neon-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-headline text-md font-semibold text-foreground">Connect With Us</h4>
            <div className="mt-4 flex items-center gap-2">
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
        
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Immutag. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
