// tailwind.config.cjs
module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte,html}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#1A2A6C", // deep navy
        "brand-accent": "#E8A020", // gold
        "brand-bg": "#FAF8F5", // warm cream
        "brand-divider": "#C8C0B4", // warm grey
        "brand-text": "#2C2C2A" // charcoal
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
