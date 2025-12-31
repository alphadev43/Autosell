export default function AdminProductTable() {
  const products = [
    {
      id: 'P001',
      name: 'Premium Rice 50kg',
      sku: 'RICE-50KG-001',
      category: 'Grains',
      price: '₦45,000',
      stock: 156,
      barcode: '8901234567890',
      status: 'active',
      image: 'https://readdy.ai/api/search-image?query=premium%20white%20rice%20bag%20in%20simple%20clean%20white%20background%20product%20photography%20high%20quality&width=200&height=200&seq=prod1&orientation=squarish'
    },
    {
      id: 'P002',
      name: 'Vegetable Oil 5L',
      sku: 'OIL-5L-002',
      category: 'Cooking',
      price: '₦12,500',
      stock: 89,
      barcode: '8901234567891',
      status: 'active',
      image: 'https://readdy.ai/api/search-image?query=vegetable%20cooking%20oil%20bottle%20in%20simple%20clean%20white%20background%20product%20photography%20high%20quality&width=200&height=200&seq=prod2&orientation=squarish'
    },
    {
      id: 'P003',
      name: 'Tomato Paste 400g',
      sku: 'TOM-400G-003',
      category: 'Canned',
      price: '₦2,800',
      stock: 234,
      barcode: '8901234567892',
      status: 'active',
      image: 'https://readdy.ai/api/search-image?query=tomato%20paste%20can%20in%20simple%20clean%20white%20background%20product%20photography%20high%20quality&width=200&height=200&seq=prod3&orientation=squarish'
    },
    {
      id: 'P004',
      name: 'Sugar 2kg',
      sku: 'SUG-2KG-004',
      category: 'Sweeteners',
      price: '₦3,500',
      stock: 12,
      barcode: '8901234567893',
      status: 'active',
      image: 'https://readdy.ai/api/search-image?query=white%20sugar%20bag%20package%20in%20simple%20clean%20white%20background%20product%20photography%20high%20quality&width=200&height=200&seq=prod4&orientation=squarish'
    },
    {
      id: 'P005',
      name: 'Milk Powder 900g',
      sku: 'MILK-900G-005',
      category: 'Dairy',
      price: '₦8,900',
      stock: 67,
      barcode: '8901234567894',
      status: 'active',
      image: 'https://readdy.ai/api/search-image?query=milk%20powder%20tin%20container%20in%20simple%20clean%20white%20background%20product%20photography%20high%20quality&width=200&height=200&seq=prod5&orientation=squarish'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Grains': 'bg-blue-100 text-blue-700',
      'Cooking': 'bg-green-100 text-green-700',
      'Canned': 'bg-purple-100 text-purple-700',
      'Sweeteners': 'bg-pink-100 text-pink-700',
      'Dairy': 'bg-indigo-100 text-indigo-700',
      'Beverages': 'bg-cyan-100 text-cyan-700',
      'Snacks': 'bg-orange-100 text-orange-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const handleEdit = (productId) => {
    console.log('Edit product:', productId);
    alert(`Edit product: ${productId}`);
  };

  const handleDelete = (productId) => {
    console.log('Delete product:', productId);
    if (confirm(`Delete product ${productId}?`)) {
      // Handle delete logic
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Product</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">SKU</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Stock</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Barcode</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover object-top"
                        src={product.image}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{product.sku}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 ${getCategoryColor(product.category)} text-xs font-medium rounded-full`}>
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">{product.price}</td>
                <td className="px-6 py-4">
                  <span className={`text-sm font-semibold ${
                    product.stock < 20 ? 'text-red-600' : 'text-emerald-600'
                  }`}>
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 font-mono">{product.barcode}</td>
                <td className="px-6 py-4">
                  <button className="px-3 py-1 rounded-full text-xs font-semibold cursor-pointer whitespace-nowrap bg-emerald-100 text-emerald-700">
                    {product.status}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(product.id)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-blue-50 text-blue-600 rounded-lg transition-colors cursor-pointer"
                      title="Edit"
                    >
                      <i className="ri-edit-line text-lg"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-red-50 text-red-600 rounded-lg transition-colors cursor-pointer"
                      title="Delete"
                    >
                      <i className="ri-delete-bin-line text-lg"></i>
                    </button>
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
