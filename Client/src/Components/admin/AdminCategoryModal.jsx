import { useState } from 'react';

export default function AdminCategoryModal({ isOpen, onClose, onSubmit }) {
  const [selectedIcon, setSelectedIcon] = useState('ri-folder-line');
  const [selectedColor, setSelectedColor] = useState('rgb(20, 184, 166)');
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const icons = [
    { id: 'ri-folder-line', name: 'Folder' },
    { id: 'ri-plant-line', name: 'Plant' },
    { id: 'ri-fire-line', name: 'Fire' },
    { id: 'ri-archive-line', name: 'Archive' },
    { id: 'ri-cake-3-line', name: 'Cake' },
    { id: 'ri-cup-line', name: 'Cup' },
    { id: 'ri-goblet-line', name: 'Goblet' },
    { id: 'ri-restaurant-line', name: 'Restaurant' },
    { id: 'ri-fridge-line', name: 'Fridge' },
    { id: 'ri-shopping-bag-3-line', name: 'Bag' },
    { id: 'ri-gift-line', name: 'Gift' },
    { id: 'ri-heart-line', name: 'Heart' },
    { id: 'ri-star-line', name: 'Star' },
    { id: 'ri-flashlight-line', name: 'Flash' }
  ];

  const colors = [
    'rgb(20, 184, 166)',   // Teal (default)
    'rgb(59, 130, 246)',   // Blue
    'rgb(139, 92, 246)',   // Purple
    'rgb(236, 72, 153)',   // Pink
    'rgb(245, 158, 11)',   // Amber
    'rgb(239, 68, 68)',    // Red
    'rgb(16, 185, 129)',   // Emerald
    'rgb(249, 115, 22)',   // Orange
    'rgb(6, 182, 212)',    // Cyan
    'rgb(99, 102, 241)',   // Indigo
    'rgb(132, 204, 22)',   // Lime
    'rgb(244, 63, 94)'     // Rose
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const categoryData = {
      name: formData.name.trim(),
      description: formData.description.trim(),
      icon: selectedIcon,
      color: selectedColor,
      productCount: 0, // New categories start with 0 products
      createdDate: new Date().toLocaleDateString([], {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      }),
      status: 'active'
    };

    onSubmit(categoryData);

    // Reset form
    setFormData({ name: '', description: '' });
    setSelectedIcon('ri-folder-line');
    setSelectedColor('rgb(20, 184, 166)');

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Add New Category</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl text-gray-600"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category Name *
            </label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              placeholder="e.g., Beverages, Snacks, Dairy"
              required
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
              rows="3"
              placeholder="Brief description of this category"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Select Icon</label>
            <div className="grid grid-cols-7 gap-2">
              {icons.map((icon, index) => (
                <button
                  key={icon.id}
                  type="button"
                  onClick={() => setSelectedIcon(icon.id)}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg border-2 transition-all cursor-pointer ${
                    selectedIcon === icon.id
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <i className={`${icon.id} text-xl text-gray-700`}></i>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Select Color</label>
            <div className="grid grid-cols-6 gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-lg border-2 transition-all cursor-pointer ${
                    selectedColor === color
                      ? 'border-gray-900 scale-110'
                      : 'border-gray-200 hover:scale-105'
                  }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Preview</label>
            <div className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: selectedColor }}
              >
                <i className={`${selectedIcon} text-white text-2xl`}></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {formData.name || 'Category Name'}
                </h3>
                <p className="text-sm text-gray-600">
                  {formData.description || 'Category description will appear here'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
            >
              Create Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
