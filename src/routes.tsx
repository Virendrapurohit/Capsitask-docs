import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin-dashboard/admindashboard"
        element={<AdminDashboard />}
      />
    </Routes>
  );
};

export default AppRoutes;
