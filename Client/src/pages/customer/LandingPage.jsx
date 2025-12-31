import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const languages = [
    { code: '🇬🇧', name: 'English' },
    { code: '🇫🇷', name: 'Français' },
    { code: '🇪🇸', name: 'Español' },
    { code: '🇸🇦', name: 'العربية' }
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleStartCheckout = () => {
    navigate('/CartingPage');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl" style={{ animation: '20s ease-in-out 0s infinite normal none running float1', top: '10%', left: '5%' }}></div>
          <div className="absolute w-80 h-80 bg-white/15 rounded-full blur-2xl" style={{ animation: '15s ease-in-out 0s infinite normal none running float2', top: '60%', right: '10%' }}></div>
          <div className="absolute w-64 h-64 bg-white/20 rounded-full blur-2xl" style={{ animation: '12s ease-in-out 0s infinite normal none running float3', top: '30%', right: '20%' }}></div>
          <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" style={{ animation: '25s ease-in-out 0s infinite normal none running float4', bottom: '5%', left: '15%' }}></div>
          <div className="absolute w-72 h-72 bg-white/15 rounded-full blur-2xl" style={{ animation: '18s ease-in-out 0s infinite normal none running float5', top: '50%', left: '50%' }}></div>
          <div className="absolute w-56 h-56 bg-white/20 rounded-full blur-xl" style={{ animation: '10s ease-in-out 0s infinite normal none running float6', top: '20%', left: '70%' }}></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, white 35px, white 37px)' }}></div>
        <style>
          {`
            @keyframes float1 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              25% { transform: translate(100px, -80px) scale(1.1); }
              50% { transform: translate(200px, 50px) scale(0.9); }
              75% { transform: translate(50px, 100px) scale(1.05); }
            }

            @keyframes float2 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(-150px, 100px) scale(1.15); }
              66% { transform: translate(-80px, -120px) scale(0.85); }
            }

            @keyframes float3 {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              25% { transform: translate(-120px, 80px) rotate(90deg); }
              50% { transform: translate(100px, 150px) rotate(180deg); }
              75% { transform: translate(150px, -50px) rotate(270deg); }
            }

            @keyframes float4 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              20% { transform: translate(150px, -100px) scale(1.2); }
              40% { transform: translate(300px, 50px) scale(0.9); }
              60% { transform: translate(200px, 150px) scale(1.1); }
              80% { transform: translate(50px, 80px) scale(0.95); }
            }

            @keyframes float5 {
              0%, 100% { transform: translate(-50%, -50%) scale(1); }
              25% { transform: translate(calc(-50% + 100px), calc(-50% - 100px)) scale(1.1); }
              50% { transform: translate(calc(-50% - 100px), calc(-50% + 100px)) scale(0.9); }
              75% { transform: translate(calc(-50% + 80px), calc(-50% + 80px)) scale(1.05); }
            }

            @keyframes float6 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(-200px, 200px) scale(1.3); }
            }
          `}
        </style>
        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="p-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <img alt="AutoSell" className="w-10 h-10 object-contain" src="https://public.readdy.ai/ai/img_res/c08ffdda-535b-46d3-ace4-23365ca4e6e0.png" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">AutoSell</h1>
                  <p className="text-sm text-white/80">Self-Checkout System</p>
                </div>
              </div>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className=" flex items-center text-center gap-3 px-5 py-3 bg-white/20 backdrop-blur-md text-white rounded-2xl hover:bg-white/30 transition-all cursor-pointer whitespace-nowrap border border-white/30"
                >
                  <span className="text-md">{languages.find(lang => lang.name === selectedLanguage)?.code}</span>
                  <span className="font-medium">{selectedLanguage}</span>
                  <i className={`ri-arrow-down-s-line text-xl transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden min-w-[200px] border border-gray-100">
                    {languages.map((lang) => (
                      <button
                        key={lang.name}
                        onClick={() => handleLanguageSelect(lang.name)}
                        className={`w-full flex items-center  gap-3 px-5 py-3 hover:bg-teal-50 transition-colors cursor-pointer ${
                          selectedLanguage === lang.name ? 'bg-teal-50 text-teal-600' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-md">{lang.code}</span>
                        <span className="font-medium">{lang.name}</span>
                        {selectedLanguage === lang.name && <i className="ri-check-line text-xl ml-auto"></i>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center px-8 pb-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-12">
                <h2 className="text-7xl font-bold text-white mb-6 leading-tight">Shop Smarter,<br />Checkout Faster</h2>
                <p className="text-2xl text-white/90 font-light max-w-2xl mx-auto">Experience the future of retail with our seamless self-checkout system</p>
              </div>
              <button onClick={handleStartCheckout} className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-teal-600 text-xl font-semibold rounded-2xl hover:shadow-2xl transition-all cursor-pointer whitespace-nowrap hover:scale-105">
                <i className="ri-shopping-cart-line text-2xl"></i>
                <span className='text-2xl'>Start Checkout</span>
                <i className="ri-arrow-right-line text-2xl group-hover:translate-x-2 transition-transform"></i>
              </button>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-qr-scan-2-line text-4xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Quick Scan</h3>
                  <p className="text-white/80">Scan products instantly with camera or barcode</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-secure-payment-line text-4xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Secure Payment</h3>
                  <p className="text-white/80">Multiple payment options with encryption</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-time-line text-4xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Save Time</h3>
                  <p className="text-white/80">No queues, no waiting, just shop and go</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-white/70 text-sm">
              <p>© 2024 AutoSell. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <button className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-customer-service-2-line text-xl mr-2"></i>Need Help?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
