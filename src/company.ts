export const company = {
  name: 'Coldigo Logistics', category: 'Logistics service',
  address: ['PL Nilayam', 'Sai Nagar Colony', 'Sai Nagar, Kompally', 'Hyderabad / Secunderabad', 'Telangana 500100', 'India'],
  rating: '5.0', reviewCount: '3000', hours: 'Monday – Saturday · 9:00 AM – 6:00 PM',
  phone: '', email: '', whatsapp: '', mapUrl: 'https://maps.app.goo.gl/NQD6D9NiWgd8W4oJ7',
  // OpenStreetMap embeds are used in-page because they render reliably without an API key.
  // The button in the UI still opens the exact Google Maps location supplied by Coldigo.
  mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=78.454%2C17.522%2C78.518%2C17.578&layer=mapnik&marker=17.55110%2C78.48635',
  indiaMapEmbedUrl: 'https://maps.google.com/maps?q=India&t=&z=4&ie=UTF8&iwloc=&output=embed'
}

// Confirm these illustrative service categories before publishing.
export const services = [
  ['01', 'Transportation', 'A configurable category for moving what matters.'],
  ['02', 'Freight Movement', 'A configurable category for planned cargo movement.'],
  ['03', 'Logistics Coordination', 'A configurable category for organised execution.'],
  ['04', 'Delivery Solutions', 'A configurable category for final-mile requirements.'],
]
