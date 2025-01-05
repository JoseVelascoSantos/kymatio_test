/// <reference types="vitest" />

import 'vite';

declare module 'vite' {
  interface UserConfig {
    test?: {
      environment?: string;
      globals?: boolean;
      setupFiles?: string;
    };
  }
}
