import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOrders } from '../../contexts/OrderContext';

export default function AttendantOrderID() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { orders, updateOrderStatus } = useOrders();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem('attendant_auth');
    if (!auth) {
      navigate('/attendant/login');
      return;
    }

    // Find the order from context - updates whenever orders change
    const foundOrder = orders.find(o => o.orderId === orderId);
    setOrder(foundOrder);
  }, [orderId, navigate, orders]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return 'ri-time-line';
      case 'packing':
        return 'ri-box-3-line';
      case 'completed':
        return 'ri-checkbox-circle-line';
      default:
        return 'ri-question-line';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'packing':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'completed':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const reportIssue = () => {
    // Mark as having an issue - change status to pending
    updateOrderStatus(orderId, 'pending');
    // Could show a modal or notification here
    alert('Issue reported. Order status updated to pending.');
  };

  const markAsPacked = () => {
    // Mark as completed
    updateOrderStatus(orderId, 'completed');
    alert('Order marked as packed and completed!');
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse mx-auto mb-4"></div>
          <p className="text-gray-500">Loading order...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/attendant/orders')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              <i className="ri-arrow-left-line text-xl"></i>
              <span className="font-medium">Back to Orders</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <i className="ri-shopping-bag-3-line text-white text-xl"></i>
              </div>
              <h1 className="text-lg font-bold text-gray-900">AutoSell</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Order Details */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Order #{order.orderId}</h2>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold border flex items-center gap-1 whitespace-nowrap ${getStatusColor(order.status)}`}>
                  <i className={`${getStatusIcon(order.status)}`}></i>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <i className="ri-user-line text-teal-500"></i>
                <span className="text-sm font-medium">Customer</span>
              </div>
              <p className="text-lg font-semibold text-gray-900">{order.customerName}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <i className="ri-time-line text-teal-500"></i>
                <span className="text-sm font-medium">Order Time</span>
              </div>
              <p className="text-lg font-semibold text-gray-900">{order.orderTime}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <i className="ri-map-pin-line text-teal-500"></i>
                <span className="text-sm font-medium">Pickup Counter</span>
              </div>
              <p className="text-lg font-semibold text-gray-900">Counter #{order.pickupCounter}</p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <i className="ri-shopping-cart-line text-teal-500"></i>
            Order Items
          </h3>

          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                  <i className="ri-box-3-line text-3xl text-teal-500"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">SKU: {item.sku}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Quantity:</span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-lg font-semibold text-sm">×{item.quantity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-700">Total Items:</span>
              <span className="text-2xl font-bold text-teal-600">{order.totalItems}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={reportIssue}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-red-500 text-red-600 rounded-xl font-semibold hover:bg-red-50 transition-all whitespace-nowrap"
          >
            <i className="ri-error-warning-line text-xl"></i>
            Report Issue
          </button>
          <button
            onClick={markAsPacked}
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all whitespace-nowrap bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 shadow-lg hover:shadow-xl"
          >
            <i className="ri-checkbox-circle-line text-xl"></i>
            Mark as Packed
          </button>
        </div>
      </div>
    </div>
  );
}
