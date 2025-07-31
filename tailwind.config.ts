import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        cultura: {
          purple: {
            50: "rgb(var(--cultura-purple-50))",
            100: "rgb(var(--cultura-purple-100))",
            200: "rgb(var(--cultura-purple-200))",
            300: "rgb(var(--cultura-purple-300))",
            400: "rgb(var(--cultura-purple-400))",
            500: "rgb(var(--cultura-purple-500))",
            600: "rgb(var(--cultura-purple-600))",
            700: "rgb(var(--cultura-purple-700))",
            800: "rgb(var(--cultura-purple-800))",
            900: "rgb(var(--cultura-purple-900))",
          },
          pink: {
            50: "rgb(var(--cultura-pink-50))",
            100: "rgb(var(--cultura-pink-100))",
            200: "rgb(var(--cultura-pink-200))",
            300: "rgb(var(--cultura-pink-300))",
            400: "rgb(var(--cultura-pink-400))",
            500: "rgb(var(--cultura-pink-500))",
            600: "rgb(var(--cultura-pink-600))",
            700: "rgb(var(--cultura-pink-700))",
            800: "rgb(var(--cultura-pink-800))",
            900: "rgb(var(--cultura-pink-900))",
          },
          orange: {
            50: "rgb(var(--cultura-orange-50))",
            100: "rgb(var(--cultura-orange-100))",
            200: "rgb(var(--cultura-orange-200))",
            300: "rgb(var(--cultura-orange-300))",
            400: "rgb(var(--cultura-orange-400))",
            500: "rgb(var(--cultura-orange-500))",
            600: "rgb(var(--cultura-orange-600))",
            700: "rgb(var(--cultura-orange-700))",
            800: "rgb(var(--cultura-orange-800))",
            900: "rgb(var(--cultura-orange-900))",
          },
          blue: {
            50: "rgb(var(--cultura-blue-50))",
            100: "rgb(var(--cultura-blue-100))",
            200: "rgb(var(--cultura-blue-200))",
            300: "rgb(var(--cultura-blue-300))",
            400: "rgb(var(--cultura-blue-400))",
            500: "rgb(var(--cultura-blue-500))",
            600: "rgb(var(--cultura-blue-600))",
            700: "rgb(var(--cultura-blue-700))",
            800: "rgb(var(--cultura-blue-800))",
            900: "rgb(var(--cultura-blue-900))",
          },
          neutral: {
            50: "rgb(var(--cultura-neutral-50))",
            100: "rgb(var(--cultura-neutral-100))",
            200: "rgb(var(--cultura-neutral-200))",
            300: "rgb(var(--cultura-neutral-300))",
            400: "rgb(var(--cultura-neutral-400))",
            500: "rgb(var(--cultura-neutral-500))",
            600: "rgb(var(--cultura-neutral-600))",
            700: "rgb(var(--cultura-neutral-700))",
            800: "rgb(var(--cultura-neutral-800))",
            900: "rgb(var(--cultura-neutral-900))",
          }
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
