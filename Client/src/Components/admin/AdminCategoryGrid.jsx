export default function AdminCategoryGrid() {
  const categories = [
    {
      id: 1,
      name: 'Grains',
      description: 'Rice, wheat, corn and other grain products',
      icon: 'ri-plant-line',
      iconBg: 'rgb(245, 158, 11)',
      bgOpacity: 'rgba(245, 158, 11, 0.082)',
      productCount: 45,
      createdDate: 'Jan 15, 2024',
      status: 'active'
    },
    {
      id: 2,
      name: 'Cooking',
      description: 'Cooking oils, spices and condiments',
      icon: 'ri-fire-line',
      iconBg: 'rgb(239, 68, 68)',
      bgOpacity: 'rgba(239, 68, 68, 0.082)',
      productCount: 32,
      createdDate: 'Jan 16, 2024',
      status: 'active'
    },
    {
      id: 3,
      name: 'Canned',
      description: 'Canned foods and preserved items',
      icon: 'ri-archive-line',
      iconBg: 'rgb(139, 92, 246)',
      bgOpacity: 'rgba(139, 92, 246, 0.082)',
      productCount: 28,
      createdDate: 'Jan 17, 2024',
      status: 'active'
    },
    {
      id: 4,
      name: 'Sweeteners',
      description: 'Sugar, honey and sweetening products',
      icon: 'ri-cake-3-line',
      iconBg: 'rgb(236, 72, 153)',
      bgOpacity: 'rgba(236, 72, 153, 0.082)',
      productCount: 15,
      createdDate: 'Jan 18, 2024',
      status: 'active'
    },
    {
      id: 5,
      name: 'Dairy',
      description: 'Milk, cheese, yogurt and dairy products',
      icon: 'ri-cup-line',
      iconBg: 'rgb(20, 184, 166)',
      bgOpacity: 'rgba(20, 184, 166, 0.082)',
      productCount: 22,
      createdDate: 'Jan 19, 2024',
      status: 'active'
    },
    {
      id: 6,
      name: 'Beverages',
      description: 'Soft drinks, juices and beverages',
      icon: 'ri-goblet-line',
      iconBg: 'rgb(59, 130, 246)',
      bgOpacity: 'rgba(59, 130, 246, 0.082)',
      productCount: 38,
      createdDate: 'Jan 20, 2024',
      status: 'active'
    },
    {
      id: 7,
      name: 'Snacks',
      description: 'Chips, crackers and snack items',
      icon: 'ri-restaurant-line',
      iconBg: 'rgb(249, 115, 22)',
      bgOpacity: 'rgba(249, 115, 22, 0.082)',
      productCount: 41,
      createdDate: 'Jan 21, 2024',
      status: 'active'
    },
    {
      id: 8,
      name: 'Frozen Foods',
      description: 'Frozen vegetables, meats and ready meals',
      icon: 'ri-fridge-line',
      iconBg: 'rgb(6, 182, 212)',
      bgOpacity: 'rgba(6, 182, 212, 0.082)',
      productCount: 19,
      createdDate: 'Jan 22, 2024',
      status: 'active'
    }
  ];

  const handleViewProducts = (categoryName) => {
    alert(`Viewing products for ${categoryName} category`);
  };

  const handleEdit = (categoryId) => {
    console.log('Edit category:', categoryId);
    alert(`Edit category: ${categoryId}`);
  };

  const handleDelete = (categoryId) => {
    console.log('Delete category:', categoryId);
    if (confirm(`Delete category ${categoryId}?`)) {
      // Handle delete logic
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categories.map((category) => (
        <div key={category.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group">
          {/* Header with colored background */}
          <div
            className="h-24 flex items-center justify-center relative"
            style={{ backgroundColor: category.bgOpacity }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: category.iconBg }}
            >
              <i className={`${category.icon} text-white text-3xl`}></i>
            </div>
            <div className="absolute top-3 right-3">
              <button className="px-2 py-1 rounded-full text-xs font-semibold cursor-pointer whitespace-nowrap bg-emerald-100 text-emerald-700">
                {category.status}
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{category.description}</p>

            {/* Product count */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <i className="ri-shopping-bag-3-line text-gray-400"></i>
                <span className="text-sm text-gray-600">Products</span>
              </div>
              <span className="text-xl font-bold text-gray-900">{category.productCount}</span>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleViewProducts(category.name)}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
              >
                <i className="ri-eye-line"></i>
                View Products
              </button>
              <button
                onClick={() => handleEdit(category.id)}
                className="w-10 h-10 flex items-center justify-center hover:bg-blue-50 text-blue-600 rounded-lg transition-colors cursor-pointer"
                title="Edit"
              >
                <i className="ri-edit-line text-lg"></i>
              </button>
              <button
                onClick={() => handleDelete(category.id)}
                className="w-10 h-10 flex items-center justify-center hover:bg-red-50 text-red-600 rounded-lg transition-colors cursor-pointer"
                title="Delete"
              >
                <i className="ri-delete-bin-line text-lg"></i>
              </button>
            </div>

            {/* Footer with creation date */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500">Created: {category.createdDate}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
