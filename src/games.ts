import { Project } from "./types";

export const GAMES: Project[] = [
  {
    type: 'gaming',
    name: 'For The Kingdom',
    blurb: "For The Kingdom is a web based MMORPG with a player driven economy and fully onchain gameplay. Players can risk tokens, create and monetize assets, and build custom logic and mods. Everything from game logic to world state lives on the blockchain.",
    logo: '/projects/forthekingdom/logo.png',
    banner: '/projects/forthekingdom/banner.png',
    status: 'live',
    x: 'https://x.com/4thekingdom_xyz',
    website: 'https://forthekingdom.xyz/',
    docs: 'https://docs.forthekingdom.xyz/ftk',
    native: true,
    tags: ['Gaming'],
  },
  {
    type: 'gaming',
    name: 'ChessOnChain',
    blurb: 'ChessOnChain is a decentralized, multi-chain chess gaming platform that enables players to compete, earn rewards, and own in-game assets as NFTs.',
    logo: '/projects/chessonchain/logo.jpg',
    banner: '/projects/chessonchain/banner.jpg',
    status: 'coming soon',
    x: 'https://x.com/ChessOnChain',
    website: 'https://play.chessonchain.io/',
    native: false,
    tags: ['Gaming'],
  },
  {
    type: 'gaming',
    name: 'OnChainGm',
    blurb: 'Your Daily Web3 Ritual',
    logo: '/projects/onchaingm/logo.jpg',
    banner: '/projects/onchaingm/banner.jpg',
    status: 'live',
    website: 'https://onchaingm.com/',
    x: 'https://x.com/OnChainGm',
    native: false,
    tags: [],
  },
  {
    type: 'gaming',
    name: 'Rice Race',
    blurb: 'Challenge yourself in this fast-paced typing game built on RSIE. Experience blockchain-integrated typing challenges that test your speed and accuracy!',
    logo: '/projects/rice-race/logo.png',
    banner: '/projects/rice-race/banner.png',
    status: 'live',
    website: 'https://risearacer.gaswars.fun',
    x: 'https://x.com/buildingApps',
    tags: ['Gaming']
  }
]