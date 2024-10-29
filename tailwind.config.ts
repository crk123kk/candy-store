import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: {
          bg: "#ef8b99",
        },
      },
    },
    screens: {
      phone: "640px",
      // => @media (min-width: 640px) { ... }

      pad: "768px",
      // => @media (min-width: 768px) { ... }

      pc: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};
export default config;
