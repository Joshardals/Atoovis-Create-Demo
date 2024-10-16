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
        skyAqua: "#47c6cf",
        deepTeal: "#3fa7d6",
        tropicalBlue: "#77D1E0",

        charcoal: "#333333",
        silverGray: "#BBB",
      },
    },
  },
  plugins: [],
};
export default config;
