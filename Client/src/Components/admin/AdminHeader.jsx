export default function AdminHeader() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            placeholder="Search..."
            className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
            type="text"
          />
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors relative cursor-pointer">
          <i className="ri-notification-3-line text-gray-600 text-xl"></i>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Dropdown */}
        <div className="relative">
          <button className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              A
            </div>
            <i className="ri-arrow-down-s-line text-gray-600"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
