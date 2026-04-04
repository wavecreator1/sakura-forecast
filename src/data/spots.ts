export interface Spot {
  id: number
  name: string
  location: string
  bloomDates: string
  description: string
  image: string
  tags: string[]
}

export const spots: Spot[] = [
  {
    id: 1,
    name: 'Ueno Park',
    location: 'Tokyo',
    bloomDates: 'Late March – Early April',
    description: 'One of Tokyo\'s most famous hanami spots with over 800 cherry trees lining the main pathway. The park buzzes with festivals and food stalls during peak bloom.',
    image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80',
    tags: ['Tokyo', 'Family-friendly', 'Festival'],
  },
  {
    id: 2,
    name: 'Meguro River',
    location: 'Tokyo',
    bloomDates: 'Late March – Early April',
    description: 'A 3.8 km stretch lined with over 800 Somei Yoshino cherry trees, creating a stunning pink canopy over the water. Beautiful both day and night with illumination.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80',
    tags: ['Tokyo', 'Night viewing', 'Walking'],
  },
  {
    id: 3,
    name: 'Yoshino Mountain',
    location: 'Nara',
    bloomDates: 'Early – Mid April',
    description: 'Japan\'s most famous cherry blossom site with 30,000 trees covering the mountainside in four distinct areas that bloom sequentially from bottom to top.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
    tags: ['Nara', 'Mountain', 'UNESCO'],
  },
  {
    id: 4,
    name: "Philosopher's Path",
    location: 'Kyoto',
    bloomDates: 'Late March – Mid April',
    description: 'A peaceful 2 km stone path along a canal lined with hundreds of cherry trees. Named after philosopher Nishida Kitaro who meditated along this route.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    tags: ['Kyoto', 'Walking', 'Peaceful'],
  },
  {
    id: 5,
    name: 'Himeji Castle',
    location: 'Hyogo',
    bloomDates: 'Late March – Early April',
    description: 'Japan\'s most spectacular castle surrounded by 1,000 cherry trees. The white castle against pink blossoms is one of Japan\'s most iconic spring scenes.',
    image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=80',
    tags: ['Hyogo', 'Castle', 'Iconic'],
  },
  {
    id: 6,
    name: 'Shinjuku Gyoen',
    location: 'Tokyo',
    bloomDates: 'Late March – Mid April',
    description: 'A spacious garden with 1,000 trees of 65 varieties, offering an extended viewing season. The mix of Japanese, English, and French garden styles is stunning.',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80',
    tags: ['Tokyo', 'Garden', 'Varieties'],
  },
  {
    id: 7,
    name: 'Hirosaki Castle',
    location: 'Aomori',
    bloomDates: 'Late April – Early May',
    description: 'Home to 2,600 cherry trees and the famous "cherry blossom tunnel" along the outer moat. Petals floating on the moat create a breathtaking pink carpet.',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80',
    tags: ['Aomori', 'Castle', 'Late bloom'],
  },
  {
    id: 8,
    name: 'Arashiyama',
    location: 'Kyoto',
    bloomDates: 'Late March – Mid April',
    description: 'The hillsides along the Oi River burst into color with wild cherry blossoms. The iconic Togetsukyo Bridge framed by sakura is unforgettable.',
    image: 'https://images.unsplash.com/photo-1504109586057-71a068e27ca7?w=600&q=80',
    tags: ['Kyoto', 'River', 'Scenic'],
  },
  {
    id: 9,
    name: 'Chidorigafuchi',
    location: 'Tokyo',
    bloomDates: 'Late March – Early April',
    description: 'A moat near the Imperial Palace lined with 260 cherry trees. Rowboat rentals let you glide beneath a canopy of blossoms — magical at night with illumination.',
    image: 'https://images.unsplash.com/photo-1462275646964-a0e3c11f18a6?w=600&q=80',
    tags: ['Tokyo', 'Boating', 'Night viewing'],
  },
  {
    id: 10,
    name: 'Matsumoto Castle',
    location: 'Nagano',
    bloomDates: 'Mid – Late April',
    description: 'The striking black "Crow Castle" contrasts beautifully with delicate pink cherry blossoms reflected in the surrounding moat.',
    image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&q=80',
    tags: ['Nagano', 'Castle', 'Reflection'],
  },
]
