import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { motion } from 'framer-motion';
import { Layers, Server, PenTool, Database } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layers className="w-6 h-6 text-blue-500" />,
    skills: ['React.js', 'Next.js','JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3','shadcn/ui','Framer Motion','three.js fiber'],
  },
  {
    title: 'Backend Development',
    icon: <Server className="w-6 h-6 text-green-500" />,
    skills: ['PHP', 'Laravel', 'RESTful APIs', 'MVC Architecture', 'Authentication', 'Session Management'],
  },
  {
    title: 'Database & Data',
    icon: <Database className="w-6 h-6 text-purple-500" />,
    skills: ['MySQL', 'Eloquent ORM', 'Database Design', 'Query Optimization', 'JSON'],
  },
  {
    title: 'Tools & Workflows',
    icon: <PenTool className="w-6 h-6 text-orange-500" />,
    skills: ['Git', 'GitHub', 'Postman','Mockoon', 'VS Code', 'Figma', 'Composer', 'NPM'],
  },
];

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Technical Expertise"
      subtitle="A comprehensive overview of my current tech stack and the tools I use daily."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 md:p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary/50 rounded-2xl">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full cursor-default hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
