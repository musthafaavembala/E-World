export interface ServiceItem {
  id: string;
  category: 'ac' | 'washing-machine';
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  image: string;
  popular?: boolean;
}

export const servicesData: ServiceItem[] = [
  // AIR CONDITIONING SERVICES
  {
    id: 'ac-water-service',
    category: 'ac',
    title: 'AC Water Service',
    shortDesc: 'High-pressure water cleaning that restores peak airflow, cooling power, and system efficiency.',
    fullDesc: 'Using dedicated indoor wash jacket covers and precision pressure pumps, we deeply wash the indoor cooling coil, blower wheel, and drain tray without spilling a single drop in your living room.',
    features: ['High-Pressure Jet Wash', 'Deep Coil & Blower Cleaning', 'Water Leak Prevention', 'Airflow Restored to 100%'],
    image: '/assets/images/ac-water-service.jpg',
    popular: true,
  },
  {
    id: 'ac-normal-service',
    category: 'ac',
    title: 'AC Normal Service',
    shortDesc: 'Comprehensive seasonal inspection, filter wash, and performance check to keep your AC healthy.',
    fullDesc: 'An essential seasonal checkup covering multi-point diagnostics, antimicrobial air filter sanitization, electrical terminal tightening, and temperature differential verification.',
    features: ['Multi-Point Inspection', 'Air Filter Sanitization', 'Operating Temperature Check', 'Condensate Drain Check'],
    image: '/assets/images/hero-service-action.jpg',
  },
  {
    id: 'ac-deep-cleaning',
    category: 'ac',
    title: 'AC Deep Cleaning',
    shortDesc: 'Intensive antibacterial foam wash and coil sanitization for pure, odor-free cooling.',
    fullDesc: 'Designed for units that have built up mold, musty odors, or severe grime over time. We apply eco-friendly, antibacterial foam to the cooling fins to eliminate bacteria and stubborn buildup.',
    features: ['Antibacterial Foam Wash', 'Odor & Mold Elimination', 'Blower Wheel Detailing', 'Healthier Indoor Air Quality'],
    image: '/assets/images/ac-deep-cleaning.jpg',
    popular: true,
  },
  {
    id: 'ac-maintenance',
    category: 'ac',
    title: 'AC Maintenance & Diagnostic',
    shortDesc: 'Preventative diagnostic, refrigerant pressure check, and outdoor condenser tune-up.',
    fullDesc: 'Complete electrical and mechanical check of both indoor and outdoor units, checking capacitor health, compressor amperage, refrigerant gas pressure levels, and fan motor stability.',
    features: ['Refrigerant Gas Check', 'Outdoor Condenser Inspection', 'Compressor & Capacitor Test', 'Energy Efficiency Optimization'],
    image: '/assets/images/ac-outdoor-service.jpg',
  },
  {
    id: 'ac-troubleshooting',
    category: 'ac',
    title: 'AC Inspection & Troubleshooting',
    shortDesc: 'Fast diagnostics for cooling failure, water leakage, strange noises, and electrical faults.',
    fullDesc: 'When your AC isn’t cooling properly, making rattling noises, or dripping water onto your walls, our experienced technicians pinpoint the exact root cause and resolve it with genuine parts.',
    features: ['Rapid Root-Cause Diagnosis', 'Water Leak Rectification', 'Electrical & PCB Diagnostics', 'Accurate Upfront Quotes'],
    image: '/assets/images/hero-technician.jpg',
  },

  // WASHING MACHINE SERVICES
  {
    id: 'wm-repair',
    category: 'washing-machine',
    title: 'Washing Machine Repair',
    shortDesc: 'Expert repair for top-load and front-load washers with spinning, draining, or power problems.',
    fullDesc: 'We diagnose and fix all mechanical and electrical issues in modern fully automatic and semi-automatic washing machines, ensuring smooth spin cycles and proper washing action.',
    features: ['Front-Load & Top-Load Experts', 'Spin & Drain Failure Fix', 'Power & Starting Issues', 'Genuine Replacement Parts'],
    image: '/assets/images/wm-technician.jpg',
    popular: true,
  },
  {
    id: 'wm-maintenance',
    category: 'washing-machine',
    title: 'Washing Machine Maintenance & Descaling',
    shortDesc: 'Deep descaling, tub sanitization, and lint filter service to keep clothes smelling fresh.',
    fullDesc: 'Kerala hard water often leads to heavy scale buildup in wash drums and heating elements. Our thorough descaling and tub wash treatment cleans out hidden grime and prevents drum odor.',
    features: ['Tub & Drum Deep Cleaning', 'Hard Water Descaling', 'Filter & Coin Trap Clearing', 'Drum Odor Neutralization'],
    image: '/assets/images/wm-drum.jpg',
  },
  {
    id: 'wm-water-leak',
    category: 'washing-machine',
    title: 'Water Leakage Troubleshooting',
    shortDesc: 'Prompt detection and repair of leaky hoses, door gaskets, bellows, and internal pipes.',
    fullDesc: 'Water leaking beneath or around your washing machine can damage flooring and short-circuit electrical components. We replace torn door seals, split drain hoses, and loose inlet valves.',
    features: ['Door Seal (Bellow) Replacement', 'Inlet & Drain Hose Checks', 'Internal Pipe & Pump Testing', 'Zero-Mess In-Home Repair'],
    image: '/assets/images/wm-topload.jpg',
  },
  {
    id: 'wm-motor-drum',
    category: 'washing-machine',
    title: 'Motor & Drum Troubleshooting',
    shortDesc: 'Precision diagnosis of loud drum vibrations, grinding bearing noises, and belt wear.',
    fullDesc: 'If your washing machine shakes excessively during spin cycles or sounds like an airplane taking off, we service the drum suspension dampers, belt tensioners, and motor drive bearings.',
    features: ['Bearing & Shaft Diagnostics', 'Shock Absorber & Spring Check', 'Drive Belt & Motor Service', 'Vibration Balancing'],
    image: '/assets/images/washing-machine-repair.jpg',
  },
  {
    id: 'wm-control-panel',
    category: 'washing-machine',
    title: 'Control Panel & PCB Service',
    shortDesc: 'Expert circuit troubleshooting for error codes, unresponsive touch buttons, and display faults.',
    fullDesc: 'Modern electronic washing machine control boards can experience faults from voltage fluctuations. Our technicians test PCB components, water level pressure switches, and door interlocks.',
    features: ['Error Code Diagnostics', 'Control Board PCB Testing', 'Door Lock Sensor Repair', 'Water Level Sensor Check'],
    image: '/assets/images/wm-frontload.jpg',
  },
];
