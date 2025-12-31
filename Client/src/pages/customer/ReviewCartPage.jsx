import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ReviewCartPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [cartItems, setCartItems] = useState(location.state?.cartItems || []);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleProceedToPayment = () => {
    navigate('/PaymentPage', {
      state: {
        totalAmount: getFinalTotal()
      }
    });
  };

  const handleBack = () => {
    navigate('/CartingPage');
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE10') {
      setAppliedCoupon({ code: couponCode, discount: 0.1 });
      setCouponCode('');
    } else if (couponCode.toUpperCase() === 'WELCOME20') {
      setAppliedCoupon({ code: couponCode, discount: 0.2 });
      setCouponCode('');
    }
  };

  const getSubtotal = () => cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const getDiscount = () => appliedCoupon ? getSubtotal() * appliedCoupon.discount : 0;
  const getTax = () => (getSubtotal() - getDiscount()) * 0.08;
  const getFinalTotal = () => getSubtotal() - getDiscount() + getTax();

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            <span className="font-medium">Continue Shopping</span>
          </button>

          <div className="flex items-center gap-2">
            <img
              src="https://public.readdy.ai/ai/img_res/c08ffdda-535b-46d3-ace4-23365ca4e6e0.png"
              alt="AutoSell"
              className="h-10 w-auto object-contain"
            />
          </div>

          <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors cursor-pointer whitespace-nowrap">
            <i className="ri-customer-service-2-line text-xl"></i>
            <span className="font-medium">Need Help?</span>
          </button>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Review Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-24 h-24 bg-white rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                        >
                          <i className="ri-delete-bin-line text-xl"></i>
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center bg-white rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 cursor-pointer"
                          >
                            <i className="ri-subtract-line"></i>
                          </button>
                          <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-white rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 cursor-pointer"
                          >
                            <i className="ri-add-line"></i>
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                          <p className="text-lg font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700 mb-3">Have a coupon code?</p>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none text-sm"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all whitespace-nowrap cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {appliedCoupon && (
                  <div className="mt-3 flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-fill text-green-600"></i>
                      <span className="text-sm font-medium text-green-800">
                        Coupon "{appliedCoupon.code}" applied ({(appliedCoupon.discount * 100).toFixed(0)}% off)
                      </span>
                    </div>
                    <button
                      onClick={() => setAppliedCoupon(null)}
                      className="text-sm text-green-700 hover:text-green-900 cursor-pointer whitespace-nowrap"
                    >
                      Remove
                    </button>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-2">Try: SAVE10 or WELCOME20</p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">${getSubtotal().toFixed(2)}</span>
                </div>

                {appliedCoupon && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span className="font-medium">-${getDiscount().toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span className="font-medium">${getTax().toFixed(2)}</span>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-teal-600">${getFinalTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleProceedToPayment}
                className="w-full py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Proceed to Payment
                <i className="ri-arrow-right-line ml-2"></i>
              </button>

              {/* Security Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <i className="ri-shield-check-line text-green-600"></i>
                  <span>Secure checkout guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
