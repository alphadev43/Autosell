import { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminStaffStats from '../../components/admin/AdminStaffStats';
import AdminStaffGrid from '../../components/admin/AdminStaffGrid';

export default function AdminStaff() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('staff');

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
  };

  const addNewStaff = () => {
    alert('Add new staff member functionality');
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
                <h1 className="text-3xl font-bold text-gray-900">Staff Management</h1>
                <p className="text-gray-600 mt-1">Manage team members and permissions</p>
              </div>
              <button
                onClick={addNewStaff}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-user-add-line text-xl"></i>
                Add Staff Member
              </button>
            </div>

            {/* Staff Statistics */}
            <AdminStaffStats />

            {/* Search & Filter */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                  <input
                    placeholder="Search by name or email..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    type="text"
                  />
                </div>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm cursor-pointer">
                  <option value="all">All Roles</option>
                  <option value="owner">Owner</option>
                  <option value="manager">Manager</option>
                  <option value="attendant">Attendant</option>
                  <option value="auditor">Auditor</option>
                </select>
              </div>
            </div>

            {/* Staff Grid */}
            <AdminStaffGrid />
          </div>
        </main>
      </div>
    </div>
  );
}
