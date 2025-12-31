import { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminMetricsCards from '../../components/admin/AdminMetricsCards';
import AdminRevenueChart from '../../components/admin/AdminRevenueChart';
import AdminPaymentMethods from '../../components/admin/AdminPaymentMethods';
import AdminTopProducts from '../../components/admin/AdminTopProducts';
import AdminRecentOrders from '../../components/admin/AdminRecentOrders';

export default function AdminDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
  };

  const timeRanges = [
    { key: 'today', label: 'Today' },
    { key: '7days', label: 'Last 7 Days' },
    { key: '30days', label: 'Last 30 Days' },
    { key: '90days', label: 'Last 90 Days' },
    { key: 'year', label: 'This Year' }
  ];

  const exportReport = () => {
    alert('Exporting report...');
    // TODO: Implement report export functionality
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
                <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-600 mt-1">Monitor your store performance and analytics</p>
              </div>
              <div className="flex items-center gap-3">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm cursor-pointer">
                  {timeRanges.map(range => (
                    <option key={range.key} value={range.key}>{range.label}</option>
                  ))}
                </select>
                <button
                  onClick={exportReport}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-medium hover:from-teal-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg whitespace-nowrap flex items-center gap-2"
                >
                  <i className="ri-download-line"></i>
                  Export Report
                </button>
              </div>
            </div>

            {/* Metrics Cards */}
            <AdminMetricsCards />

            {/* Charts Section */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <AdminRevenueChart />
              </div>
              <div>
                <AdminPaymentMethods />
              </div>
            </div>

            {/* Products and Orders Section */}
            <div className="grid lg:grid-cols-2 gap-6">
              <AdminTopProducts />
              <AdminRecentOrders />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
