import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border overflow-hidden relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          <div className="flex flex-col gap-4">
            <a href="#hero" className="text-2xl font-bold tracking-tighter">
              Jay<span className="text-primary">Portfolio</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-[280px]">
              Building modern, scalable, and responsive web applications with a focus on exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" asChild className="rounded-full bg-transparent hover:bg-primary/10 border-border">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-full bg-transparent hover:bg-primary/10 border-border">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-full bg-transparent hover:bg-primary/10 border-border">
                <a href="mailto:contact@example.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              © {currentYear} Jahanzaib. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
