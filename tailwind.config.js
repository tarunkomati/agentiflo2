/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "flowline-ink": "#4a3a57",
        "flowline-ink-dark": "#2e2337",
        "flowline-slate": "#6b6473",
        "flowline-blue": "#2f6bff",
        "flowline-blue-2": "#4b83ff",
        "flowline-blue-soft": "#cfe0ff",
        "flowline-blue-glow": "#a7c5ff",
        "flowline-lilac": "#c7b9ff",
        "flowline-line": "rgba(145, 155, 178, 0.25)",
        "flowline-card": "#f7f9ff",
        "flowline-white": "#ffffff",
        "flowline-bg": "#f4f7ff",
        "flowline-dark": "#0a0c12",
        "flowline-dark-2": "#0e1119",
        "flowline-dark-3": "#111622",
        "flowline-border-dark": "rgba(152, 162, 179, 0.18)",
      },
      boxShadow: {
        "soft-xl": "0 30px 60px rgba(85, 120, 190, 0.22)",
        "soft-lg": "0 20px 40px rgba(85, 120, 190, 0.18)",
        "soft-md": "0 12px 26px rgba(85, 120, 190, 0.16)",
        "soft-card": "0 18px 36px rgba(85, 120, 190, 0.14)",
        "pill": "0 6px 14px rgba(47, 107, 255, 0.18)",
        "dark-card": "0 24px 50px rgba(0, 0, 0, 0.55)",
      },
      borderRadius: {
        "flow-lg": "22px",
        "flow-xl": "28px",
      },
    },
  },
  plugins: [],
}
