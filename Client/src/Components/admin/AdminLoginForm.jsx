import { useState } from 'react';

export default function AdminLoginForm() {
  const [selectedRole, setSelectedRole] = useState('attendant');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const roles = [
    {
      id: 'owner',
      name: 'Owner',
      icon: 'ri-vip-crown-line',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'manager',
      name: 'Manager',
      icon: 'ri-user-star-line',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      id: 'attendant',
      name: 'Attendant',
      icon: 'ri-user-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'auditor',
      name: 'Auditor',
      icon: 'ri-file-list-3-line',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, role: selectedRole });
    // TODO: Implement actual authentication logic
    alert(`Login attempted with role: ${selectedRole}`);
  };

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
      <p className="text-gray-600 mb-6">Sign in to access your dashboard</p>

      {/* Role Selection */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">Select Role</label>
        <div className="grid grid-cols-2 gap-3">
          {roles.map((role) => (
            <button
              key={role.id}
              type="button"
              onClick={() => handleRoleSelect(role.id)}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedRole === role.id
                  ? 'border-teal-500 bg-teal-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${role.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                <i className={`${role.icon} text-white text-xl`}></i>
              </div>
              <span className="text-sm font-semibold text-gray-900">{role.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="ri-mail-line text-gray-400 text-lg"></i>
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@autosell.com"
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
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
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
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

        {/* Remember me & Forgot Password */}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
        >
          Sign In to Dashboard
        </button>
      </form>
    </div>
  );
}
