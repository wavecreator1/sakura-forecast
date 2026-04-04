export interface Region {
  id: string
  name: string
  nameJp: string
  lat: number
  lng: number
  status: 'not-yet' | 'budding' | 'full-bloom' | 'falling'
  forecastDate: string
  description: string
}

export const regions: Region[] = [
  {
    id: 'hokkaido',
    name: 'Hokkaido',
    nameJp: '北海道',
    lat: 43.06,
    lng: 141.35,
    status: 'not-yet',
    forecastDate: 'Apr 28',
    description: 'The last region to bloom, offering cherry blossoms well into May.',
  },
  {
    id: 'tohoku',
    name: 'Tohoku',
    nameJp: '東北',
    lat: 38.27,
    lng: 140.87,
    status: 'budding',
    forecastDate: 'Apr 10',
    description: 'Famous for castle towns framed by cherry blossoms.',
  },
  {
    id: 'kanto',
    name: 'Kanto',
    nameJp: '関東',
    lat: 35.68,
    lng: 139.69,
    status: 'full-bloom',
    forecastDate: 'Mar 25',
    description: 'Home to Tokyo — peak bloom typically arrives in late March.',
  },
  {
    id: 'chubu',
    name: 'Chubu',
    nameJp: '中部',
    lat: 36.24,
    lng: 137.97,
    status: 'full-bloom',
    forecastDate: 'Mar 30',
    description: 'Includes Nagoya and the Japanese Alps; bloom varies by altitude.',
  },
  {
    id: 'kansai',
    name: 'Kansai',
    nameJp: '関西',
    lat: 34.69,
    lng: 135.50,
    status: 'full-bloom',
    forecastDate: 'Mar 27',
    description: 'Kyoto and Osaka offer iconic hanami experiences.',
  },
  {
    id: 'chugoku',
    name: 'Chugoku',
    nameJp: '中国',
    lat: 34.40,
    lng: 132.46,
    status: 'full-bloom',
    forecastDate: 'Mar 26',
    description: 'Hiroshima\'s Peace Memorial Park is a popular spot.',
  },
  {
    id: 'shikoku',
    name: 'Shikoku',
    nameJp: '四国',
    lat: 33.84,
    lng: 133.53,
    status: 'falling',
    forecastDate: 'Mar 24',
    description: 'Warm climate means early blooms along the Shimanto River.',
  },
  {
    id: 'kyushu',
    name: 'Kyushu',
    nameJp: '九州',
    lat: 33.25,
    lng: 131.07,
    status: 'falling',
    forecastDate: 'Mar 20',
    description: 'Typically the first region in mainland Japan to see blossoms.',
  },
]

export const statusColors: Record<Region['status'], string> = {
  'not-yet': '#9ca3af',
  'budding': '#22c55e',
  'full-bloom': '#f06e88',
  'falling': '#b01d45',
}

export const statusLabels: Record<Region['status'], string> = {
  'not-yet': 'Not Yet',
  'budding': 'Budding',
  'full-bloom': 'Full Bloom',
  'falling': 'Falling',
}
