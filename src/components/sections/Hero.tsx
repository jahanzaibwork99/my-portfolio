import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-20 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-background/50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl mix-blend-multiply opacity-30" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 border border-border/50"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl leading-[1.1]"
        >
          Building Digital <br className="hidden md:block" />
          Experiences That <span className="text-primary relative inline-block">
            Matter
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 15 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Hi, I am a <span className="font-semibold text-foreground">Junior Web Developer</span> specializing in React, Laravel, PHP, and JavaScript. Currently coding awesome software at QuantumQore Technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full px-8 w-full sm:w-auto group"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <a 
            href="/Jahanzaib Resume.pdf" 
            download="Muhammad_Jahanzaib_Resume.pdf"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 w-full bg-background/50 backdrop-blur-sm"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
