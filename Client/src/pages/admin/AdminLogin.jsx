import AdminLoginFeature from '../../components/admin/AdminLoginFeature';
import AdminLoginForm from '../../components/admin/AdminLoginForm';
import AdminLoginMobileHeader from '../../components/admin/AdminLoginMobileHeader';

export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <AdminLoginFeature />

          <div className="w-full">
            <AdminLoginMobileHeader />
            <AdminLoginForm />
            <div className="text-center mt-6 text-sm text-gray-500">
              <p>© 2024 AutoSell. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
