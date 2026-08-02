export const SERVICES = [
  {
    key: 'homecleaning', label: 'Home Cleaning', icon: 'bi-stars',
    subs: {
      'Residential cleaning': ['Standard home clean', 'Move-out clean', 'Recurring weekly clean'],
      'Deep cleaning': ['Post-construction clean', 'Carpet & upholstery', 'Tile & grout cleaning'],
      'Specialty services': ['Window washing', 'Upholstery cleaning', 'Commercial cleaning']
    }
  },
  {
    key: 'homeremodeling', label: 'Home Remodeling', icon: 'bi-house',
    subs: {
      'Kitchen & bath': ['Kitchen remodeling', 'Bathroom renovation', 'Countertop installation'],
      'Interior upgrades': ['Floor installation', 'Cabinet refinishing', 'Drywall repair'],
      'Exterior projects': ['Deck remodel', 'Siding installation', 'Exterior painting']
    }
  },
  {
    key: 'outdoorupkeep', label: 'Outdoor Upkeep', icon: 'bi-tree',
    subs: {
      'Lawn & garden': ['Lawn mowing', 'Weeding', 'Mulching'],
      'Exterior cleaning': ['Pressure washing', 'Gutter cleaning', 'Pool maintenance'],
      'Seasonal care': ['Leaf removal', 'Snow removal', 'Tree trimming']
    }
  },
  {
    key: 'essentialhomeservices', label: 'Essential Home Services', icon: 'bi-tools',
    subs: {
      'Plumbing & HVAC': ['Emergency plumbing', 'Drain repair', 'AC maintenance'],
      'Electrical & safety': ['Circuit repair', 'Lighting installation', 'Smoke alarm setup'],
      'Home repairs': ['Handyman services', 'Appliance repair', 'Roof maintenance']
    }
  },
  {
    key: 'movingtransport', label: 'Moving & Transport', icon: 'bi-truck',
    subs: {
      'Local moving': ['Studio move', '1-2 bedroom move', 'Furniture-only move'],
      'Packing & loading': ['Packing service', 'Loading help', 'Unpacking service'],
      'Special transport': ['Gift delivery', 'Vehicle transport', 'Chauffeur service']
    }
  },
  {
    key: 'events', label: 'Events', icon: 'bi-calendar-event',
    subs: {
      'Planning & coordination': ['Event planning', 'Wedding coordination', 'Party setup'],
      'Entertainment': ['DJ services', 'Live music', 'Photo booth rental'],
      'Venue support': ['Catering assistance', 'Decoration setup', 'Clean up']
    }
  },
  {
    key: 'wellnessfitness', label: 'Wellness & Fitness', icon: 'bi-heart-pulse',
    subs: {
      'Personal training': ['One-on-one training', 'Fitness coaching', 'Weight training'],
      'Mind & body': ['Yoga instruction', 'Pilates lessons', 'Meditation coaching'],
      'Health services': ['Massage therapy', 'Nutrition consulting', 'Wellness coaching']
    }
  },
  {
    key: 'pets', label: 'Pets', icon: 'bi-heart',
    subs: {
      'Pet care': ['Dog walking', 'Pet sitting', 'House visits'],
      'Grooming': ['Bathing & brushing', 'Nail trimming', 'Haircuts'],
      'Training': ['Obedience lessons', 'Behavior coaching', 'Puppy training']
    }
  },
  {
    key: 'businessservices', label: 'Business Services', icon: 'bi-briefcase',
    subs: {
      'Marketing & design': ['Graphic design', 'Web design', 'Social media support'],
      'Admin support': ['Virtual assistant', 'Data entry', 'Bookkeeping'],
      'IT & consulting': ['IT support', 'Computer repair', 'Software setup']
    }
  },
  {
    key: 'lessonstutoring', label: 'Lessons & Tutoring', icon: 'bi-book',
    subs: {
      'Academic help': ['Tutoring', 'Test prep', 'Study coaching'],
      'Creative skills': ['Music lessons', 'Art classes', 'Dance instruction'],
      'Professional learning': ['Language lessons', 'Coding tutoring', 'Career coaching']
    }
  }
];

export function findService(key) {
  return SERVICES.find(s => s.key === key);
}
