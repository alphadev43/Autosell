export default function AdminLoginFeature() {
  const features = [
    {
      icon: 'ri-bar-chart-box-line',
      title: 'Real-time Sales Analytics'
    },
    {
      icon: 'ri-shopping-bag-3-line',
      title: 'Product & Inventory Management'
    },
    {
      icon: 'ri-team-line',
      title: 'Staff & Permissions Control'
    }
  ];

  return (
    <div className="hidden lg:block">
      <div className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-3xl p-12 text-white shadow-2xl">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
          <i className="ri-dashboard-line text-5xl"></i>
        </div>
        <h1 className="text-4xl font-bold mb-4">AutoSell Admin</h1>
        <p className="text-lg text-white/90 mb-8">
          Manage your store operations, inventory, staff, and analytics from one powerful dashboard.
        </p>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <i className={`${feature.icon} text-xl`}></i>
              </div>
              <span className="text-white/90">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
