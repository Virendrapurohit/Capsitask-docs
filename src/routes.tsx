import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import Adminlayout from "./pages/admin-dashboard/Layout";
import FeedBack from "./pages/admin-dashboard/FeedBack";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin-dashboard/layout" />} />
      <Route path="/admin-dashboard/layout" element={<Adminlayout />} />
      <Route
        path="/admin-dashboard/admindashboard"
        element={<AdminDashboard />}
      />
      <Route path="/admin-dashboard/feedback" element={<FeedBack />} />
    </Routes>
  );
};

export default AppRoutes;
