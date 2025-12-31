import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrders } from '../../contexts/OrderContext';

export default function AttendantOrders() {
  const navigate = useNavigate();
  const { orders } = useOrders();
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [attendantInfo, setAttendantInfo] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem('attendant_auth');
    if (!auth) {
      navigate('/attendant/login');
      return;
    }
    setAttendantInfo(JSON.parse(auth));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('attendant_auth');
    navigate('/attendant/login');
  };

  const filteredOrders = orders.filter(order => {
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    const matchesSearch = order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-500';
      case 'packing':
        return 'bg-blue-500';
      case 'completed':
        return 'bg-emerald-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'packing':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const statusCounts = {
    all: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    packing: orders.filter(o => o.status === 'packing').length,
    completed: orders.filter(o => o.status === 'completed').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Logo & Greeting */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-linear-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <i className="ri-box-3-line text-white text-2xl"></i>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Hello, Staff Member</h1>
                <p className="text-sm text-gray-500">Staff ID: 2233444</p>
              </div>
            </div>

            {/* Right: Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap"
            >
              <i className="ri-logout-box-line text-lg"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div
            onClick={() => setFilterStatus('all')}
            className={`bg-white rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg ${
              filterStatus === 'all' ? 'ring-2 ring-teal-500 shadow-lg' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <i className="ri-file-list-3-line text-2xl text-gray-600"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900">{statusCounts.all}</div>
            </div>
            <p className="text-sm font-medium text-gray-600">All Orders</p>
          </div>

          <div
            onClick={() => setFilterStatus('pending')}
            className={`bg-white rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg ${
              filterStatus === 'pending' ? 'ring-2 ring-amber-500 shadow-lg' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <i className="ri-time-line text-2xl text-amber-600"></i>
              </div>
              <div className="text-3xl font-bold text-amber-600">{statusCounts.pending}</div>
            </div>
            <p className="text-sm font-medium text-gray-600">Pending</p>
          </div>

          <div
            onClick={() => setFilterStatus('packing')}
            className={`bg-white rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg ${
              filterStatus === 'packing' ? 'ring-2 ring-blue-500 shadow-lg' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <i className="ri-box-3-line text-2xl text-blue-600"></i>
              </div>
              <div className="text-3xl font-bold text-blue-600">{statusCounts.packing}</div>
            </div>
            <p className="text-sm font-medium text-gray-600">Packing</p>
          </div>

          <div
            onClick={() => setFilterStatus('completed')}
            className={`bg-white rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg ${
              filterStatus === 'completed' ? 'ring-2 ring-emerald-500 shadow-lg' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <i className="ri-checkbox-circle-line text-2xl text-emerald-600"></i>
              </div>
              <div className="text-3xl font-bold text-emerald-600">{statusCounts.completed}</div>
            </div>
            <p className="text-sm font-medium text-gray-600">Completed</p>
          </div>
        </div>

        {/* Search & View Toggle */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="ri-search-line text-gray-400 text-xl"></i>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search orders..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm shadow-sm"
            />
          </div>

          <div className="flex items-center gap-2 bg-white rounded-xl p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                viewMode === 'grid'
                  ? 'bg-teal-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <i className="ri-grid-line"></i>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                viewMode === 'list'
                  ? 'bg-teal-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <i className="ri-list-check"></i>
            </button>
          </div>
        </div>

        {/* Orders Display */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center shadow-sm">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-inbox-line text-5xl text-gray-300"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Orders Found</h3>
            <p className="text-gray-500">Try adjusting your filters or search</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOrders.map((order) => (
              <div
                key={order.orderId}
                onClick={() => navigate(`/attendant/orders/${order.orderId}`)}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100 hover:border-teal-300 group"
              >
                {/* Order Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">#{order.orderId}</h3>
                    <p className="text-sm text-gray-500">{order.orderTime}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(order.status)}`}></div>
                </div>

                {/* Customer Info */}
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="ri-user-line text-teal-500"></i>
                    <span className="text-sm font-medium text-gray-900">{order.customerName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-map-pin-line text-teal-500"></i>
                    <span className="text-sm text-gray-600">Counter #{order.pickupCounter}</span>
                  </div>
                </div>

                {/* Items Preview */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Items</p>
                  <div className="space-y-1">
                    {order.items.slice(0, 2).map((item, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-gray-700 truncate">{item.name}</span>
                        <span className="font-semibold text-gray-900 ml-2">×{item.quantity}</span>
                      </div>
                    ))}
                    {order.items.length > 2 && (
                      <p className="text-xs text-gray-500">+{order.items.length - 2} more items</p>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(order.status)} whitespace-nowrap`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                  <div className="flex items-center gap-1 text-teal-500 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">View</span>
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredOrders.map((order) => (
              <div
                key={order.orderId}
                onClick={() => navigate(`/attendant/orders/${order.orderId}`)}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all cursor-pointer border border-gray-100 hover:border-teal-300 group"
              >
                <div className="flex items-center gap-4">
                  {/* Status Indicator */}
                  <div className={`w-1 h-16 rounded-full ${getStatusColor(order.status)}`}></div>

                  {/* Order Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-base font-bold text-gray-900">#{order.orderId}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${getStatusBadge(order.status)} whitespace-nowrap`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <i className="ri-user-line text-teal-500"></i>
                        {order.customerName}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-time-line text-teal-500"></i>
                        {order.orderTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-map-pin-line text-teal-500"></i>
                        Counter #{order.pickupCounter}
                      </span>
                    </div>
                  </div>

                  {/* Items Count */}
                  <div className="text-center px-4">
                    <div className="text-2xl font-bold text-gray-900">{order.totalItems}</div>
                    <div className="text-xs text-gray-500">Items</div>
                  </div>

                  {/* Arrow */}
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-arrow-right-line text-xl text-gray-400 group-hover:text-teal-500 group-hover:translate-x-1 transition-all"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
