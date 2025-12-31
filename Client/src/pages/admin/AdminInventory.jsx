import { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminInventoryAlerts from '../../components/admin/AdminInventoryAlerts';
import AdminInventoryStats from '../../components/admin/AdminInventoryStats';
import AdminInventoryTable from '../../components/admin/AdminInventoryTable';

export default function AdminInventory() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('inventory');

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
  };

  const bulkImportCSV = () => {
    alert('Bulk CSV Import functionality would open file picker');
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
                <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
                <p className="text-gray-600 mt-1">Track and manage stock levels</p>
              </div>
              <button
                onClick={bulkImportCSV}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-file-upload-line text-xl"></i>
                Bulk Import CSV
              </button>
            </div>

            {/* Inventory Alerts */}
            <AdminInventoryAlerts />

            {/* Inventory Statistics */}
            <AdminInventoryStats />

            {/* Search & Filter */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                  <input
                    placeholder="Search by product name or SKU..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    type="text"
                  />
                </div>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm cursor-pointer">
                  <option value="all">All Status</option>
                  <option value="in-stock">In Stock</option>
                  <option value="low-stock">Low Stock</option>
                  <option value="out-of-stock">Out of Stock</option>
                </select>
              </div>
            </div>

            {/* Inventory Table */}
            <AdminInventoryTable />
          </div>
        </main>
      </div>
    </div>
  );
}
