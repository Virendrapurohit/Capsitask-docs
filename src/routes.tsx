import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import Adminlayout from "./pages/admin-dashboard/Layout";
import FeedBack from "./pages/admin-dashboard/FeedBack";
import TaskReview from "./pages/admin-dashboard/TaskReview";
import Board from "./pages/admin-dashboard/Board";
import People from "./pages/admin-dashboard/People";
import Reports from "./pages/admin-dashboard/Reports";
import Teams from "./pages/admin-dashboard/Teams";
import CalendarCreate from "./pages/admin-dashboard/Calendar";
import TimeLine from "./pages/admin-dashboard/TimeLine";
import Settings from "./pages/admin-dashboard/Settings";
import OverviewProject from "./pages/admin-dashboard/Overview";
import TaskDetails from "./pages/admin-dashboard/TaskDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin-dashboard/overview" />} />
      <Route path="/admin-dashboard/overview" element={<OverviewProject />} />
      <Route path="/admin-dashboard/layout" element={<Adminlayout />} />

      <Route
        path="/admin-dashboard/admindashboard"
        element={<AdminDashboard />}
      />
      <Route path="/admin-dashboard/feedback" element={<FeedBack />} />
      <Route path="/admin-dashboard/taskreview" element={<TaskReview />} />
      <Route path="/admin-dashboard/board" element={<Board />} />
      <Route path="/admin-dashboard/people" element={<People />} />
      <Route path="/admin-dashboard/reports" element={<Reports />} />
        <Route path="/admin-dashboard/taskdetails" element={<TaskDetails />} />
      <Route path="/admin-dashboard/teams" element={<Teams />} />
      <Route path="/admin-dashboard/calendar" element={<CalendarCreate />} />
      <Route path="/admin-dashboard/timeline" element={<TimeLine />} />
      <Route path="/admin-dashboard/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
