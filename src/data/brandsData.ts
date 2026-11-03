export interface BrandCategory {
  title: string;
  subtitle: string;
  brands: string[];
}

export const brandsData: BrandCategory[] = [
  {
    title: 'Air Conditioners',
    subtitle: 'Expert service and diagnostic capabilities for all major split, inverter, and multi-split AC brands in Kerala.',
    brands: [
      'Daikin',
      'LG',
      'Panasonic',
      'Voltas',
      'Blue Star',
      'Hitachi',
      'Samsung',
      'Carrier',
      'Lloyd',
      'Godrej',
      'Haier',
      "O'General",
      'Mitsubishi Electric',
    ],
  },
  {
    title: 'Washing Machines',
    subtitle: 'Reliable repair, descaling, and electrical care for all leading top-load and front-load washing machine brands.',
    brands: [
      'LG',
      'Samsung',
      'IFB',
      'Bosch',
      'Whirlpool',
      'Haier',
      'Panasonic',
      'Godrej',
      'Electrolux',
      'Siemens',
    ],
  },
];
