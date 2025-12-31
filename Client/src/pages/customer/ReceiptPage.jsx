import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ReceiptPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get order data from navigation state
  const orderData = location.state || {};
  const { orderId = 'AUTO-DEMO', pickupNumber = '1234', totalAmount = 0 } = orderData;

  // Sample cart items for demo (in real app this would come from state)
  const [cartItems] = useState([
    { id: 'P001', name: 'Fresh Organic Apples', price: 4.99, quantity: 2, sku: 'FRT-APL-001' },
    { id: 'P002', name: 'Whole Grain Bread', price: 3.49, quantity: 1, sku: 'BKY-BRD-002' },
    { id: 'P003', name: 'Premium Coffee Beans', price: 12.99, quantity: 2, sku: 'BEV-COF-003' }
  ]);

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Simulate download
    alert('Receipt downloaded successfully!');
  };

  const handleNewOrder = () => {
    navigate('/');
  };

  const subtotal = totalAmount;
  const tax = totalAmount * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-6 print:hidden">
          <h1 className="text-2xl font-bold text-gray-900">Digital Receipt</h1>
          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="px-6 py-3 bg-white text-gray-700 font-medium rounded-xl hover:bg-gray-50 border border-gray-200 transition-all whitespace-nowrap cursor-pointer"
            >
              <i className="ri-printer-line mr-2"></i>
              Print
            </button>
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-white text-gray-700 font-medium rounded-xl hover:bg-gray-50 border border-gray-200 transition-all whitespace-nowrap cursor-pointer"
            >
              <i className="ri-download-line mr-2"></i>
              Download
            </button>
            <button
              onClick={handleNewOrder}
              className="px-6 py-3 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 transition-all whitespace-nowrap cursor-pointer"
            >
              <i className="ri-shopping-cart-line mr-2"></i>
              New Order
            </button>
          </div>
        </div>

        {/* Receipt */}
        <div className="bg-white rounded-2xl shadow-lg p-12 print:shadow-none print:rounded-none">
          {/* Header */}
          <div className="text-center mb-8 pb-8 border-b-2 border-gray-200">
            <img
              src="https://public.readdy.ai/ai/img_res/c08ffdda-535b-46d3-ace4-23365ca4e6e0.png"
              alt="AutoSell"
              className="h-20 w-auto object-contain mx-auto mb-4"
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">AutoSell</h2>
            <p className="text-gray-600">Self-Checkout Receipt</p>
          </div>

          {/* Order Info */}
          <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200">
            <div>
              <p className="text-sm text-gray-500 mb-1">Order ID</p>
              <p className="text-lg font-bold text-gray-900">{orderId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Pickup Number</p>
              <p className="text-lg font-bold text-teal-600">{pickupNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Date & Time</p>
              <p className="text-sm font-medium text-gray-900">{currentDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Payment Method</p>
              <p className="text-sm font-medium text-gray-900">Credit Card</p>
            </div>
          </div>

          {/* Items */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Items Purchased</h3>
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-start py-3 border-b border-gray-100">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Totals */}
          <div className="space-y-3 mb-8 pb-8 border-b-2 border-gray-200">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax (8%)</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-gray-200">
              <span className="text-xl font-bold text-gray-900">Total Paid</span>
              <span className="text-2xl font-bold text-teal-600">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center space-y-4">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-sm font-medium text-gray-900 mb-2">Thank you for shopping with AutoSell!</p>
              <p className="text-sm text-gray-600">
                Please show your pickup number <strong className="text-teal-600">#{pickupNumber}</strong> at the counter
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">AutoSell Self-Checkout System</p>
              <p className="text-xs text-gray-500">For support, contact: support@autosell.com | +1 (555) 123-4567</p>
              <p className="text-xs text-gray-400 mt-2">Receipt generated on {currentDate}</p>
            </div>

            {/* Barcode Simulation */}
            <div className="pt-6">
              <div className="bg-gray-900 h-20 rounded-lg flex items-center justify-center">
                <div className="flex gap-1">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-white"
                      style={{
                        width: Math.random() > 0.5 ? '3px' : '2px',
                        height: Math.random() * 40 + 40 + 'px'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">{orderId}</p>
            </div>
          </div>
        </div>

        {/* Print Styles */}
        <style>{`
          @media print {
            body {
              background: white;
            }
            .print\\:hidden {
              display: none !important;
            }
            .print\\:shadow-none {
              box-shadow: none !important;
            }
            .print\\:rounded-none {
              border-radius: 0 !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
