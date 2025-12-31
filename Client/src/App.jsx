import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OrderProvider } from './contexts/OrderContext';

// Customer Pages
import LandingPage from './pages/customer/LandingPage';
import CartingPage from './pages/customer/CartingPage';
import ReviewCartPage from './pages/customer/ReviewCartPage';
import PaymentPage from './pages/customer/PaymentPage';
import PaymentSuccessfulPage from './pages/customer/PaymentSuccessfulPage';
import ReceiptPage from './pages/customer/ReceiptPage';

// Attendant Pages
import AttendantLogin from './pages/attendant/AttendantLogin';
import AttendantOrders from './pages/attendant/AttendantOrders';
import AttendantOrderID from './pages/attendant/AttendantOrderID';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminCategories from './pages/admin/AdminCategories';
import AdminInventory from './pages/admin/AdminInventory';
import AdminOrders from './pages/admin/AdminOrders';
import AdminStaff from './pages/admin/AdminStaff';
import AdminSettings from './pages/admin/AdminSettings';

function App() {
  return (
    <OrderProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Customer Routes */}
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/CartingPage" element={<CartingPage />} />
            <Route path="/ReviewCartPage" element={<ReviewCartPage />} />
            <Route path="/PaymentPage" element={<PaymentPage />} />
            <Route path="/PaymentSuccessfulPage" element={<PaymentSuccessfulPage />} />
            <Route path="/ReceiptPage" element={<ReceiptPage />} />

            {/* Attendant Routes */}
            <Route path="/attendant/login" element={<AttendantLogin />} />
            <Route path="/attendant/orders" element={<AttendantOrders />} />
            <Route path="/attendant/orders/:orderId" element={<AttendantOrderID />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/categories" element={<AdminCategories />} />
            <Route path="/admin/inventory" element={<AdminInventory />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/staff" element={<AdminStaff />} />
            <Route path="/admin/settings" element={<AdminSettings />} />

            {/* Default route */}
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </OrderProvider>
  );
}

export default App
