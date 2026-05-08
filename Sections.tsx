@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", sans-serif;
  
  --color-hydro-green: #37ff8b;
  --color-hydro-violet: #8e2de2;
  --color-hydro-black: #0a0a0a;
}

@layer base {
  body {
    @apply bg-hydro-black text-white selection:bg-hydro-green selection:text-hydro-black;
  }
}

/* Custom scrollbar for maximalist feel */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  @apply bg-hydro-black;
}
::-webkit-scrollbar-thumb {
  @apply bg-hydro-green/20 border-2 border-hydro-black;
}
::-webkit-scrollbar-thumb:hover {
  @apply bg-hydro-green/50;
}

