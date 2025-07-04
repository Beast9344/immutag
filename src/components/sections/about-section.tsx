import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShieldCheck, Eye, Users, Building } from 'lucide-react';

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
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-headline text-2xl font-bold">Our Mission</h3>
                        <p className="mt-2 text-muted-foreground">
                            At Immutag, our mission is to empower individuals and businesses by providing clear, secure, and indisputable proof of ownership for valuable items. By combining advanced blockchain technology with physical tagging, we’re revolutionising how ownership is secured and verified.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Eye className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-headline text-2xl font-bold">Our Vision</h3>
                        <p className="mt-2 text-muted-foreground">
                            A world where every valuable asset is protected, verifiable, and effortlessly transferable, reducing theft, fraud, and disputes over ownership.
                        </p>
                    </div>
                </div>
            </div>
            <div className="space-y-8">
                 <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Building className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-headline text-2xl font-bold">Who We Are</h3>
                        <p className="mt-2 text-muted-foreground">
                            Immutag began as LOX Network, evolving into a leading provider of blockchain-based verification solutions. We collaborate closely with manufacturers, insurance providers, network operators, and law enforcement to ensure every device or asset registered on our platform is securely protected.
                        </p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Users className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-headline text-2xl font-bold">Our Team</h3>
                        <p className="mt-2 text-muted-foreground">
                            Led by blockchain experts, security specialists, and technology entrepreneurs, our experienced team is dedicated to creating robust, user-friendly solutions that safeguard your assets and peace of mind.
                        </p>
                    </div>
                </div>
            </div>
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
