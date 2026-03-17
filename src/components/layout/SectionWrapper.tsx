import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = '',
  containerClassName = '',
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 md:py-32 relative ${className}`}>
      <div className={`container mx-auto px-6 md:px-12 ${containerClassName}`}>
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center space-y-4 mb-16"
          >
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                {subtitle}
              </p>
            )}
            <div className="h-1 w-20 bg-primary rounded-full mt-6" />
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}
