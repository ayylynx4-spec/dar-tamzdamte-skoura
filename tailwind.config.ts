import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clay: "#2f2119",
        clayDeep: "#3a2920",
        sand: "#f4eadb",
        warm: "#d7b797",
        palm: "#6b7c52",
        stone: "#e8dfd4",
        cream: "#f7f2ea",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(20, 16, 13, 0.18)",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
