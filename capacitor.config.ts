import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.primefitstudio.app',
  appName: 'primefit-studio',
  webDir: 'dist',
  // Production configuration - optimized for 500+ users
  server: {
    // Enable live reload during development
    // Comment out these lines for production builds
    url: 'http://localhost:5174',
    cleartext: true
  },
  plugins: {
    // Performance optimizations
    SplashScreen: {
      launchShowDuration: 1000,
      launchAutoHide: true,
      backgroundColor: "#1e293b",
      androidSplashResourceName: "splash",
      showSpinner: false
    },
    // Enable background mode for better performance
    BackgroundMode: {
      enabled: false
    }
  }
};

export default config;
