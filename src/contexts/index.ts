import { createContext } from 'react';

import { ParaChainsInfo } from '../api/types';


export interface AppContextType {
  isAppReady: boolean,
  priceMap: Record<string, number>,
  paraChainsInfo: ParaChainsInfo;
}

export const AppContext = createContext<AppContextType>({
  isAppReady: false,
  priceMap: {},
  paraChainsInfo: {
    polkadot: {},
    kusama: {}
  }
});
