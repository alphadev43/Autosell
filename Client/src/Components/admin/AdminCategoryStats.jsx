export default function AdminCategoryStats() {
  const stats = [
    {
      title: 'Total Categories',
      value: '8',
      icon: 'ri-folder-line',
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-100'
    },
    {
      title: 'Active Categories',
      value: '8',
      icon: 'ri-checkbox-circle-line',
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      title: 'Total Products',
      value: '240',
      icon: 'ri-shopping-bag-3-line',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Avg Products/Category',
      value: '30',
      icon: 'ri-bar-chart-box-line',
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
              <i className={`${stat.icon} ${stat.iconColor} text-2xl`}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
