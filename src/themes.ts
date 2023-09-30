import {theme as SwReactUI} from '@subwallet/react-ui';
import {Web3LogoMap} from '@subwallet/react-ui/es/config-provider/context';
import derivative from '@subwallet/react-ui/es/theme/themes/dark';
import logoMap from '@subwallet/react-ui/es/theme/themes/logoMap';
import seedToken from '@subwallet/react-ui/es/theme/themes/seed';

import { GlobalToken, Theme } from './types';

// todo: will standardized logoMap later
const defaultLogoMap: Web3LogoMap = {
  ...logoMap
};

const currentToken = {
  ...seedToken,
  colorLink: '#E7087B',
  colorPrimary: '#E7087B',
  bodyFontWeight: '400',
  fontFamily: '\'Unbounded\', sans-serif',
};

export const appTheme: Theme = {
  id: 'dark',
  name: 'Dark',
  algorithm: SwReactUI.darkAlgorithm,
  token: derivative(currentToken) as GlobalToken,
  extendToken: {
    colorTitle: currentToken.colorPrimary,
    collectionImageSize: 480,
    nftImageSize: 480,
    mobileSize: '992px',
    mediumSize: '1200px',
    largeSize: '1600px',
  },
  logoMap: defaultLogoMap,
};
