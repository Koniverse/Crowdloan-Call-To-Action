import fetch from 'cross-fetch';

import { SubscanService } from './subscan-service';
import { CoinGeckoItem, CrowdloanContributions, ParaChainsInfo, PriceJson } from './types';

const subscanService = new SubscanService();

export const APICall = {
  fetchContributions: async (address: string): Promise<CrowdloanContributions> => {
    const polkadotResponse = await subscanService.getCrowdloanContributions('polkadot', address);
    const kusamaResponse = await subscanService.getCrowdloanContributions('kusama', address);

    return {
      polkadot: polkadotResponse.list || [],
      kusama: kusamaResponse.list || [],
    };
  },

  fetchPrice: async (priceIds: Set<string>, currency = 'usd'): Promise<PriceJson> => {
    try {
      const idStr = Array.from(priceIds).join(',');

      const rs = await fetch(`https://chain-data.subwallet.app/api/price/get?ids=${idStr}`, {
        method: 'GET',
      });

      const jsonData = await rs.json() as Array<CoinGeckoItem> || [];

      const priceMap: Record<string, number> = {};
      const price24hMap: Record<string, number> = {};

      jsonData.forEach((val) => {
        const currentPrice = val.current_price || 0;
        const price24h = currentPrice - (val.price_change_24h || 0);

        priceMap[val.id] = currentPrice;
        price24hMap[val.id] = price24h;
      });

      return {
        currency,
        priceMap,
        price24hMap
      } as PriceJson;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  //todo: upload this to static-content
  fetchParaChainInfo: async (): Promise<ParaChainsInfo> => {
    return {
      'polkadot': {
        '1000': 'statemint',
        '1001': 'collectives',
        '1002': 'bridgeHubPolkadot',
        '2000': 'acala',
        '2002': 'clover',
        '2004': 'moonbeam',
        '2006': 'astar',
        '2007': 'kapex',
        '2008': 'crust',
        '2011': 'equilibrium_parachain',
        '2012': 'parallel',
        '2013': 'litentry',
        '2015': 'integriteePolkadot',
        '2019': 'composableFinance',
        '2021': 'efinity',
        '2026': 'nodle',
        '2028': 'ajunaPolkadot',
        '2030': 'bifrost_dot',
        '2031': 'centrifuge',
        '2032': 'interlay',
        '2034': 'hydradx_main',
        '2035': 'phala',
        '2037': 'unique_network',
        '2043': 'origintrail',
        '2046': 'darwinia2',
        '2048': 'bitgreen',
        '2052': 'kylinNetwork',
        '2091': 'frequency',
        '2092': 'zeitgeist',
        '2093': 'hashedNetwork',
        '2094': 'pendulum',
        '2101': 'subsocial_x'
      },
      'kusama': {
        '1000': 'statemine',
        '1001': 'encointer',
        '1002': 'bridgeHubKusama',
        '2000': 'karura',
        '2001': 'bifrost',
        '2004': 'khala',
        '2007': 'shiden',
        '2011': 'sora_ksm',
        '2012': 'shadow',
        '2015': 'integritee',
        '2016': 'sakura',
        '2023': 'moonriver',
        '2024': 'genshiro',
        '2048': 'robonomics',
        '2084': 'calamari',
        '2085': 'heiko',
        '2086': 'kilt',
        '2087': 'picasso',
        '2088': 'altair',
        '2090': 'basilisk',
        '2092': 'kintsugi',
        '2095': 'quartz',
        '2096': 'pioneer',
        '2102': 'pichiu',
        '2105': 'crabParachain',
        '2106': 'litmus',
        '2107': 'kico',
        '2110': 'mangatax_para',
        '2113': 'kabocha',
        '2114': 'turing',
        '2115': 'dorafactory',
        '2116': 'tanganika',
        '2118': 'listen',
        '2119': 'bajun',
        '2121': 'imbue_network',
        '2123': 'gmdie',
        '2124': 'amplitude',
        '2125': 'tinkernet',
        '2222': 'ipci',
        '2227': 'riodefi',
        '2232': 'luhnNetwork',
        '2241': 'krest_network'
      }
    };
  }
};
