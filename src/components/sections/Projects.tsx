import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Full-Stack eCommerce Platform',
    description: 'A comprehensive online store featuring user authentication, product catalog, shopping cart, and secure checkout integration. Built with a scalable architecture tailored for high traffic.',
    techStack: ['React', 'Laravel', 'Tailwind CSS', 'MySQL', 'Stripe API'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'Integrated ERP Modules',
    description: 'Developed and integrated core enterprise modules: Auth, EMS, HRMS, PMS, CMS, and FMS. focused on streamlining enterprise workflows, data management, and operational efficiency.',
    techStack: ['PHP', 'Laravel', 'JavaScript', 'Bootstrap', 'MySQL'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'Portfolio Website v2',
    description: 'The modern, responsive developer portfolio you are currently viewing. Built to showcase projects with smooth animations and a premium glassmorphism aesthetic.',
    techStack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'ShadCN UI'],
    githubLink: '#',
    liveLink: '#',
  },
];

export function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Some of the notable applications I've built and scaled."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="flex h-full group"
          >
            <Card className="flex flex-col flex-1 bg-card hover:bg-secondary/20 transition-all duration-300 border-border/50 hover:border-primary/50 shadow-sm hover:shadow-xl hover:-translate-y-2 overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Folder className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`GitHub Repo for ${project.title}`}>
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`Live Link for ${project.title}`}>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3 mt-2 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1" />

              <CardFooter className="pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="font-mono text-xs bg-background/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="flex justify-center mt-12"
      >
        <Button variant="outline" size="lg" className="rounded-full px-8 hover:bg-primary hover:text-primary-foreground border-primary/20">
          View All Projects on GitHub
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
