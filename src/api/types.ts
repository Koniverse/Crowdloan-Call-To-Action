import { CrowdloanContributionItem } from './subscan-service/types';

export interface CrowdloanContributions {
  polkadot: CrowdloanContributionItem[],
  kusama: CrowdloanContributionItem[]
}

export interface CoinGeckoItem {
  id: string,
  name: string,
  current_price: number,
  price_change_24h: number,
  symbol: string
}

export interface PriceJson {
  ready?: boolean,
  currency: string,
  priceMap: Record<string, number>,
  price24hMap: Record<string, number>
}

export interface ParaChainsInfo {
  polkadot: Record<string, string>,
  kusama: Record<string, string>
}
