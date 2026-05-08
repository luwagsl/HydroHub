import React from 'react';
import { motion } from 'motion/react';
import { Sprout, BarChart3, Globe, School } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

const producers = [
  { school: "Tech High Lab", crop: "Basil Genovese", status: "Harvesting", tech: "NFT System" },
  { school: "Oakridge Academy", crop: "Strawberries", status: "Flowering", tech: "Deep Water Culture" },
  { school: "Metro Magnet", crop: "Kale Curled", status: "Seedlings", tech: "Aeroponics" },
  { school: "Vertical Charter", crop: "Microgreens", status: "Packaged", tech: "Fogponics" },
];

export function GlobalGarden() {
  return (
    <section id="garden" className="py-24 bg-hydro-black relative overflow-hidden">
      {/* Background Dithering Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#37ff8b 1px, transparent 0)`, backgroundSize: '20px 20px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase text-white tracking-tighter">
              Global <span className="text-hydro-green">Garden</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-md">Real-time telemetry from partner schools across the enterprise network.</p>
          </div>
          <Link to="/registry" className="px-6 py-2 border-2 border-hydro-green text-hydro-green hover:bg-hydro-green hover:text-hydro-black transition-colors font-display font-bold uppercase tracking-wider text-sm inline-block">
            View Live Feed
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {producers.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#111] border border-white/10 p-8 hover:border-hydro-green/50 transition-all cursor-crosshair"
            >
              {/* Dither Texture Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-hydro-green pointer-events-none"
                   style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', mixBlendMode: 'overlay' }}>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-hydro-green/20 group-hover:text-hydro-green transition-colors">
                  <Sprout size={24} />
                </div>
                <div className="px-2 py-1 bg-hydro-green/10 text-hydro-green text-[10px] font-bold uppercase tracking-tighter rounded">
                  {item.status}
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-1">{item.crop}</h3>
              <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
                <School size={14} />
                <span>{item.school}</span>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono">
                <span className="text-white/40 italic">{item.tech}</span>
                <Globe size={16} className="text-white/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GrowLog() {
  return (
    <section id="log" className="py-24 bg-gradient-to-b from-hydro-black via-[#0f0f0f] to-hydro-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-hydro-green/10 blur-3xl opacity-50 rounded-full"></div>
            <div className="relative bg-[#111] border border-white/10 p-1 rounded-2xl overflow-hidden aspect-video shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-hydro-black/80 flex items-center justify-center">
                 <div className="text-center group cursor-pointer">
                    <div className="w-20 h-20 bg-hydro-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <BarChart3 className="text-hydro-black ml-1" />
                    </div>
                    <span className="font-display font-bold uppercase tracking-widest text-sm">Initialize Data Stream</span>
                 </div>
              </div>
              {/* Fake UI elements */}
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div>
              <span className="px-3 py-1 bg-hydro-violet/20 text-hydro-violet text-xs font-bold uppercase tracking-widest mb-4 inline-block border border-hydro-violet/30">
                Data Sovereignty
              </span>
              <h2 className="text-5xl md:text-6xl font-display font-black uppercase text-white leading-none">
                Log Your <span className="italic text-hydro-green">Harvest.</span>
              </h2>
              <p className="text-white/60 mt-6 leading-relaxed max-w-xl">
                Our enterprise-grade logging system ensures precise yield tracking across disparate lab environments. Automated telemetry syncing via standard MQTT and REST protocols.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 border border-white/10 group hover:border-hydro-green transition-all">
                <h4 className="text-hydro-green font-display font-bold uppercase text-xs mb-2 tracking-widest">Yield Accuracy</h4>
                <p className="text-2xl font-display font-black text-white">99.8%</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 group hover:border-hydro-green transition-all">
                <h4 className="text-hydro-violet font-display font-bold uppercase text-xs mb-2 tracking-widest">Global Sync</h4>
                <p className="text-2xl font-display font-black text-white">&lt; 50ms</p>
              </div>
            </div>

            <Link to="/dashboard" className="w-full py-4 bg-white text-hydro-black font-display font-extrabold uppercase tracking-widest hover:bg-hydro-green transition-colors text-center inline-block">
              Access Lab Dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
