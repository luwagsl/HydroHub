import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { motion } from 'motion/react';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  varying vec2 vUv;

  void main() {
    vec2 st = vUv;
    float d = distance(st, uMouse);
    
    vec3 color1 = vec3(0.21, 1.0, 0.54); // Hydro Green
    vec3 color2 = vec3(0.55, 0.17, 0.88); // Hydro Violet
    
    float wave = sin(st.x * 10.0 + uTime * 2.0) * cos(st.y * 10.0 - uTime * 1.5);
    float glow = smoothstep(0.4, 0.0, d);
    
    vec3 finalColor = mix(color1, color2, st.y + wave * 0.2);
    finalColor += glow * color1 * 0.5;
    
    // Simple dithering effect in shader
    float dither = fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
    if(dither > 0.95) finalColor *= 1.2;
    
    gl_FragColor = vec4(finalColor * 0.8, 1.0);
  }
`;

const ShaderBackground = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  }), []);

  useFrame((state) => {
    const { clock, mouse: stateMouse } = state;
    const material = meshRef.current.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = clock.getElapsedTime();
    
    // Smooth mouse follow
    mouse.current.lerp(new THREE.Vector2(
      (stateMouse.x + 1) / 2,
      (stateMouse.y + 1) / 2
    ), 0.05);
    
    material.uniforms.uMouse.value.copy(mouse.current);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ShaderBackground />
        </Canvas>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 pointer-events-none">
        <div className="max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-display font-black leading-none tracking-tighter uppercase italic"
          >
            Hydro<br />
            <span className="text-hydro-green drop-shadow-[0_0_20px_rgba(55,255,139,0.5)]">Hub.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 flex flex-col md:flex-row md:items-center gap-8"
          >
            <p className="text-lg md:text-xl font-sans max-w-md text-white/80 leading-relaxed border-l-2 border-hydro-green pl-6">
              The premier communication network for school hydroponics labs. Connect, grow, and data-share across the globe.
            </p>
            
            <div className="pointer-events-auto">
              <Link to="/connect" className="px-8 py-4 bg-hydro-green text-hydro-black font-display font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform cursor-pointer inline-block">
                Join the Network
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58,115.15,114.16,115.25,172,109.1,234.31,102.5,286.58,74.5,321.39,56.44Z" fill="#0a0a0a"></path>
        </svg>
      </div>
    </section>
  );
}
