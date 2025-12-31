export default function AdminRecentOrders() {
  const recentOrders = [
    {
      name: 'John Doe',
      orderId: 'AS12847563',
      amount: '₦45,600',
      time: '2 mins ago',
      status: 'completed',
      initials: 'JD'
    },
    {
      name: 'Sarah Smith',
      orderId: 'AS12847562',
      amount: '₦32,400',
      time: '5 mins ago',
      status: 'processing',
      initials: 'SS'
    },
    {
      name: 'Mike Johnson',
      orderId: 'AS12847561',
      amount: '₦67,800',
      time: '12 mins ago',
      status: 'completed',
      initials: 'MJ'
    },
    {
      name: 'Emma Wilson',
      orderId: 'AS12847560',
      amount: '₦28,900',
      time: '18 mins ago',
      status: 'pending',
      initials: 'EW'
    },
    {
      name: 'David Brown',
      orderId: 'AS12847559',
      amount: '₦54,300',
      time: '25 mins ago',
      status: 'completed',
      initials: 'DB'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-100 text-emerald-700';
      case 'processing':
        return 'bg-blue-100 text-blue-700';
      case 'pending':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Recent Orders</h3>
          <p className="text-sm text-gray-600">Latest customer transactions</p>
        </div>
        <button className="text-sm text-teal-600 hover:text-teal-700 font-medium whitespace-nowrap">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {recentOrders.map((order, index) => (
          <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
              {order.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900">{order.name}</p>
              <p className="text-xs text-gray-500">{order.orderId}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900">{order.amount}</p>
              <p className="text-xs text-gray-500">{order.time}</p>
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full capitalize whitespace-nowrap ${getStatusColor(order.status)}`}>
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
