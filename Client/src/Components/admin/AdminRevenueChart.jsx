export default function AdminRevenueChart() {
  const chartData = [
    { day: 'Mon', amount: 45000, percentage: 67.16 },
    { day: 'Tue', amount: 52000, percentage: 77.61 },
    { day: 'Wed', amount: 48000, percentage: 71.64 },
    { day: 'Thu', amount: 61000, percentage: 91.04 },
    { day: 'Fri', amount: 55000, percentage: 82.09 },
    { day: 'Sat', amount: 67000, percentage: 100 },
    { day: 'Sun', amount: 58000, percentage: 86.57 }
  ];

  const timeRanges = ['Week', 'Month', 'Year'];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Revenue Overview</h3>
          <p className="text-sm text-gray-600">Weekly revenue performance</p>
        </div>
        <div className="flex items-center gap-2">
          {timeRanges.map((range) => (
            <button
              key={range}
              className={`px-3 py-1 text-sm font-medium whitespace-nowrap ${
                range === 'Week'
                  ? 'text-teal-600 bg-teal-50 rounded-lg'
                  : 'text-gray-600 hover:bg-gray-100 rounded-lg'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end justify-between gap-4 h-64">
        {chartData.map((data, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div className="relative w-full group cursor-pointer">
              <div
                className="w-full bg-gradient-to-t from-teal-500 to-emerald-400 rounded-t-lg transition-all hover:from-teal-600 hover:to-emerald-500"
                style={{ height: `${data.percentage}%` }}
              ></div>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                ₦{data.amount.toLocaleString()}
              </div>
            </div>
            <span className="text-sm font-medium text-gray-600">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
