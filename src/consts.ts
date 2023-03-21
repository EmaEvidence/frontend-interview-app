import { ProductIds } from "./types"

export const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.designIns]: 'Designer Insurance',
};

export const insuranceProducts = [
  {
    name: 'Developer Insurance',
    link: '/buy/insurance_dev',
  },
  {
    name: 'Designer Insurance',
    link: '/buy/insurance_designer',
  },
];
