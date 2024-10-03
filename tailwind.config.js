/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'], // Noto Sans를 기본 산세리프 폰트로 설정
      },
      colors: {
        customGray: '#AAAAAA', // 'customGray'라는 이름으로 커스텀 색상 추가
        customSearchGray: '#EEEEEE',
      },
    },
  },
  plugins: [],
}