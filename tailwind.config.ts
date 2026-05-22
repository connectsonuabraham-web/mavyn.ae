import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // BCG-inspired palette: white backgrounds, forest green accent
        bg: {
          DEFAULT: "#E0F2E0",
          deep: "#D4ECD4",
          card: "rgba(224, 242, 224, 0.95)"
        },
        cyan: {
          brand: "#147B58" // BCG forest green (Pantone 341 C)
        },
        blue: {
          brand: "#147B58"
        },
        ink: {
          DEFAULT: "#212427",
          muted: "#6B7280"
        },
        border: {
          subtle: "rgba(20, 123, 88, 0.22)"
        }
      },
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          '"Liberation Sans"',
          "system-ui",
          "sans-serif"
        ],
        display: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          '"Liberation Sans"',
          "system-ui",
          "sans-serif"
        ]
      },
      letterSpacing: {
        widest2: "0.32em"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(20,123,88,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,123,88,0.06) 1px, transparent 1px)"
      },
      boxShadow: {
        glow:
          "0 0 0 1px rgba(20, 123, 88, 0.4), 0 12px 50px -10px rgba(20, 123, 88, 0.4)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        loaderLine: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" }
        },
        diamondPulse: {
          "0%,100%": { opacity: "1", transform: "rotate(45deg) scale(1)" },
          "50%": { opacity: "0.6", transform: "rotate(45deg) scale(1.2)" }
        }
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        loaderLine: "loaderLine 1.4s ease-out forwards",
        diamondPulse: "diamondPulse 2.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
