import {ThemeConfig as _ThemeConfig, Web3LogoMap} from '@subwallet/react-ui/es/config-provider/context';
import { AliasToken as _AliasToken, GlobalToken as _GlobalToken } from '@subwallet/react-ui/es/theme/interface';

export type ThemeNames = 'dark';
export type ThemeConfig = _ThemeConfig;
export type AliasToken = _AliasToken;
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

export interface SwThemeConfig extends ThemeConfig {
  id: ThemeNames,
  name: string;

  generateExtraTokens: (token: Partial<AliasToken>) => ExtraToken;

  customTokens: (token: Partial<AliasToken>) => Partial<AliasToken>;
  logoMap: Web3LogoMap
}

export interface ThemeProps {
  theme: Theme;
  className?: string;
}

