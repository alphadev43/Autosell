import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AttendantHeader from '../../components/attendant/AttendantHeader';
import AttendantLoginForm from '../../components/attendant/AttendantLoginForm';
import AttendantFooter from '../../components/attendant/AttendantFooter';

export default function AttendantLogin() {
  const navigate = useNavigate();
  const [staffId, setStaffId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock authentication - in production, validate against backend
    if (staffId && password) {
      // Store auth token
      localStorage.setItem('attendant_auth', JSON.stringify({
        staffId,
        name: 'Staff Member',
        role: 'packaging_attendant',
        timestamp: Date.now()
      }));

      // Navigate to orders list
      navigate('/attendant/orders');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <AttendantHeader />
        <AttendantLoginForm
          handleLogin={handleLogin}
          staffId={staffId}
          setStaffId={setStaffId}
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <AttendantFooter />
      </div>
    </div>
  );
}
