export default function AdminMetricsCards() {
  const metrics = [
    {
      title: 'Total Sales',
      value: '₦2,847,500',
      change: '+12.5%',
      changeType: 'positive',
      icon: 'ri-money-dollar-circle-line',
      iconColor: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Completed Orders',
      value: '1,284',
      change: '+8.2%',
      changeType: 'positive',
      icon: 'ri-shopping-cart-line',
      iconColor: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Revenue',
      value: '₦2,456,300',
      change: '+15.3%',
      changeType: 'positive',
      icon: 'ri-line-chart-line',
      iconColor: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Active Products',
      value: '342',
      change: '-2.1%',
      changeType: 'negative',
      icon: 'ri-shopping-bag-3-line',
      iconColor: 'from-orange-500 to-amber-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${metric.iconColor} rounded-lg flex items-center justify-center`}>
              <i className={`${metric.icon} text-white text-2xl`}></i>
            </div>
            <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
              metric.changeType === 'positive'
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {metric.change}
            </span>
          </div>
          <h3 className="text-gray-600 text-sm font-medium mb-1">{metric.title}</h3>
          <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
        </div>
      ))}
    </div>
  );
}
