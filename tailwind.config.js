/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#001838', deep: '#000E21', mid: '#002348', 60: '#002B5C', 40: '#1A3A5C', 20: '#D0D9E4' },
        cyan: { DEFAULT: '#00C1FF', dark: '#00A3D6', 90: '#00ADDE', 80: '#009AC5', tint: '#E0F7FF', ultra: '#EBF9FF' },
        turmeric: { DEFAULT: '#B8860B', bright: '#D4A017', dark: '#5C3A00', tint: '#FDF3DC', ultra: '#FFFDF8' },
        cloud: '#F5F7FA',
        slate: '#4A5F75',
        muted: '#7A8FA6',
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
