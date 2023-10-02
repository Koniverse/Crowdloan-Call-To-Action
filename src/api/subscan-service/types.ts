export interface SWError extends Error {
  code?: number;
  errorType: string;
  data?: unknown;
}

export interface SubscanRequest<T> {
  id: number,
  retry: number, // retry < 1 not start, retry === 0 start, retry > 0 number of retry
  status: 'pending' | 'running',
  run: () => Promise<T>;
  resolve: (value: T) => void;
  reject: (error?: any) => void;
}

export interface SubscanResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

export interface CrowdloanContributionItem {
  fund_id: string,
  para_id: number,
  contributed: string,
  block_num: number,
  block_timestamp: number,
  extrinsic_index: string,
  event_index: string,
  status: number,
  memo: string,
  fund_status: number,
  fund_event_index: string,
  unlocking_block: number,
  fund_auction_status: number
}

export interface CrowdloanContributionsResponse {
  count: number,
  list: null | CrowdloanContributionItem[],
  total: string
}
