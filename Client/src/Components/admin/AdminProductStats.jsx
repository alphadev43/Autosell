export default function AdminProductStats() {
  const stats = [
    {
      title: 'Total Products',
      value: '5',
      color: 'text-gray-900'
    },
    {
      title: 'Active Products',
      value: '5',
      color: 'text-emerald-600'
    },
    {
      title: 'Low Stock',
      value: '1',
      color: 'text-amber-600'
    },
    {
      title: 'Out of Stock',
      value: '0',
      color: 'text-red-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
          <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
