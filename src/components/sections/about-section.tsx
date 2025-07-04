import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Eye, Rocket, Users } from 'lucide-react';

const teamMembers = [
  { name: 'Alex Johnson', role: 'CEO & Founder', avatar: 'https://placehold.co/100x100.png', dataAiHint: 'professional portrait' },
  { name: 'Maria Garcia', role: 'Lead Blockchain Developer', avatar: 'https://placehold.co/100x100.png', dataAiHint: 'woman developer' },
  { name: 'Sam Williams', role: 'UX/UI Designer', avatar: 'https://placehold.co/100x100.png', dataAiHint: 'designer portrait' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Immutag
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            We are a passionate team dedicated to building the future of digital asset ownership on the decentralized web.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Rocket className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline mt-4">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To empower creators and collectors with a secure, transparent, and user-friendly platform for managing digital assets.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Eye className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline mt-4">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A future where digital ownership is seamless, universally accessible, and free from centralized control.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline mt-4">Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Comprised of experts in blockchain technology, cryptography, and user experience design.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
           <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">
            Meet the Innovators
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
            The driving force behind Immutag's success.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Avatar className="mx-auto h-24 w-24 border-4 border-background shadow-md">
                  <AvatarImage src={member.avatar} data-ai-hint={member.dataAiHint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h4 className="font-headline mt-4 text-xl font-semibold">{member.name}</h4>
                <p className="mt-1 text-sm text-accent">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
