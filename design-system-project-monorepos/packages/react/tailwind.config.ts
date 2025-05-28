/** @type {import('tailwindcss').Config} */
export default {
  presets: [await import("@thanatos/foundation/lib/tdp.config")],
  content: ["./src/**/*.{html,js,tsx,ts}"],
  plugins: [],
};
