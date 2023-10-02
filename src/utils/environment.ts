// Load all environment variables from .env file

import MobileDetect from 'mobile-detect';

export interface EnvironmentType {
  NODE_ENV: string;
  STATIC_ENDPOINT: string;
  SUBSCAN_KUSAMA_ENDPOINT: string;
  SUBSCAN_POLKADOT_ENDPOINT: string;
}
export const ENVIRONMENT: EnvironmentType = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  STATIC_ENDPOINT: process.env.STATIC_ENDPOINT || 'https://nft-minting-dev.subwallet.app',
  SUBSCAN_KUSAMA_ENDPOINT: process.env.SUBSCAN_KUSAMA_ENDPOINT || 'https://kusama.api.subscan.io/api/scan',
  SUBSCAN_POLKADOT_ENDPOINT: process.env.SUBSCAN_POLKADOT_ENDPOINT || 'https://polkadot.api.subscan.io/api/scan',
};

const detect = new MobileDetect(navigator.userAgent, 1200);

export const isAndroid = detect.os() === 'AndroidOS';
export const isIOS = detect.os() === 'iOS';
export const isMobile = isIOS || isAndroid;
