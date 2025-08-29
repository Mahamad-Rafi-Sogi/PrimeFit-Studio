import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.primefitstudio.app',
  appName: 'primefit-studio',
  webDir: 'dist',
  server: {
    // Enable live reload during development
    // Comment out these lines for production builds
    url: 'http://localhost:5174',
    cleartext: true
  }
};

export default config;
