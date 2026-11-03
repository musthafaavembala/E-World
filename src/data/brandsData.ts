export interface BrandCategory {
  title: string;
  brands: string[];
}

export const brandsData: BrandCategory[] = [
  {
    title: 'Air Conditioners',
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
