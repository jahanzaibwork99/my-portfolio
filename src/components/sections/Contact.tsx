import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thanks for reaching out! I will get back to you soon.");
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          <div className="bg-secondary/40 p-8 rounded-3xl border border-border/50 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Let's talk about everything!</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Don't like forms? Send me an email directly or find me on my social media platforms.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">Email</span>
                  <a href="mailto:jahanzaibwork99@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors break-all">
                    jahanzaibwork99@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">Phone</span>
                  <a href="tel:+1234567890" className="text-lg font-semibold hover:text-primary transition-colors">
                    +92 323 1700231
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">Location</span>
                  <span className="text-lg font-semibold">
                    Sargodha Punjab, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-card border border-border shadow-md flex flex-col gap-6 relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative">
              <h3 className="text-2xl font-bold mb-2">Send me a message</h3>
              <p className="text-sm text-muted-foreground">I typically respond within 1-2 business days.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                <Input id="name" placeholder="John Doe" required className="bg-background" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <Input id="email" type="email" placeholder="john@example.com" required className="bg-background" />
              </div>
            </div>

            <div className="flex flex-col gap-2 relative">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" placeholder="Frontend Developer Role" required className="bg-background" />
            </div>

            <div className="flex flex-col gap-2 relative">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea
                id="message"
                placeholder="Hi, I'd like to talk about..."
                className="min-h-[150px] resize-none bg-background"
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto relative group mt-2 self-start rounded-full px-8">
              Send Message
              <Send className="w-4 h-4 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
