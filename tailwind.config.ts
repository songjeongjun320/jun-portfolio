import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-teal': '#4fd1c5',
        'custom-green': '#9ae6b4',
        'custom-blue': '#4299e1',
        'custom-purple': '#b794f4',
        'custom-pink': '#fed7e2',
        'custom-red': '#f56565',
        'custom-indigo': '#c3dafe',
        'custom-yellow': '#fbd38d',
        'custom-orange': '#feebc8',
      }
    }
  },
  plugins: [],
}

export default config
