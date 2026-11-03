const acMaintenanceImage = new URL('../images-ewold/AC maintenance & diagnostics.jpeg', import.meta.url).href;
const acNormalImage = new URL('../images-ewold/Ac normal service.jpeg', import.meta.url).href;
const acWaterImage = new URL('../images-ewold/AC water service.jpeg', import.meta.url).href;
const washingMachineMotorControlImage = new URL(
  '../images-ewold/Washing mechine motor & control panel service.jpeg',
  import.meta.url,
).href;
const washingMachineRepairImage = new URL('../images-ewold/Washing mechine repair.jpeg', import.meta.url).href;

export interface ServiceItem {
  id: string;
  category: 'ac' | 'washing-machine';
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'ac-water-service',
    category: 'ac',
    title: 'AC water service',
    shortDesc: 'High-pressure water cleaning to clear dirt from the indoor coil and blower.',
    fullDesc: 'The service uses wash jacket covers and a pressure pump to clean the indoor coil, blower wheel, and drain tray, with care taken to contain runoff.',
    features: ['High-Pressure Jet Wash', 'Coil & Blower Cleaning', 'Drain Tray Inspection', 'Runoff Containment'],
    image: acWaterImage,
  },
  {
    id: 'ac-normal-service',
    category: 'ac',
    title: 'Ac normal service',
    shortDesc: 'Comprehensive seasonal inspection, filter wash, and performance check to keep your AC healthy.',
    fullDesc: 'A seasonal checkup covering multi-point diagnostics, air filter cleaning, electrical terminal inspection, and temperature checks.',
    features: ['Multi-Point Inspection', 'Air Filter Cleaning', 'Operating Temperature Check', 'Condensate Drain Check'],
    image: acNormalImage,
  },
  {
    id: 'ac-maintenance',
    category: 'ac',
    title: 'AC maintenance & diagnostics',
    shortDesc: 'Preventative diagnostic, refrigerant pressure check, and outdoor condenser tune-up.',
    fullDesc: 'Complete electrical and mechanical check of both indoor and outdoor units, checking capacitor health, compressor amperage, refrigerant gas pressure levels, and fan motor stability.',
    features: ['Refrigerant Pressure Check', 'Outdoor Condenser Inspection', 'Compressor & Capacitor Test', 'Performance Checks'],
    image: acMaintenanceImage,
  },

  {
    id: 'wm-repair',
    category: 'washing-machine',
    title: 'Washing mechine repair',
    shortDesc: 'Expert repair for top-load and front-load washers with spinning, draining, or power problems.',
    fullDesc: 'We diagnose and fix all mechanical and electrical issues in modern fully automatic and semi-automatic washing machines, ensuring smooth spin cycles and proper washing action.',
    features: ['Front-Load & Top-Load Service', 'Spin & Drain Issues', 'Power & Starting Issues', 'Parts Discussed Before Repair'],
    image: washingMachineRepairImage,
  },
  {
    id: 'wm-control-panel',
    category: 'washing-machine',
    title: 'Washing mechine motor & control panel service',
    shortDesc: 'Expert circuit troubleshooting for error codes, unresponsive touch buttons, and display faults.',
    fullDesc: 'Modern electronic washing machine control boards can experience faults from voltage fluctuations. Our technicians test PCB components, water level pressure switches, and door interlocks.',
    features: ['Error Code Diagnostics', 'Control Board PCB Testing', 'Door Lock Sensor Repair', 'Water Level Sensor Check'],
    image: washingMachineMotorControlImage,
  },
];
