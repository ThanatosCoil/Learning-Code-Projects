/** @type {import('tailwindcss').Config} */
module.exports = {
  // Делаем даркмод
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Здесь без extend можно переписывать существующие ютилити в tailwind.
    // Важно! При переписывании, если модифицируешь только одно ютилити в screen например, то нужно указывать и все старые, иначе они потрутся
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      // Сюда закидываем если хотим переписать какое то значение утилити или добавить новое
      colors: {
        newcolor: {
          // Добавили цвет с именем newcolor и двумя его видами 100 и 900
          100: "#49e659",
          900: "#434252",
        },
      },
    },
  },
  plugins: [],
};
