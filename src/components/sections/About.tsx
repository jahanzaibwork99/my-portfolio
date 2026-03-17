import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, ShieldCheck, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function About() {
  const highlights = [
    {
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      title: 'Creative Problem Solving',
      description: 'I enjoy tackling complex challenges and finding elegant, efficient solutions.',
    },
    {
      icon: <Rocket className="h-5 w-5 text-primary" />,
      title: 'Continuous Growth',
      description: 'The tech world moves fast, and I’m always learning to stay ahead of the curve.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      title: 'Quality Focused',
      description: 'I believe in writing clean, maintainable code that stands the test of time.',
    },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="A glimpse into who I am beyond the code."
      className="bg-secondary/10"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">
        
        {/* Left Side: Profile Image & Actions */}
        <div className="flex flex-col items-center gap-10 lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative shrink-0 -translate-y-4"
          >
            {/* Decorative Rings */}
            <div className="absolute -inset-4 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute -inset-2 rounded-full border border-primary/40 animate-[spin_15s_linear_infinite_reverse]" />
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img
                src="jahanzaib.jpeg"
                alt="Muhammad Jahanzaib"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border px-6 py-2 rounded-full shadow-lg z-20">
              <p className="text-sm font-bold whitespace-nowrap">
                <span className="text-primary font-black">Muhammad Jahanzaib</span>
              </p>
            </div>
          </motion.div>

          {/* Socials & Hire Me below pic */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <Button 
              size="lg" 
              className="rounded-full px-10 gap-2 group shadow-xl shadow-primary/20"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hire Me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 space-y-10"
        >
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              I am a <span className="text-primary">Full-Stack Developer</span> driven by curiosity and innovation.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My journey into web development started with a simple "Hello World" and evolved into a passion for building comprehensive digital solutions. Based in Pakistan, I specialize in bridging the gap between beautiful design and robust functionality.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I don't just write code; I build experiences. Whether it's crafting seamless interfaces with React or architecting scalable backends with Laravel, I focus on delivering value and performance in every line I ship.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border/50">
            {highlights.map((item, i) => (
              <div key={i} className="flex flex-col gap-4 p-5 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/40 transition-all group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1.5">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
