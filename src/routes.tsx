import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import Adminlayout from "./pages/admin-dashboard/Layout";
import FeedBack from "./pages/admin-dashboard/FeedBack";
import TaskReview from "./pages/admin-dashboard/TaskReview";
import Board from "./pages/admin-dashboard/Board";
import People from "./pages/admin-dashboard/People";

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
      <Route path="/admin-dashboard/taskreview" element={<TaskReview />} />
      <Route path="/admin-dashboard/board" element={<Board />} />
      <Route path="/admin-dashboard/people" element={<People />} />
    </Routes>
  );
};

export default AppRoutes;
