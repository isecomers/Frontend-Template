/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1677ff",
        animationBorder: "#45c4e3",
        animationBorder2: "#28c3fc",
        animationBorder3: "#4187a1",
        panel: "#1b2a47",
      },
      keyframes: {
        loginKeyframe: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        loginKeyframe2: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        login: "loginKeyframe 6s linear infinite",
        login2: "loginKeyframe2 4s linear infinite ",
        login3: "loginKeyframe2 10s linear infinite ",
      },
      borderRadius: {
        animationBorderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%",
      },
    },
  },
  plugins: [],
};
