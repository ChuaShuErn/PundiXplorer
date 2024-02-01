export interface ValidatorResponse {
  validators: Validator[];
  pagination: Pagination;
}

export interface Validator {
  operator_address: string;
  consensus_pubkey: ConsensusPublicKey;
  jailed: boolean;
  status: string;
  tokens: string;
  delegator_shares: string;
  description: Description;
  unbonding_height: string;
  unbonding_time: string;
  commission: Commission;
  min_self_delegation: string;
}

export interface ConsensusPublicKey {
  "@type": string;
  key: string;
}

export interface Description {
  moniker: string;
  identity: string;
  website: string;
  security_contact: string;
  details: string;
}

export interface Commission {
  commission_rates: CommissionRates;
  update_time: string;
}

export interface CommissionRates {
  rate: string;
  max_rate: string;
  max_change_rate: string;
}

export interface Pagination {
  next_key: null | string;
  total: string;
}

export interface CommissionResponse {
  commission: CommissionDetails;
}

export interface CommissionDetails {
  commission: CommissionEntry[];
}

export interface CommissionEntry {
  denom: string;
  amount: string;
}

export interface OutstandingRewardsResponse {
  rewards: {
    rewards: OutstandingReward[];
  };
}

export interface OutstandingReward {
  denom: string;
  amount: string;
}
