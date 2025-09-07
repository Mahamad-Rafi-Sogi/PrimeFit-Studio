import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.primefitstudio.app',
  appName: 'PrimeFit Studio',
  webDir: 'dist',
  // Production configuration - comment out server section for production
  // server: {
  //   url: 'http://localhost:5174',
  //   cleartext: true
  // },
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
