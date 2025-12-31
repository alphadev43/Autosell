import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get total amount from navigation state, fallback to default
  const totalAmount = location.state?.totalAmount || 0;

  const [selectedMethod, setSelectedMethod] = useState('card');
  const [processing, setProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: 'ri-bank-card-line', color: 'teal' },
    { id: 'bank', name: 'Bank Transfer', icon: 'ri-bank-line', color: 'emerald' },
    { id: 'wallet', name: 'AutoSell Wallet', icon: 'ri-wallet-3-line', color: 'cyan' },
    { id: 'ussd', name: 'USSD', icon: 'ri-phone-line', color: 'indigo' },
    { id: 'paystack', name: 'Paystack/Flutterwave', icon: 'ri-secure-payment-line', color: 'violet' },
  ];

  const handlePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      handlePaymentSuccess();
    }, 2000);
  };

  const handlePaymentSuccess = () => {
    navigate('/PaymentSuccessfulPage', {
      state: { totalAmount }
    });
  };

  const handleBack = () => {
    navigate('/ReviewCartPage');
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            <span className="font-medium">Back to Cart</span>
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

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Payment</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Select Payment Method</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-left cursor-pointer ${
                      selectedMethod === method.id
                        ? `border-${method.color}-600 bg-${method.color}-50`
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-${method.color}-100 rounded-lg flex items-center justify-center`}>
                        <i className={`${method.icon} text-2xl text-${method.color}-600`}></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{method.name}</p>
                      </div>
                      {selectedMethod === method.id && (
                        <i className={`ri-checkbox-circle-fill text-2xl text-${method.color}-600`}></i>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Payment Form */}
              <div className="pt-6 border-t border-gray-200">
                {selectedMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          placeholder="123"
                          maxLength={3}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none text-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {selectedMethod === 'bank' && (
                  <div className="text-center py-8">
                    <i className="ri-bank-line text-5xl text-emerald-600 mb-4"></i>
                    <h4 className="font-semibold text-gray-900 mb-2">Bank Transfer Details</h4>
                    <p className="text-sm text-gray-600 mb-4">Transfer to the account below</p>
                    <div className="bg-gray-50 rounded-xl p-4 text-left max-w-sm mx-auto">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Bank Name:</span>
                          <span className="text-sm font-semibold">AutoSell Bank</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Account Number:</span>
                          <span className="text-sm font-semibold">1234567890</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Account Name:</span>
                          <span className="text-sm font-semibold">AutoSell Ltd</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedMethod === 'wallet' && (
                  <div className="text-center py-8">
                    <i className="ri-wallet-3-line text-5xl text-cyan-600 mb-4"></i>
                    <h4 className="font-semibold text-gray-900 mb-2">AutoSell Wallet</h4>
                    <p className="text-sm text-gray-600 mb-4">Available Balance: $250.00</p>
                    <div className="bg-cyan-50 rounded-xl p-4 max-w-sm mx-auto">
                      <p className="text-sm text-cyan-800">Your wallet has sufficient balance for this purchase</p>
                    </div>
                  </div>
                )}

                {selectedMethod === 'ussd' && (
                  <div className="text-center py-8">
                    <i className="ri-phone-line text-5xl text-indigo-600 mb-4"></i>
                    <h4 className="font-semibold text-gray-900 mb-2">USSD Payment</h4>
                    <p className="text-sm text-gray-600 mb-4">Dial the code below on your phone</p>
                    <div className="bg-indigo-50 rounded-xl p-6 max-w-sm mx-auto">
                      <p className="text-3xl font-bold text-indigo-900 mb-2">*737*50*Amount#</p>
                      <p className="text-sm text-indigo-700">Follow the prompts to complete payment</p>
                    </div>
                  </div>
                )}

                {selectedMethod === 'paystack' && (
                  <div className="text-center py-8">
                    <i className="ri-secure-payment-line text-5xl text-violet-600 mb-4"></i>
                    <h4 className="font-semibold text-gray-900 mb-2">Paystack/Flutterwave</h4>
                    <p className="text-sm text-gray-600 mb-4">You will be redirected to complete payment</p>
                    <div className="flex justify-center gap-4">
                      <div className="bg-violet-50 rounded-xl p-4">
                        <p className="text-sm font-semibold text-violet-900">Paystack</p>
                      </div>
                      <div className="bg-violet-50 rounded-xl p-4">
                        <p className="text-sm font-semibold text-violet-900">Flutterwave</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Payment Summary</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Amount to Pay</span>
                  <span className="font-medium">${totalAmount.toFixed(2)}</span>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-teal-600">${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePayment}
                disabled={processing}
                className="w-full py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {processing ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="ri-loader-4-line animate-spin"></i>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <i className="ri-secure-payment-line"></i>
                    Pay Now
                  </span>
                )}
              </button>

              {/* Security Info */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <i className="ri-shield-check-line text-green-600"></i>
                  <span>256-bit SSL encryption</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <i className="ri-lock-line text-green-600"></i>
                  <span>PCI DSS compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <i className="ri-shield-star-line text-green-600"></i>
                  <span>100% secure payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
