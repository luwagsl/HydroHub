import React from 'react';
import { motion } from 'motion/react';

interface TemplatePageProps {
  title: string;
  subtitle: string;
  content?: React.ReactNode;
}

export function TemplatePage({ title, subtitle, content }: TemplatePageProps) {
  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 border-l-4 border-hydro-green pl-8"
      >
        <h1 className="text-6xl md:text-8xl font-display font-black uppercase text-white tracking-tighter leading-none mb-4">
          {title}<span className="text-hydro-green">.</span>
        </h1>
        <p className="text-white/60 text-xl font-sans max-w-2xl italic">
          {subtitle}
        </p>
      </motion.div>

      {content ? (
        content
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 h-64 flex flex-col justify-end group hover:border-hydro-green transition-all cursor-wait">
                    <div className="text-4xl font-display font-black text-white/10 group-hover:text-hydro-green/20 mb-4 uppercase">Data_Point_{i}</div>
                    <div className="h-1 w-12 bg-white/20 group-hover:bg-hydro-green transition-all mb-4"></div>
                    <p className="text-white/40 uppercase text-[10px] font-bold tracking-widest">Protocol Encrypted_Segment</p>
                </div>
            ))}
        </div>
      )}
    </div>
  );
}
