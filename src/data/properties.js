// Property listings data
export const properties = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    type: 'For Sale',
    category: 'Villa',
    price: 850000,
    location: 'Lekki Phase 1, Lagos',
    bedrooms: 5,
    bathrooms: 4,
    area: 420,
    description:
      'An exquisite 5-bedroom luxury villa nestled in the prestigious Lekki Phase 1 neighbourhood. Features a private swimming pool, smart home systems, expansive garden, and world-class finishes throughout.',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=80',
    featured: true,
    yearBuilt: 2022,
    parking: 3,
  },
  {
    id: 2,
    title: 'Executive 3-Bedroom Apartment',
    type: 'For Rent',
    category: 'Apartment',
    price: 1800000,
    priceLabel: '/ year',
    location: 'Victoria Island, Lagos',
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    description:
      'A sophisticated fully-serviced 3-bedroom apartment with panoramic ocean views, 24/7 security, standby generator, and access to a rooftop lounge and gym.',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=80',
    featured: true,
    yearBuilt: 2021,
    parking: 2,
  },
  {
    id: 3,
    title: 'Contemporary Townhouse',
    type: 'For Sale',
    category: 'Townhouse',
    price: 320000,
    location: 'Ikeja GRA, Lagos',
    bedrooms: 4,
    bathrooms: 3,
    area: 260,
    description:
      'A beautifully designed 4-bedroom contemporary townhouse in a serene gated community. Features open-plan living spaces, a modern kitchen, and a landscaped private backyard.',
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop&q=80',
    featured: false,
    yearBuilt: 2020,
    parking: 2,
  },
  {
    id: 4,
    title: 'Prime Commercial Office Space',
    type: 'For Rent',
    category: 'Commercial',
    price: 4500000,
    priceLabel: '/ year',
    location: 'Central Business District, Abuja',
    bedrooms: 0,
    bathrooms: 4,
    area: 350,
    description:
      'A Grade-A commercial office space on the 8th floor of a premier high-rise. Includes reception area, conference rooms, open workstations, and stunning city skyline views.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80',
    featured: false,
    yearBuilt: 2019,
    parking: 10,
  },
  {
    id: 5,
    title: 'Cosy 2-Bedroom Studio Flat',
    type: 'For Rent',
    category: 'Apartment',
    price: 650000,
    priceLabel: '/ year',
    location: 'Yaba, Lagos',
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    description:
      'A compact yet stylish 2-bedroom studio flat, perfect for young professionals or students. Located minutes away from tech hubs, universities, and major transport links.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=80',
    featured: false,
    yearBuilt: 2018,
    parking: 1,
  },
  {
    id: 6,
    title: 'Sprawling Country Estate',
    type: 'For Sale',
    category: 'Villa',
    price: 2100000,
    location: 'Maitama, Abuja',
    bedrooms: 7,
    bathrooms: 6,
    area: 850,
    description:
      'A majestic 7-bedroom country estate on a half-hectare plot in the most exclusive district of Abuja. Features a cinema room, indoor pool, tennis court, and staff quarters.',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80',
    featured: true,
    yearBuilt: 2023,
    parking: 6,
  },
  {
    id: 7,
    title: 'Modern 1-Bedroom Service Flat',
    type: 'For Rent',
    category: 'Apartment',
    price: 420000,
    priceLabel: '/ year',
    location: 'Oniru, Lagos',
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    description:
      'An elegantly furnished 1-bedroom serviced apartment ideal for corporate executives and short-term residents. Fully equipped kitchen, high-speed internet, and hotel-style amenities.',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80',
    featured: false,
    yearBuilt: 2021,
    parking: 1,
  },
  {
    id: 8,
    title: 'Detached Family Bungalow',
    type: 'For Sale',
    category: 'Bungalow',
    price: 195000,
    location: 'Bodija, Ibadan',
    bedrooms: 3,
    bathrooms: 2,
    area: 165,
    description:
      'A charming 3-bedroom detached bungalow on a generous plot with mature fruit trees. Perfect for a growing family, featuring a large sitting room, modern kitchen, and borehole water.',
    image:
      'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=800&auto=format&fit=crop&q=80',
    featured: false,
    yearBuilt: 2016,
    parking: 2,
  },
  {
    id: 9,
    title: 'Penthouse Suite with Ocean View',
    type: 'For Sale',
    category: 'Penthouse',
    price: 1250000,
    location: 'Eko Atlantic, Lagos',
    bedrooms: 4,
    bathrooms: 4,
    area: 480,
    description:
      'A breathtaking top-floor penthouse in the iconic Eko Atlantic City with floor-to-ceiling glass walls, a wraparound terrace with Atlantic Ocean views, private elevator, and designer interiors.',
    image:
      'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&auto=format&fit=crop&q=80',
    featured: true,
    yearBuilt: 2024,
    parking: 3,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Adaeze Okonkwo',
    role: 'First-Time Home Buyer',
    text: 'PrimeEstate made my first home purchase a smooth and exciting experience. The team was patient, knowledgeable and transparent throughout the entire process.',
    avatar: 'AO',
    rating: 5,
  },
  {
    id: 2,
    name: 'Chukwuemeka Nwosu',
    role: 'Property Investor',
    text: 'I have worked with several agencies, but PrimeEstate stands out for their market insight and professionalism. My investment portfolio has grown significantly thanks to their guidance.',
    avatar: 'CN',
    rating: 5,
  },
  {
    id: 3,
    name: 'Fatimah Abubakar',
    role: 'Commercial Tenant',
    text: 'Finding the right office space was critical for my business. PrimeEstate understood my needs perfectly and found us an ideal space within our budget and timeline.',
    avatar: 'FA',
    rating: 5,
  },
]

export const teamMembers = [
  {
    id: 1,
    name: 'Odeyale Joshua Mbang',
    role: 'Lead Application Developer',
    bio: 'Computer Science Department (Matric: 25/sci01/076 | Email: ce073200@gmail.com). Designed and engineered the PrimeEstate digital platform using React JS, component architecture, and responsive design.',
    initials: 'OJ',
  },
  {
    id: 2,
    name: 'Oluwaseun Adeyemi',
    role: 'Chief Executive Officer',
    bio: 'With over 20 years in Nigerian real estate, Oluwaseun co-founded PrimeEstate with a vision to transform property transactions through technology and trust.',
    initials: 'OA',
  },
  {
    id: 3,
    name: 'Ngozi Eze',
    role: 'Head of Sales',
    bio: 'Ngozi brings 15 years of sales expertise, having closed over ₦5 billion in property deals. She leads our award-winning sales team with passion and precision.',
    initials: 'NE',
  },
  {
    id: 4,
    name: 'Babatunde Fashola',
    role: 'Chief Property Analyst',
    bio: 'Babatunde is a certified property valuer and market analyst who ensures every listing is accurately priced and every investment recommendation is data-driven.',
    initials: 'BF',
  },
]

export const stats = [
  { label: 'Properties Listed', value: '2,500+' },
  { label: 'Happy Clients', value: '8,000+' },
  { label: 'Cities Covered', value: '15+' },
  { label: 'Years of Experience', value: '12+' },
]

