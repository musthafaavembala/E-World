export interface LocationItem {
  name: string;
  district: string;
  coverage: string;
  response: string;
  popularServices: string[];
}

export const locationsData: LocationItem[] = [
  {
    name: 'Parappanangadi',
    district: 'Malappuram District, Kerala',
    coverage: 'Service requests are listed for Parappanangadi. Contact us to confirm coverage for your exact address.',
    response: 'Contact us to confirm available visit times',
    popularServices: ['AC Water Service', 'Deep Cleaning', 'Washing Machine Repair'],
  },
  {
    name: 'Kondotty',
    district: 'Malappuram District, Kerala',
    coverage: 'Service requests are listed for Kondotty. Contact us to confirm coverage for your exact address.',
    response: 'Contact us to confirm available visit times',
    popularServices: ['AC Water Jet Cleaning', 'Front-Load Washer Service', 'Seasonal AC Tune-up'],
  },
];
