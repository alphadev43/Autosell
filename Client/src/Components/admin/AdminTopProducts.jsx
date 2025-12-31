export default function AdminTopProducts() {
  const products = [
    {
      name: 'Premium Rice 50kg',
      category: 'Grains',
      sold: 342,
      revenue: '₦684,000',
      trend: 'up',
      image: 'https://readdy.ai/api/search-image?query=premium%20white%20rice%20bag%20in%20simple%20clean%20white%20background%20product%20photography%20high%20quality&width=80&height=80&seq=prod1&orientation=squarish'
    },
    {
      name: 'Vegetable Oil 5L',
      category: 'Cooking',
      sold: 289,
      revenue: '₦578,000',
      trend: 'up',
      image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20in%20simple%20clean%20white%20background%20product%20photography%20high%20quality&width=80&height=80&seq=prod2&orientation=squarish'
    },
    {
      name: 'Tomato Paste 400g',
      category: 'Canned',
      sold: 256,
      revenue: '₦384,000',
      trend: 'down',
      image: 'https://readdy.ai/api/search-image?query=tomato%20paste%20can%20in%20simple%20clean%20white%20background%20product%20photography%20high%20quality&width=80&height=80&seq=prod3&orientation=squarish'
    },
    {
      name: 'Sugar 2kg',
      category: 'Sweeteners',
      sold: 234,
      revenue: '₦351,000',
      trend: 'up',
      image: 'https://readdy.ai/api/search-image?query=white%20sugar%20bag%20package%20in%20simple%20clean%20white%20background%20product%20photography%20high%20quality&width=80&height=80&seq=prod4&orientation=squarish'
    },
    {
      name: 'Milk Powder 900g',
      category: 'Dairy',
      sold: 198,
      revenue: '₦495,000',
      trend: 'up',
      image: 'https://readdy.ai/api/search-image?query=milk%20powder%20tin%20container%20in%20simple%20clean%20white%20background%20product%20photography%20high%20quality&width=80&height=80&seq=prod5&orientation=squarish'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Top Products</h3>
          <p className="text-sm text-gray-600">Best selling items this week</p>
        </div>
        <button className="text-sm text-teal-600 hover:text-teal-700 font-medium whitespace-nowrap">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
              <img alt={product.name} className="w-full h-full object-cover object-top" src={product.image} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">{product.name}</p>
              <p className="text-xs text-gray-500">{product.category}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900">{product.sold} sold</p>
              <p className="text-xs text-gray-500">{product.revenue}</p>
            </div>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
              product.trend === 'up' ? 'bg-emerald-100' : 'bg-red-100'
            }`}>
              <i className={`${
                product.trend === 'up' ? 'ri-arrow-up-line text-emerald-600' : 'ri-arrow-down-line text-red-600'
              }`}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
