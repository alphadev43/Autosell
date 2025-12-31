import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockProducts } from '../../data/mockProducts';
import BarcodeScanner from '../../Components/customer/BarcodeScanner';

export default function CartingPage() {
  const [cartItems, setCartItems] = useState([]);
  const [scanMode, setScanMode] = useState('camera');
  const [manualInput, setManualInput] = useState('');
  const [lastScanned, setLastScanned] = useState('');
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    // Check if item already exists in cart
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      // Update quantity
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      // Add new item
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const handleProceedToCart = () => {
    navigate('/ReviewCartPage', {
      state: {
        cartItems: cartItems,
        totalAmount: getTotalAmount()
      }
    }); // Navigate to review cart page with cart data
  };

  const handleBack = () => {
    navigate('/'); // Navigate back to landing page
  };

  const handleBarcodeScan = (scannedCode) => {
    setLastScanned(scannedCode);
    // Look up product by barcode first, then SKU, then ID
    const product = mockProducts.find(p =>
      p.barcode === scannedCode || p.sku === scannedCode || p.id === scannedCode
    );

    if (product) {
      handleAddToCart(product);
    } else {
      alert(`Product with barcode "${scannedCode}" not found. You can try manual entry or contact staff for assistance.`);
    }
  };

  const handleScanError = (error) => {
    alert(`Scan error: ${error}`);
  };

  const handleManualAdd = () => {
    if (manualInput.trim()) {
      const product = mockProducts.find(p =>
        p.sku.toLowerCase().includes(manualInput.toLowerCase()) ||
        p.id.toLowerCase().includes(manualInput.toLowerCase())
      );
      if (product) {
        handleAddToCart(product);
        setManualInput('');
      }
    }
  };

  const getTotalAmount = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            <span className="font-medium">Back</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Scanner Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Scan or Add Products</h2>

              {/* Mode Selector */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setScanMode('camera')}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all whitespace-nowrap cursor-pointer ${
                    scanMode === 'camera'
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <i className="ri-camera-line mr-2"></i>
                  Camera Scan
                </button>
                <button
                  onClick={() => setScanMode('manual')}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all whitespace-nowrap cursor-pointer ${
                    scanMode === 'manual'
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <i className="ri-keyboard-line mr-2"></i>
                  Manual Entry
                </button>
              </div>

              {/* Scanner Interface */}
              {scanMode === 'camera' && (
                <div className="mb-6">
                  <BarcodeScanner
                    onScan={handleBarcodeScan}
                    onError={handleScanError}
                    onClose={() => {}}
                  />
                  {lastScanned && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-700">Last Scanned Code:</p>
                      <p className="text-sm text-gray-900 font-mono">{lastScanned}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Manual Input */}
              {scanMode === 'manual' && (
                <div className="mb-6">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={manualInput}
                      onChange={(e) => setManualInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleManualAdd()}
                      placeholder="Enter Product ID or SKU (e.g., P001, FRT-APL-001)"
                      className="flex-1 px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none text-sm"
                    />
                    <button
                      onClick={handleManualAdd}
                      className="px-6 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-add-line text-xl"></i>
                    </button>
                  </div>

                  {/* Quick Add Products */}
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-700 mb-3">Quick Add:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {mockProducts.slice(0, 6).map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleAddToCart(product)}
                          className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all text-left cursor-pointer group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-lg overflow-hidden shrink-0">
                              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                              <p className="text-xs text-gray-500">${product.price.toFixed(2)}</p>
                            </div>
                            <i className="ri-add-circle-line text-xl text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Cart</h3>

              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <i className="ri-shopping-cart-line text-5xl text-gray-300 mb-3"></i>
                  <p className="text-gray-500">Your cart is empty</p>
                  <p className="text-sm text-gray-400 mt-1">Start scanning products</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-white rounded-lg overflow-hidden shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                          <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center bg-white rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                          >
                            <i className="ri-subtract-line text-sm"></i>
                          </button>
                          <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center bg-white rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                          >
                            <i className="ri-add-line text-sm"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Items ({getTotalItems()})</span>
                      <span className="text-sm font-medium text-gray-900">${getTotalAmount().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-teal-600">${getTotalAmount().toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleProceedToCart}
                    className="w-full py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                  >
                    Review Cart
                    <i className="ri-arrow-right-line ml-2"></i>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
