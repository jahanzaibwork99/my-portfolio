import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Junior Web Developer',
    company: 'QuantumQore Technologies',
    location: 'Remote / On-site',
    duration: 'Oct 2025 - Present',
    description: [
      'Built high-performance, SEO-optimized web applications using Next.js, React.js, and Tailwind CSS.',
      'Developed interactive 3D experiences and smooth animations using Three.js Fiber and Framer Motion.',
      'Architected robust backend APIs with Laravel and utilized Mockoon for efficient API mocking and testing.',
      'Leveraged Shadcn UI and Radix UI to build accessible, premium-grade component libraries.',
    ],
    skills: ['Next.js', 'React', 'Laravel', 'Tailwind CSS', 'Shadcn UI', 'Three.js Fiber', 'Framer Motion', 'Mockoon'],
  },
  {
    role: 'Web Developer Intern',
    company: 'QuantumQore Technologies',
    location: 'Remote / On-site',
    duration: 'July 2025 - Sep 2025',
    description: [
      'Assisted senior developers in building and optimizing e-commerce web applications.',
      'Resolved frontend UI bugs and improved legacy PHP codebases for better maintainability.',
      'Gained hands-on experience with modern Javascript frameworks and MVC architecture principles.',
    ],
    skills: ['PHP', 'JavaScript', 'HTML/CSS', 'MySQL'],
  },
];

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      subtitle="My professional journey and roles I have shaped."
      className="bg-secondary/30"
    >
      <div className="max-w-4xl mx-auto mt-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12 last:mb-0"
          >
            {/* Timeline dots */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary absolute left-0 md:left-1/2 -translate-x-1/2 shadow-sm text-primary-foreground z-10 shrink-0">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Experience Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex flex-col gap-2 mb-4">
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>

                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground font-medium">
                  <span className="flex items-center gap-1 text-primary">
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-2 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex gap-2">
                    <span className="text-primary mt-1 md:mt-1.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-secondary/50">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
