import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import Adminlayout from "./pages/admin-dashboard/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/admin-dashboard/layout" element={<Adminlayout />} />
      <Route
        path="/admin-dashboard/admindashboard"
        element={<AdminDashboard />}
      />
    </Routes>
  );
};

export default AppRoutes;
