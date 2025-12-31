export default function AdminStaffStats() {
  const stats = [
    {
      title: 'Total Staff',
      value: '5',
      icon: 'ri-team-line',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100',
      textColor: 'text-gray-900'
    },
    {
      title: 'Active',
      value: '5',
      icon: 'ri-checkbox-circle-line',
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-600'
    },
    {
      title: 'Managers',
      value: '1',
      icon: 'ri-user-star-line',
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-100',
      textColor: 'text-gray-900'
    },
    {
      title: 'Attendants',
      value: '2',
      icon: 'ri-user-line',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100',
      textColor: 'text-gray-900'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
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
