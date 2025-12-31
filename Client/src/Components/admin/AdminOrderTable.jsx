export default function AdminOrderTable() {
  const orders = [
    {
      id: 'AS12847563',
      customer: {
        name: 'John Doe',
        initials: 'JD'
      },
      items: 2,
      total: '₦102,500',
      payment: {
        method: 'Card',
        status: 'paid'
      },
      status: 'completed',
      date: '2024-01-18',
      time: '14:32'
    },
    {
      id: 'AS12847562',
      customer: {
        name: 'Sarah Smith',
        initials: 'SS'
      },
      items: 2,
      total: '₦24,500',
      payment: {
        method: 'Bank Transfer',
        status: 'paid'
      },
      status: 'processing',
      date: '2024-01-18',
      time: '14:15'
    },
    {
      id: 'AS12847561',
      customer: {
        name: 'Mike Johnson',
        initials: 'MJ'
      },
      items: 1,
      total: '₦35,600',
      payment: {
        method: 'Wallet',
        status: 'paid'
      },
      status: 'completed',
      date: '2024-01-18',
      time: '13:48'
    },
    {
      id: 'AS12847560',
      customer: {
        name: 'Emma Wilson',
        initials: 'EW'
      },
      items: 2,
      total: '₦70,000',
      payment: {
        method: 'USSD',
        status: 'pending'
      },
      status: 'processing',
      date: '2024-01-18',
      time: '13:22'
    },
    {
      id: 'AS12847559',
      customer: {
        name: 'David Brown',
        initials: 'DB'
      },
      items: 1,
      total: '₦35,000',
      payment: {
        method: 'Card',
        status: 'refunded'
      },
      status: 'cancelled',
      date: '2024-01-18',
      time: '12:55'
    }
  ];

  const getOrderStatusColor = (status) => {
    const colors = {
      'completed': 'bg-emerald-100 text-emerald-700',
      'processing': 'bg-blue-100 text-blue-700',
      'cancelled': 'bg-red-100 text-red-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getPaymentStatusColor = (status) => {
    const colors = {
      'paid': 'bg-emerald-100 text-emerald-700',
      'pending': 'bg-amber-100 text-amber-700',
      'refunded': 'bg-purple-100 text-purple-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const handleViewDetails = (orderId) => {
    console.log('View details for order:', orderId);
    alert(`Viewing details for order ${orderId}`);
  };

  const handleDownloadReceipt = (orderId) => {
    console.log('Download receipt for order:', orderId);
    alert(`Downloading receipt for order ${orderId}`);
  };

  const handleRefund = (orderId) => {
    console.log('Process refund for order:', orderId);
    if (confirm(`Process refund for order ${orderId}?`)) {
      alert(`Refund processed for order ${orderId}`);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Order ID</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Items</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Total</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Payment</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Date & Time</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-semibold text-gray-900 text-sm">{order.id}</p>
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {order.customer.initials}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{order.customer.name}</span>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {order.items} {order.items === 1 ? 'item' : 'items'}
                </td>

                <td className="px-6 py-4 text-sm font-bold text-gray-900">{order.total}</td>

                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500">{order.payment.method}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getPaymentStatusColor(order.payment.status)}`}>
                      {order.payment.status}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize whitespace-nowrap ${getOrderStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <p className="text-sm text-gray-900">{order.date}</p>
                  <p className="text-xs text-gray-500">{order.time}</p>
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleViewDetails(order.id)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-blue-50 text-blue-600 rounded-lg transition-colors cursor-pointer"
                      title="View Details"
                    >
                      <i className="ri-eye-line text-lg"></i>
                    </button>
                    <button
                      onClick={() => handleDownloadReceipt(order.id)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-teal-50 text-teal-600 rounded-lg transition-colors cursor-pointer"
                      title="Download Receipt"
                    >
                      <i className="ri-download-line text-lg"></i>
                    </button>
                    {order.status === 'completed' && (
                      <button
                        onClick={() => handleRefund(order.id)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-red-50 text-red-600 rounded-lg transition-colors cursor-pointer"
                        title="Refund"
                      >
                        <i className="ri-refund-line text-lg"></i>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
