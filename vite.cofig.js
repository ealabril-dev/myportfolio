import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export defaut defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_PATH || "/myportfolio",
})
 