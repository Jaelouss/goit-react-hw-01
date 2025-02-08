import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const base =
  process.env.NODE_ENV === 'production' && process.env.VERCEL !== '1'
    ? '/goit-react-hw-01/'
    : '/';

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
