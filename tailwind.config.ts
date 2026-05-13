import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#e0f2f1',
          DEFAULT: '#00897b',
          dark: '#004d40',
        }
      }
    },
  },
  plugins: [],
};
export default config;