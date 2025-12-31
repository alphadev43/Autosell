export default function AdminInventoryStats() {
  const stats = [
    {
      title: 'In Stock',
      value: '4',
      icon: 'ri-checkbox-circle-line',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      textColor: 'text-gray-900'
    },
    {
      title: 'Low Stock',
      value: '2',
      icon: 'ri-alert-line',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      textColor: 'text-amber-600'
    },
    {
      title: 'Out of Stock',
      value: '1',
      icon: 'ri-close-circle-line',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      textColor: 'text-red-600'
    },
    {
      title: 'Total Items',
      value: '576',
      icon: 'ri-stack-line',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      textColor: 'text-gray-900'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-10 h-10 ${stat.iconBg} rounded-lg flex items-center justify-center`}>
              <i className={`${stat.icon} ${stat.iconColor} text-xl`}></i>
            </div>
            <p className="text-sm text-gray-600">{stat.title}</p>
          </div>
          <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
