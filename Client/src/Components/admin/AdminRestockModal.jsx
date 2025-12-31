import { useState } from 'react';

export default function AdminRestockModal({ isOpen, onClose, onConfirm, product }) {
  const [quantity, setQuantity] = useState('');

  if (!isOpen || !product) return null;

  const currentQuantity = product.currentStock || 0;
  const newQuantity = currentQuantity + parseInt(quantity || 0);
  const maxStock = product.maxStock || 0;
  const wouldExceedMax = newQuantity > maxStock;

  const handleConfirm = () => {
    const qty = parseInt(quantity);
    if (qty > 0) {
      onConfirm(product, qty);
      onClose();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && quantity > 0) {
      handleConfirm();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Restock Product</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl text-gray-600"></i>
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Product Information */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 text-sm">{product.name}</h3>
            <p className="text-xs text-gray-500 mt-1">SKU: {product.sku}</p>

            {/* Current Stock Display */}
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm text-gray-600">Current Stock:</span>
              <span className="font-semibold text-gray-900">{currentQuantity} units</span>
            </div>

            {/* Max Stock Display */}
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm text-gray-600">Max Capacity:</span>
              <span className="font-semibold text-gray-900">{maxStock} units</span>
            </div>
          </div>

          {/* Quantity Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Quantity to Add *
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              placeholder="Enter quantity..."
            />
          </div>

          {/* Preview New Stock */}
          {quantity && parseInt(quantity) > 0 && (
            <div className={`rounded-lg p-4 ${wouldExceedMax ? 'bg-red-50 border border-red-200' : 'bg-emerald-50 border border-emerald-200'}`}>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">New Stock Level:</span>
                <span className={`font-bold text-lg ${wouldExceedMax ? 'text-red-600' : 'text-emerald-600'}`}>
                  {newQuantity} units
                </span>
              </div>
              <div className="text-xs text-gray-600 mt-1">
                Stock level will be {((newQuantity / maxStock) * 100).toFixed(1)}% of max capacity
              </div>
              {wouldExceedMax && (
                <div className="text-xs text-red-600 mt-2 flex items-center gap-1">
                  <i className="ri-error-warning-line"></i>
                  This will exceed maximum stock capacity
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={!quantity || parseInt(quantity) <= 0}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm Restock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
