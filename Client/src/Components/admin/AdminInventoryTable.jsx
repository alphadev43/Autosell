import { useState } from 'react';
import AdminRestockModal from './AdminRestockModal';

export default function AdminInventoryTable() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showRestockModal, setShowRestockModal] = useState(false);

  const handleRestockClick = (product) => {
    setSelectedProduct(product);
    setShowRestockModal(true);
  };

  const handleRestockConfirm = (product, quantity) => {
    console.log(`Restocking ${product.name} with ${quantity} units`);
    alert(`Successfully restocked ${product.name} with ${quantity} units!\nNew stock level: ${product.currentStock + quantity} units`);
    setSelectedProduct(null);
    setShowRestockModal(false);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowRestockModal(false);
  };

  const inventory = [
    {
      id: 'P001',
      name: 'Premium Rice 50kg',
      sku: 'RICE-50KG-001',
      category: 'Grains',
      currentStock: 156,
      minStock: 50,
      maxStock: 300,
      lastRestocked: '2024-01-15',
      status: 'in-stock'
    },
    {
      id: 'P002',
      name: 'Vegetable Oil 5L',
      sku: 'OIL-5L-002',
      category: 'Cooking',
      currentStock: 89,
      minStock: 30,
      maxStock: 150,
      lastRestocked: '2024-01-14',
      status: 'in-stock'
    },
    {
      id: 'P003',
      name: 'Tomato Paste 400g',
      sku: 'TOM-400G-003',
      category: 'Canned',
      currentStock: 234,
      minStock: 100,
      maxStock: 400,
      lastRestocked: '2024-01-16',
      status: 'in-stock'
    },
    {
      id: 'P004',
      name: 'Sugar 2kg',
      sku: 'SUG-2KG-004',
      category: 'Sweeteners',
      currentStock: 12,
      minStock: 40,
      maxStock: 200,
      lastRestocked: '2024-01-10',
      status: 'low-stock'
    },
    {
      id: 'P005',
      name: 'Milk Powder 900g',
      sku: 'MILK-900G-005',
      category: 'Dairy',
      currentStock: 67,
      minStock: 30,
      maxStock: 120,
      lastRestocked: '2024-01-13',
      status: 'in-stock'
    },
    {
      id: 'P006',
      name: 'Instant Noodles Pack',
      sku: 'NOOD-PACK-006',
      category: 'Snacks',
      currentStock: 0,
      minStock: 50,
      maxStock: 250,
      lastRestocked: '2024-01-05',
      status: 'out-of-stock'
    },
    {
      id: 'P007',
      name: 'Canned Beans 500g',
      sku: 'BEAN-500G-007',
      category: 'Canned',
      currentStock: 18,
      minStock: 40,
      maxStock: 180,
      lastRestocked: '2024-01-12',
      status: 'low-stock'
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

  const getStatusColor = (status) => {
    const colors = {
      'in-stock': 'bg-emerald-100 text-emerald-700',
      'low-stock': 'bg-amber-100 text-amber-700',
      'out-of-stock': 'bg-red-100 text-red-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getStockBarColor = (status) => {
    const colors = {
      'in-stock': 'bg-emerald-500',
      'low-stock': 'bg-amber-500',
      'out-of-stock': 'bg-red-500'
    };
    return colors[status] || 'bg-gray-500';
  };

  const calculateStockPercentage = (current, max) => {
    return Math.min((current / max) * 100, 100);
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
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Current Stock</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Min / Max</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Last Restocked</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {inventory.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.id}</p>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 font-mono">{item.sku}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 ${getCategoryColor(item.category)} text-xs font-medium rounded-full`}>
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-gray-900">{item.currentStock} units</p>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all ${getStockBarColor(item.status)}`}
                        style={{ width: `${calculateStockPercentage(item.currentStock, item.maxStock)}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{item.minStock} / {item.maxStock}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{item.lastRestocked}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusColor(item.status)}`}>
                    {item.status.replace('-', ' ')}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleRestockClick(item)}
                    className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Restock
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Restock Modal */}
      <AdminRestockModal
        isOpen={showRestockModal}
        onClose={handleCloseModal}
        onConfirm={handleRestockConfirm}
        product={selectedProduct}
      />
    </div>
  );
}
