import React from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HowItWorks() {
  const steps = [
    { title: "Protocol Connection", desc: "Initialize your lab's digital twin on our secure enterprise mesh." },
    { title: "Sensor Handshake", desc: "Authenticate real-time pH, EC, and temp sensors with end-to-end encryption." },
    { title: "Peer Collaboration", desc: "Broadcast your nutrient formulas and lighting schedules to the school grid." },
    { title: "Yield Genesis", desc: "Monitor localized growth patterns against global benchmarks." },
  ];

  return (
    <section className="py-24 bg-hydro-black">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase text-white tracking-tighter">
            The <span className="text-hydro-green italic underline decoration-wavy underline-offset-8">Lifecycle</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {steps.map((step, idx) => (
            <div key={idx} className="p-10 border-white/10 md:border-r last:border-r-0 border-b lg:border-b-0 group hover:bg-hydro-green transition-all duration-500 cursor-default">
              <span className="text-4xl font-display font-black text-white/10 group-hover:text-hydro-black/20 transition-colors mb-8 block">0{idx + 1}</span>
              <h3 className="text-xl font-display font-bold text-white group-hover:text-hydro-black mb-4 uppercase">{step.title}</h3>
              <p className="text-white/50 group-hover:text-hydro-black/80 transition-colors leading-relaxed uppercase text-xs font-medium tracking-tight">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-hydro-black pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
        {/* Large Decorative Text */}
        <div className="absolute -bottom-10 -left-10 text-[15vw] font-display font-black text-white/[0.02] uppercase pointer-events-none whitespace-nowrap">
            ENTERPRISE HYDROPONICS
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-black uppercase italic tracking-tighter">
                <Link to="/">
                    Hydro<span className="text-hydro-green">Hub.</span>
                </Link>
            </h2>
            <p className="text-white/40 max-w-sm leading-relaxed">
                Empowering the next generation of urban farmers through hyper-connected enterprise collaboration. Sustainable. Scalable. School-first.
            </p>
            <div className="flex gap-4">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="p-3 border border-white/10 rounded-full hover:bg-hydro-green hover:text-hydro-black transition-all">
                        <Icon size={18} />
                    </a>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
                <h4 className="font-display font-bold uppercase text-hydro-green text-sm">Platform</h4>
                <ul className="space-y-2 text-white/50 text-sm italic">
                    <li><Link to="/registry" className="hover:text-white transition-colors">Global Garden</Link></li>
                    <li><Link to="/dashboard" className="hover:text-white transition-colors">Lab Telemetry</Link></li>
                    <li><Link to="/registry" className="hover:text-white transition-colors">School Registry</Link></li>
                </ul>
            </div>
            <div className="space-y-4">
                <h4 className="font-display font-bold uppercase text-hydro-green text-sm">Support</h4>
                <ul className="space-y-2 text-white/50 text-sm italic">
                    <li><button className="hover:text-white transition-colors cursor-help">Developer API</button></li>
                    <li><button className="hover:text-white transition-colors cursor-help">Grant Programs</button></li>
                    <li><button className="hover:text-white transition-colors cursor-help">Enterprise Docs</button></li>
                </ul>
            </div>
          </div>

          <div className="bg-[#111] p-8 border border-white/10 relative group">
             <h4 className="font-display font-black uppercase text-white mb-6 flex items-center gap-2">
                <Mail size={18} className="text-hydro-green" />
                Join the Pipeline
             </h4>
             <div className="relative">
                <input 
                    type="email" 
                    placeholder="ENTER SCHOOL EMAIL"
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-hydro-green transition-colors font-mono text-sm"
                />
                <button className="absolute right-2 top-2 p-1 text-hydro-green hover:translate-x-1 transition-transform">
                    <ArrowRight />
                </button>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">
            <p>© 2026 HYDROHUB ENTERPRISE. ALL PROTOCOLS RESERVED.</p>
            <div className="flex gap-8">
                <a href="#">Security Protocol</a>
                <a href="#">Privacy Mesh</a>
                <a href="#">Legal Core</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
