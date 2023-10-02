import React, { useEffect, useState } from 'react';

import { APICall } from '../api';
import { ParaChainsInfo } from '../api/types';
import { AppContext } from '../contexts';


export interface AppContextProps {
  children: React.ReactNode;
}

type DataReady = {
  priceMap: boolean,
  paraChainsInfo: boolean,
};

export function AppStateProvider({children}: AppContextProps): React.ReactElement<AppContextProps> {
  const [dataReadyMap, setDataReadyMap] = useState<DataReady>({
    priceMap: false,
    paraChainsInfo: false,
  });
  const [priceMap, setPriceMap] = useState<Record<string, number>>({});
  const [paraChainsInfo, setParaChainsInfo] = useState<ParaChainsInfo>({
    polkadot: {},
    kusama: {}
  });

  useEffect(() => {
    APICall.fetchPrice(new Set<string>(['polkadot', 'kusama']))
      .then((rs) => {
        setPriceMap(rs.priceMap);
        setDataReadyMap((prev) => ({
          ...prev,
          priceMap: true
        }));
      });
  }, []);

  useEffect(() => {
    APICall.fetchParaChainInfo()
      .then((rs) => {
        setParaChainsInfo(rs);
        setDataReadyMap((prev) => ({
          ...prev,
          paraChainsInfo: true
        }));
      });
  }, []);

  return (
    <AppContext.Provider value={{
      isAppReady: dataReadyMap.priceMap && dataReadyMap.paraChainsInfo,
      priceMap,
      paraChainsInfo
    }}
    >
      {children}
    </AppContext.Provider>
  );
}
