### create react-vite project

npm create vite@latest $project_name

### install dependencies

npm i
npm install react@latest react-dom@latest
npm install tailwindcss @tailwindcss/vite

### set vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}",],
plugins: [react(),
tailwindcss(),
],
})

### add tailwindcss to index.css

@import "tailwindcss";

## import in main
