import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
import Logo from '@/components/logo';
import { Button } from '../ui/button';

const platformItems = [
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Why Immutag?', href: '/#why-immutag' },
  { name: 'Use Cases', href: '/#use-cases' },
  { name: 'Devices', href: '/#devices' },
  { name: 'Whitepaper', href: '/whitepaper' },
];

const companyItems = [
  { name: 'About Us', href: '/about' },
  { name: 'Roadmap', href: '/roadmap' },
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
          <div className="md:col-span-3">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              The future of secure ownership starts here.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-headline text-md font-semibold text-foreground">Platform</h4>
            <ul className="mt-4 space-y-2">
              {platformItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary neon-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-headline text-md font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-2">
              {companyItems.map((item) => (
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

          <div className="md:col-span-3">
            <h4 className="font-headline text-md font-semibold text-foreground">Connect With Us</h4>
            <div className="mt-4 flex items-center gap-3">
              {/* Twitter/X Icon - Updated to X logo */}
              <Link
                href="#"
                aria-label="X (formerly Twitter)"
                className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm hover:border-neutral-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neutral-500/20"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-neutral-300 group-hover:text-white transition-colors duration-300 relative z-10"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>

              {/* LinkedIn Icon - Enhanced with brand colors */}
              <Link
                href="#"
                aria-label="LinkedIn"
                className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-neutral-300 group-hover:text-blue-400 transition-colors duration-300 relative z-10"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>

              {/* GitHub Icon - Enhanced with modern styling */}
              <Link
                href="#"
                aria-label="GitHub"
                className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-neutral-300 group-hover:text-purple-400 transition-colors duration-300 relative z-10"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
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