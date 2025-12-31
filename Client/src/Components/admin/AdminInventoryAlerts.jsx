export default function AdminInventoryAlerts() {
  const alerts = [
    {
      type: 'warning',
      icon: 'ri-alert-line',
      title: 'Low Stock Alert',
      message: '2 products are running low on stock',
      buttonText: 'View Items',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      textColor: 'text-amber-900',
      messageColor: 'text-amber-700',
      buttonColor: 'bg-amber-600 hover:bg-amber-700'
    },
    {
      type: 'danger',
      icon: 'ri-error-warning-line',
      title: 'Out of Stock Alert',
      message: '1 products are out of stock',
      buttonText: 'Restock Now',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      textColor: 'text-red-900',
      messageColor: 'text-red-700',
      buttonColor: 'bg-red-600 hover:bg-red-700'
    }
  ];

  const handleViewItems = (alertType) => {
    alert(`${alertType === 'warning' ? 'Low stock items' : 'Out of stock items'}: navigate to filtered view`);
  };

  return (
    <div className="space-y-3">
      {alerts.map((alert, index) => (
        <div key={index} className={`${alert.bgColor} border ${alert.borderColor} rounded-lg p-4 flex items-center gap-3`}>
          <div className={`w-10 h-10 ${alert.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <i className={`${alert.icon} ${alert.iconColor} text-xl`}></i>
          </div>
          <div className="flex-1">
            <p className={`font-semibold ${alert.textColor}`}>{alert.title}</p>
            <p className={`text-sm ${alert.messageColor}`}>{alert.message}</p>
          </div>
          <button
            onClick={() => handleViewItems(alert.type)}
            className={`px-4 py-2 ${alert.buttonColor} text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap`}
          >
            {alert.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
}
