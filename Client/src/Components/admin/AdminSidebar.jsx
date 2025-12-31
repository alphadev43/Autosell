import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function AdminSidebar({ collapsed, onToggle, currentPage, onPageChange }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Automatically determine current page from URL
  useEffect(() => {
    const pathToPageId = {
      '/admin/dashboard': 'dashboard',
      '/admin/products': 'products',
      '/admin/categories': 'categories',
      '/admin/inventory': 'inventory',
      '/admin/orders': 'orders',
      '/admin/staff': 'staff',
      '/admin/settings': 'settings'
    };

    const currentPath = location.pathname;
    const pageId = pathToPageId[currentPath] || 'dashboard';
    if (currentPage !== pageId) {
      onPageChange(pageId);
    }
  }, [location.pathname, currentPage, onPageChange]);

  const menuItems = [
    { id: 'dashboard', icon: 'ri-dashboard-line', label: 'Dashboard', path: '/admin/dashboard' },
    { id: 'products', icon: 'ri-shopping-bag-3-line', label: 'Products', path: '/admin/products' },
    { id: 'categories', icon: 'ri-folder-line', label: 'Categories', path: '/admin/categories' },
    { id: 'inventory', icon: 'ri-stack-line', label: 'Inventory', path: '/admin/inventory' },
    { id: 'orders', icon: 'ri-file-list-3-line', label: 'Orders', path: '/admin/orders' },
    { id: 'staff', icon: 'ri-team-line', label: 'Staff', path: '/admin/staff' },
    { id: 'settings', icon: 'ri-settings-3-line', label: 'Settings', path: '/admin/settings' },
  ];

  const handleMenuClick = (menuItem) => {
    onPageChange(menuItem.id);
    navigate(menuItem.path);
  };

  return (
    <aside className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <i className="ri-shopping-bag-3-line text-white text-xl"></i>
              </div>
              <span className="font-bold text-gray-900 text-lg">AutoSell</span>
            </div>
          )}
          <button
            onClick={onToggle}
            className={`w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer ${
              collapsed ? 'mx-auto' : ''
            }`}
          >
            <i className={`text-gray-600 text-xl transition-transform duration-300 ${
              collapsed ? 'ri-menu-unfold-line' : 'ri-menu-fold-line'
            }`}></i>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(item)}
              className={`w-full flex items-center ${collapsed ? 'justify-center px-2' : 'gap-3 px-4'} py-3 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              title={collapsed ? item.label : ''}
            >
              <i className={`${item.icon} text-xl`}></i>
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className={`p-4 border-t border-gray-200 ${collapsed ? 'py-4' : ''}`}>
          {collapsed ? (
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">Admin User</p>
                <p className="text-xs text-gray-500 capitalize">attendant</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
