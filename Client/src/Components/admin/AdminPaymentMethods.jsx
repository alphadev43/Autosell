export default function AdminPaymentMethods() {
  const paymentMethods = [
    {
      name: 'Card Payment',
      icon: 'ri-bank-card-line',
      color: 'from-teal-500 to-emerald-500',
      amount: '₦1,245,000',
      percentage: 45
    },
    {
      name: 'Bank Transfer',
      icon: 'ri-bank-line',
      color: 'from-blue-500 to-cyan-500',
      amount: '₦832,000',
      percentage: 30
    },
    {
      name: 'Wallet',
      icon: 'ri-wallet-3-line',
      color: 'from-purple-500 to-pink-500',
      amount: '₦485,000',
      percentage: 17
    },
    {
      name: 'USSD',
      icon: 'ri-smartphone-line',
      color: 'from-orange-500 to-amber-500',
      amount: '₦221,000',
      percentage: 8
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Payment Methods</h3>

      <div className="space-y-4">
        {paymentMethods.map((method, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center`}>
                  <i className={`${method.icon} text-white text-lg`}></i>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{method.name}</p>
                  <p className="text-xs text-gray-500">{method.amount}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-gray-900">{method.percentage}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${method.color} transition-all`}
                style={{ width: `${method.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700">Total Revenue</span>
          <span className="text-lg font-bold text-gray-900">₦2,783,000</span>
        </div>
      </div>
    </div>
  );
}
