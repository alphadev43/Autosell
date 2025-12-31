import { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminProductStats from '../../components/admin/AdminProductStats';
import AdminProductTable from '../../components/admin/AdminProductTable';
import AdminProductModal from '../../components/admin/AdminProductModal';

export default function AdminProducts() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('products');
  const [showAddModal, setShowAddModal] = useState(false);

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
  };

  const handleAddProduct = (productData) => {
    console.log('Adding product:', productData);
    alert(`Product "${productData.name}" added successfully!\nSKU: ${productData.sku}\nCategory: ${productData.category}\nPrice: ₦${productData.price}\nStock: ${productData.stock}`);
  };

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar
        collapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <AdminHeader />

        <main className="p-6">
          <div className="space-y-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
                <p className="text-gray-600 mt-1">Manage your store inventory and products</p>
              </div>
              <button
                onClick={openAddModal}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-add-line text-xl"></i>
                Add New Product
              </button>
            </div>

            {/* Search & Category Filter */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                  <input
                    placeholder="Search products by name or SKU..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    type="text"
                  />
                </div>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm cursor-pointer">
                  <option value="all">All Categories</option>
                  <option value="Grains">Grains</option>
                  <option value="Cooking">Cooking</option>
                  <option value="Canned">Canned</option>
                  <option value="Sweeteners">Sweeteners</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Beverages">Beverages</option>
                  <option value="Snacks">Snacks</option>
                </select>
              </div>
            </div>

            {/* Product Statistics */}
            <AdminProductStats />

            {/* Products Table */}
            <AdminProductTable />
          </div>
        </main>
      </div>

      {/* Add Product Modal */}
      <AdminProductModal
        isOpen={showAddModal}
        onClose={closeAddModal}
        onSubmit={handleAddProduct}
      />
    </div>
  );
}
