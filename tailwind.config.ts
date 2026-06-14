import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C0E15",
        foreground: "#131620",
        primary: "#2DD4BF",
        border: "#FFFFFF12",
        sidebar: {
          DEFAULT: "#10121A",
          border: "#FFFFFF0D",
          "item-inactive": "#8B92A8",
          "item-active": "#CBD5E1",
          active: "#1A2E2A"
          //   foreground: "hsl(var(--sidebar-foreground))",
          //   primary: "hsl(var(--sidebar-primary))",
          //   "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          //   accent: "hsl(var(--sidebar-accent))",
          //   "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          //   ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, #131620 0%, #1A2E2A 100%)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
