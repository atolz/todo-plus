/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroud: "hsl(var(--background))",
        muted: "hsl(var(--muted))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        secondary: "hsl(var(--secondary))",
        friendly: "hsl(var(--friendly))",
        destructive: "hsl(var(--destructive))",
        warn: "hsl(var(--warn))",
        input: "hsl(var(--input))",
      },
    },
  },
  plugins: [],
};
