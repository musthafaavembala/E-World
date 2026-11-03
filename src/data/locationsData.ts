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
    coverage: 'Complete residential & commercial doorstep service across Parappanangadi town, railway station area, beach road, and nearby residential neighbourhoods.',
    response: 'Same-day & scheduled visits available',
    popularServices: ['AC Water Service', 'Deep Cleaning', 'Washing Machine Repair'],
  },
  {
    name: 'Kondotty',
    district: 'Malappuram District, Kerala',
    coverage: 'Prompt technician visits for homes, apartments, and offices throughout Kondotty, airport road, town centre, and adjacent residential belts.',
    response: 'Same-day & scheduled visits available',
    popularServices: ['AC Water Jet Cleaning', 'Front-Load Washer Service', 'Seasonal AC Tune-up'],
  },
];
