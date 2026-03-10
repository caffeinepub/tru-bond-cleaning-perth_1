/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        brand: {
          teal: "oklch(var(--brand-teal))",
          "teal-dark": "oklch(var(--brand-teal-dark))",
          "teal-light": "oklch(var(--brand-teal-light))",
          cream: "oklch(var(--brand-cream))",
          dark: "oklch(var(--brand-dark))",
        },
      },
      fontFamily: {
        display: ["'Cabinet Grotesk'", "'Bricolage Grotesque'", "sans-serif"],
        body: ["'Bricolage Grotesque'", "'Cabinet Grotesk'", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "0 2px 16px 0 oklch(0.63 0.14 185 / 0.08)",
        cta: "0 4px 24px 0 oklch(0.63 0.14 185 / 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
