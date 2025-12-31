export default function AdminStaffGrid() {
  const staff = [
    {
      id: 1,
      name: 'Michael Chen',
      email: 'michael@autosell.com',
      staffId: 'STF001',
      role: 'owner',
      department: 'Management',
      joinDate: '2023-01-15',
      status: 'active',
      avatarColor: 'from-purple-500 to-pink-500',
      icon: 'ri-vip-crown-line',
      permissions: ['all']
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@autosell.com',
      staffId: 'STF002',
      role: 'manager',
      department: 'Operations',
      joinDate: '2023-03-20',
      status: 'active',
      avatarColor: 'from-teal-500 to-emerald-500',
      icon: 'ri-user-star-line',
      permissions: ['products', 'inventory', 'orders', 'staff']
    },
    {
      id: 3,
      name: 'David Williams',
      email: 'david@autosell.com',
      staffId: 'STF003',
      role: 'attendant',
      department: 'Packaging',
      joinDate: '2023-06-10',
      status: 'active',
      avatarColor: 'from-blue-500 to-cyan-500',
      icon: 'ri-user-line',
      permissions: ['orders']
    },
    {
      id: 4,
      name: 'Emma Davis',
      email: 'emma@autosell.com',
      staffId: 'STF004',
      role: 'attendant',
      department: 'Packaging',
      joinDate: '2023-07-05',
      status: 'active',
      avatarColor: 'from-blue-500 to-cyan-500',
      icon: 'ri-user-line',
      permissions: ['orders']
    },
    {
      id: 5,
      name: 'James Wilson',
      email: 'james@autosell.com',
      staffId: 'STF005',
      role: 'auditor',
      department: 'Finance',
      joinDate: '2023-08-12',
      status: 'active',
      avatarColor: 'from-orange-500 to-amber-500',
      icon: 'ri-file-list-3-line',
      permissions: ['orders', 'reports']
    }
  ];

  const handleEdit = (staffId) => {
    console.log('Edit staff:', staffId);
    alert(`Edit staff member: ${staffId}`);
  };

  const handleDeactivate = (staffId) => {
    console.log('Deactivate staff:', staffId);
    if (confirm(`Deactivate staff member ${staffId}?`)) {
      alert(`Staff member ${staffId} deactivated`);
    }
  };

  const handleDelete = (staffId) => {
    console.log('Delete staff:', staffId);
    if (confirm(`Permanently delete staff member ${staffId}?`)) {
      alert(`Staff member ${staffId} deleted`);
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {staff.map((member) => (
        <div key={member.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          {/* Header with avatar and status */}
          <div className="flex items-start justify-between mb-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${member.avatarColor} rounded-xl flex items-center justify-center`}>
              <i className={`${member.icon} text-white text-3xl`}></i>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
              {member.status}
            </span>
          </div>

          {/* Staff details */}
          <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
          <p className="text-sm text-gray-600 mb-1">{member.email}</p>
          <p className="text-xs text-gray-500 mb-4">{member.staffId}</p>

          {/* Role and department info */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Role</span>
              <span className="font-semibold text-gray-900 capitalize">{member.role}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Department</span>
              <span className="font-semibold text-gray-900">{member.department}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Joined</span>
              <span className="font-semibold text-gray-900">{member.joinDate}</span>
            </div>
          </div>

          {/* Permissions */}
          <div className="mb-4">
            <p className="text-xs text-gray-600 mb-2">Permissions</p>
            <div className="flex flex-wrap gap-1">
              {member.permissions.map((permission, index) => (
                <span key={index} className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded">
                  {permission}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => handleEdit(member.id)}
              className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeactivate(member.id)}
              className="flex-1 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Deactivate
            </button>
            <button
              onClick={() => handleDelete(member.id)}
              className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors cursor-pointer"
            >
              <i className="ri-delete-bin-line text-lg"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
