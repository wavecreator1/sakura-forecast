export interface YearData {
  year: string
  tokyo: number
  kyoto: number
}

// Day of year for full bloom (e.g., 85 = March 26)
export const historyData: YearData[] = [
  { year: '2016', tokyo: 86, kyoto: 93 },
  { year: '2017', tokyo: 91, kyoto: 97 },
  { year: '2018', tokyo: 77, kyoto: 84 },
  { year: '2019', tokyo: 87, kyoto: 96 },
  { year: '2020', tokyo: 83, kyoto: 90 },
  { year: '2021', tokyo: 74, kyoto: 86 },
  { year: '2022', tokyo: 87, kyoto: 90 },
  { year: '2023', tokyo: 83, kyoto: 85 },
  { year: '2024', tokyo: 89, kyoto: 95 },
  { year: '2025', tokyo: 85, kyoto: 92 },
]

export function dayToDate(day: number): string {
  const date = new Date(2024, 0, day)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
