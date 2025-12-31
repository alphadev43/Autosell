export default function AdminSettingsNavigation({ activeSection, onSectionChange }) {
  const sections = [
    {
      id: 'brand',
      icon: 'ri-palette-line',
      label: 'Brand Customization'
    },
    {
      id: 'tax',
      icon: 'ri-percent-line',
      label: 'Tax / VAT'
    },
    {
      id: 'payment',
      icon: 'ri-bank-card-line',
      label: 'Payment Gateways'
    },
    {
      id: 'receipt',
      icon: 'ri-file-text-line',
      label: 'Receipt Template'
    }
  ];

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer whitespace-nowrap text-left ${
              activeSection === section.id
                ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <i className={`${section.icon} text-xl`}></i>
            <span className="font-medium text-sm">{section.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
