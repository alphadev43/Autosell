import { useNavigate, useLocation } from 'react-router-dom';

export default function PaymentSuccessfulPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get total amount from navigation state, fallback to 0
  const totalAmount = location.state?.totalAmount || 0;

  // Generate unique order details (computed on mount)
  const orderId = `AUTO-${Date.now()}`;
  const pickupNumber = Math.floor(1000 + Math.random() * 9000).toString();

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const handleViewReceipt = () => {
    navigate('/ReceiptPage', {
      state: {
        orderId,
        pickupNumber,
        totalAmount,
        date: currentDate
      }
    });
  };

  const handleNewOrder = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
          {/* Success Animation */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <i className="ri-checkbox-circle-fill text-5xl text-green-600"></i>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Payment Successful!</h1>
            <p className="text-lg text-gray-600">Thank you for your purchase</p>
          </div>

          {/* Order Details */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Order ID</p>
                <p className="text-xl font-bold text-gray-900">{orderId}</p>
              </div>

              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Pickup Number</p>
                <p className="text-4xl font-bold text-teal-600">{pickupNumber}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Amount Paid</span>
                <span className="text-2xl font-bold text-gray-900">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Date & Time</span>
                <span className="text-gray-700">{currentDate}</span>
              </div>
            </div>
          </div>

          {/* Pickup Instructions */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-information-line text-2xl text-amber-600"></i>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 mb-2">Pickup Instructions</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Please proceed to the pickup counter and show your pickup number <strong className="text-amber-700">#{pickupNumber}</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Your order will be ready in approximately 5-10 minutes
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleViewReceipt}
              className="flex-1 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              <i className="ri-file-text-line mr-2"></i>
              View Receipt
            </button>

            <button
              onClick={handleNewOrder}
              className="flex-1 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              <i className="ri-shopping-cart-line mr-2"></i>
              New Order
            </button>
          </div>

          {/* Additional Options */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-mail-line"></i>
                Email Receipt
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-printer-line"></i>
                Print Receipt
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-customer-service-2-line"></i>
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="text-center mt-8">
          <img
            src="https://public.readdy.ai/ai/img_res/c08ffdda-535b-46d3-ace4-23365ca4e6e0.png"
            alt="AutoSell"
            className="h-12 w-auto object-contain mx-auto opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
