import { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminSettingsNavigation from '../../components/admin/AdminSettingsNavigation';
import AdminSettingsCustomization from '../../components/admin/AdminSettingsCustomization';

export default function AdminSettings() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('settings');
  const [activeSection, setActiveSection] = useState('brand');

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
  };

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  const saveChanges = () => {
    alert('Settings saved successfully!');
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
                <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-600 mt-1">Configure your store preferences</p>
              </div>
              <button
                onClick={saveChanges}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-save-line text-xl"></i>
                Save Changes
              </button>
            </div>

            {/* Settings Content */}
            <div className="grid lg:grid-cols-4 gap-6">
              <AdminSettingsNavigation
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
              />
              <AdminSettingsCustomization />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
