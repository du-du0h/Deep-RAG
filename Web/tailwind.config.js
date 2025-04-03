/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6366f1', // 类似于图片中的紫色
        'light-bg': '#f1f5f9', // 浅蓝色背景
      }
    },
  },
  plugins: [],
} 