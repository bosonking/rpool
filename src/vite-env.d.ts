/// <reference types="vite/client" />

interface ImportMetaEnv {
  PUBLIC_API_URL: string;
  PUBLIC_STRATUM_HOST: string;
  PUBLIC_STRATUM_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
