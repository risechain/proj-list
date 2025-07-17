import { APPS } from './apps';
import { COLLECTIONS } from './collections';
import { GAMES } from './games';
import { TOOLS } from './tools';
import { Project } from './types';

export const projects: Project[] = [
  {
    type: 'project',
    name: 'RiseChad',
    blurb: 'RiseChad is a fully onchain degen casino built on Rise Chain and powered by verifiable randomness (VRF). Players enter flash, rush, dream and jack pots. Each round selects one winner using Rise Chain’s VRF system. No middlemen, no off-chain oracles — just pure math, and instant payouts. ',
    logo: '/projects/risechad/logo.png',
    banner: '/projects/risechad/banner.png',
    status: 'live',
    x: 'https://x.com/risechaddotfun',
    website: 'https://risechad.fun',
    native: true,
    tags: ['Casino']
  },
  ...APPS,
  ...GAMES,
  ...COLLECTIONS,
  ...TOOLS,
];