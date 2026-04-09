import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { historyData, dayToDate } from '../data/history'

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ name: string; value: number; color: string }>
  label?: string
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-sakura-100">
      <p className="font-semibold text-gray-700 mb-1">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="text-sm" style={{ color: entry.color }}>
          {entry.name}: {dayToDate(entry.value)}
        </p>
      ))}
    </div>
  )
}

function History() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-sakura-700 mb-2">
          過去の開花データ
        </h1>
        <p className="text-lg text-sakura-500 mb-1">Historical Bloom Dates</p>
        <p className="text-gray-500 max-w-xl mx-auto">
          東京と京都の過去10年間の満開日データ。年ごとの開花時期の変動をご覧ください。
        </p>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-2xl border border-sakura-100 p-6 mb-8">
        <h2 className="font-serif text-xl font-semibold text-gray-800 mb-6">
          満開日の推移 <span className="text-sm font-normal text-gray-400 ml-2">Full Bloom Date Trends</span>
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={historyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#fde6ea" />
            <XAxis dataKey="year" stroke="#9ca3af" fontSize={13} />
            <YAxis
              domain={[70, 100]}
              tickFormatter={(v: number) => dayToDate(v)}
              stroke="#9ca3af"
              fontSize={12}
              width={70}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="tokyo"
              stroke="#f06e88"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#f06e88' }}
              name="Tokyo"
            />
            <Line
              type="monotone"
              dataKey="kyoto"
              stroke="#b01d45"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#b01d45' }}
              name="Kyoto"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl border border-sakura-100 overflow-hidden">
        <div className="p-6 border-b border-sakura-100">
          <h2 className="font-serif text-xl font-semibold text-gray-800">満開日一覧 <span className="text-sm font-normal text-gray-400 ml-2">Full Bloom Date Table</span></h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-sakura-50/50">
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">年 / Year</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-sakura-600">東京 / Tokyo</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-sakura-800">京都 / Kyoto</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((row) => (
                <tr key={row.year} className="border-t border-sakura-50 hover:bg-sakura-50/30 transition-colors">
                  <td className="py-3 px-6 font-medium text-gray-700">{row.year}</td>
                  <td className="py-3 px-6 text-sakura-600">{dayToDate(row.tokyo)}</td>
                  <td className="py-3 px-6 text-sakura-800">{dayToDate(row.kyoto)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default History
