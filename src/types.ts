export type ProjectType = 'project' | 'tooling' | 'gaming' | 'nft-collection' ;

export type ProjectStatus = 'coming soon' | 'waitlist' | 'live';

export type Native = boolean | undefined;

// Add more tags as needed
export type Tag = 
| 'AMM' 
| 'NFT' 
| 'DeFi' 
| 'DAO' 
| 'L2' 
| 'DEX'
| 'Wallet' 
| 'Gaming'
| 'Bridge' 
| 'Yield' 
| 'Staking' 
| 'Oracles' 
| 'Identity' 
| 'AI'
| 'Waifu'
| 'Casino'
| 'Interoperability' 
| 'Token API'
| 'NFT API'
| 'AA'
| 'RPC'
| 'Indexing'
| 'Data'
| 'Aggregator'
| 'Earn'


export interface Project {
  type: ProjectType;
  name: string;
  blurb: string; // 50 words max
  logo: string; // path to square 250x250 image
  banner: string; // path to 1200x600 image
  status: ProjectStatus; // project status: coming soon, waitlist, or live
  x?: string; // X url
  website?: string; // website url
  docs?: string; // documentation url
  tags: Tag[]; // project tags for filtering/categorization
  native?: Native; // is the project native to RISE -> undefined should default to false
}
