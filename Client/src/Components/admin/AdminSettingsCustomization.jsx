import { useState } from 'react';

export default function AdminSettingsCustomization() {
  const [storeName, setStoreName] = useState('AutoSell Store');
  const [tagline, setTagline] = useState('Smart Self-Checkout Solutions');
  const [logoUrl, setLogoUrl] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#14B8A6');
  const [secondaryColor, setSecondaryColor] = useState('#10B981');



  return (
    <div className="lg:col-span-3">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="space-y-6">
          {/* Section Header */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Brand Customization</h2>
            <p className="text-sm text-gray-600">Customize your store's appearance and branding</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Store Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Store Name</label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
            </div>

            {/* Tagline */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tagline</label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
              />
            </div>

            {/* Logo URL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Logo URL</label>
              <input
                placeholder="https://example.com/logo.png"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                type="text"
                value={logoUrl}
                onChange={(e) => setLogoUrl(e.target.value)}
              />
            </div>

            {/* Color Pickers */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Color</label>
                <div className="flex gap-2">
                  <input
                    className="w-16 h-12 border border-gray-300 rounded-lg cursor-pointer"
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                  />
                  <input
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm font-mono"
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Secondary Color</label>
                <div className="flex gap-2">
                  <input
                    className="w-16 h-12 border border-gray-300 rounded-lg cursor-pointer"
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                  />
                  <input
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm font-mono"
                    type="text"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Live Preview */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-2">Preview</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: primaryColor }}
                >
                  AS
                </div>
                <div>
                  <p className="font-bold text-gray-900">{storeName || 'AutoSell Store'}</p>
                  <p className="text-sm text-gray-600">{tagline || 'Smart Self-Checkout Solutions'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
