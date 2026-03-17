import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const education = [
  {
    degree: 'BS Information Technology (BSIT)',
    institution: 'University of Sargodha',
    period: '2021 – 2025',
    score: 'Grade: A',
    icon: <GraduationCap className="w-10 h-10 text-primary" />,
  },
  {
    degree: 'ICS (Intermediate in Computer Science)',
    institution: 'The Reader College Sargodha',
    period: '2019-2021',
    score: 'Grade: A+',
    icon: <BookOpen className="w-10 h-10 text-indigo-400" />,
  },
  {
    degree: 'Matriculation',
    institution: 'Govt. High School Lakseen',
    period: '2017-2019',
    score: 'Grade: A+',
    icon: <School className="w-10 h-10 text-sky-400" />,
  },
];

export function Education() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="My academic background and milestones."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="flex h-full"
          >
            <Card className="flex-1 border border-border/50 shadow-sm bg-gradient-to-br from-card to-secondary/20 hover:border-primary/50 transition-colors cursor-default">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="mb-4 p-4 rounded-full bg-background border border-border/50 shadow-inner">
                  {edu.icon}
                </div>
                <CardTitle className="leading-tight mb-2 tracking-tight">{edu.degree}</CardTitle>
                <CardDescription className="text-base text-primary/80 font-medium">
                  {edu.institution}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-2">
                <p className="text-muted-foreground font-mono text-sm mb-2">{edu.period}</p>
                <div className="inline-flex px-3 py-1 mt-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  {edu.score}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
