import { ThemeConfig as _ThemeConfig, Web3LogoMap } from '@subwallet/react-ui/es/config-provider/context';
import { GlobalToken as _GlobalToken } from '@subwallet/react-ui/es/theme/interface';

export type ThemeNames = 'dark';
export type ThemeConfig = _ThemeConfig;
export type GlobalToken = _GlobalToken;

export interface ExtraToken {
  colorTitle: string,
  collectionImageSize: number,
  nftImageSize: number,
  mobileSize: string,
  mediumSize: string,
  largeSize: string,
}

export type Theme = {
  id: ThemeNames;
  name: string;
  algorithm: ThemeConfig['algorithm'];
  token: GlobalToken;
  logoMap: Web3LogoMap,
  extendToken: ExtraToken,
};

export interface ThemeProps {
  theme: Theme;
  className?: string;
}


