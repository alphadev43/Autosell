export default function AttendantLoginForm({
  handleLogin,
  staffId,
  setStaffId,
  password,
  setPassword,
  showPassword,
  setShowPassword
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Staff Login</h2>

      <form onSubmit={handleLogin} className="space-y-6">
        {/* Staff ID Input */}
        <div>
          <label htmlFor="staffId" className="block text-sm font-semibold text-gray-700 mb-2">
            Staff ID
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="ri-user-line text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              id="staffId"
              value={staffId}
              onChange={(e) => setStaffId(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
              placeholder="Enter your staff ID"
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="ri-lock-line text-gray-400 text-lg"></i>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer"
            >
              <i className={`${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} text-gray-400 text-lg hover:text-gray-600 transition-colors`}></i>
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <button type="button" className="text-sm text-teal-600 hover:text-teal-700 font-medium whitespace-nowrap">
            Forgot password?
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
        >
          Sign In
        </button>
      </form>

      {/* Help Section */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <i className="ri-information-line text-teal-500"></i>
          <span>Need help? Contact your supervisor</span>
        </div>
      </div>
    </div>
  );
}
