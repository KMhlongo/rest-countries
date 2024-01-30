import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Nunito Sans", sans-serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'DarkModeBg': 'hsl(207, 26%, 17%)',
        'DarkModeElements': 'hsl(209, 23%, 22%)',
        'LightModeText': 'hsl(200, 15%, 8%)',
        'LightModeInput': 'hsl(0, 0%, 52%)',
        'LightModeBg': 'hsl(0, 0%, 98%)',
        'LightModeElements': 'hsl(0, 0%, 100%)',
        'DarkModeText': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
export default config;