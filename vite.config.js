// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';



export default defineConfig({
  // Your other Vite configurations...
  
  // Example of conditionally using `document`:
  plugins: [
    {
      name: 'example-plugin',
      configureServer(server) {
        // This code runs in the Node.js environment
        // Ensure browser-specific code is only run in the browser
        if (typeof document !== 'undefined') {
          // Your browser-specific code here
        }
      }
    }
  ]
});


