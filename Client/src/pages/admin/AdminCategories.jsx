import { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminCategoryStats from '../../components/admin/AdminCategoryStats';
import AdminCategoryGrid from '../../components/admin/AdminCategoryGrid';
import AdminCategoryModal from '../../components/admin/AdminCategoryModal';

export default function AdminCategories() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('categories');
  const [showAddModal, setShowAddModal] = useState(false);

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
  };

  const handleAddCategory = (categoryData) => {
    console.log('Adding category:', categoryData);
    alert(`Category "${categoryData.name}" created successfully!\nDescription: ${categoryData.description}\nProducts: ${categoryData.productCount}`);
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
                <h1 className="text-3xl font-bold text-gray-900">Category Management</h1>
                <p className="text-gray-600 mt-1">Organize your products into categories</p>
              </div>
              <button
                onClick={openAddModal}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg whitespace-nowrap flex items-center gap-2 cursor-pointer"
              >
                <i className="ri-add-line text-xl"></i>
                Add New Category
              </button>
            </div>

            {/* Category Statistics */}
            <AdminCategoryStats />

            {/* Search Bar */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="relative">
                <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                <input
                  placeholder="Search categories by name or description..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  type="text"
                />
              </div>
            </div>

            {/* Categories Grid */}
            <AdminCategoryGrid />
          </div>
        </main>
      </div>

      {/* Add Category Modal */}
      <AdminCategoryModal
        isOpen={showAddModal}
        onClose={closeAddModal}
        onSubmit={handleAddCategory}
      />
    </div>
  );
}
