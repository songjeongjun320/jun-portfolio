import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ], // 애플 스타일 기본 폰트
      },
      colors: {
        black: '#000000', // 애플 스타일 배경색
        white: '#FFFFFF', // 애플 스타일 글씨색
        gray: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }, // 중립적인 회색 팔레트
      },
      letterSpacing: {
        tight: '-0.02em', // 애플 스타일의 헤드라인 글씨 간격
        normal: '-0.01em', // 본문 글씨 간격
      },
      lineHeight: {
        normal: '1.6', // 본문 줄 간격
        heading: '1.4', // 헤딩 줄 간격
      },
    },
  },
  plugins: [],
};

export default config;
