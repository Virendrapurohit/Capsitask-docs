import { useLocation, useNavigate } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { FaRegChartBar, FaRegStar } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineLayout } from "react-icons/ai";
import { FcTimeline } from "react-icons/fc";
import { FiCalendar } from "react-icons/fi";
import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";
import { SettingOutlined, TeamOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { RiLayout2Line } from "react-icons/ri";
import { LuChartNoAxesColumnDecreasing } from "react-icons/lu";
const Sidebar: React.FC<{ isDarkTheme: boolean }> = ({ isDarkTheme }) => {
  const navigate = useNavigate();
  const navigation = useLocation();
  const pathname = navigation.pathname;

  return (
    <Sider
      trigger={null}
      width={210}
      collapsible
      collapsed={false}
      style={{
        backgroundColor: isDarkTheme ? "#1b122b" : "#fff",
        height: "100vh",
        borderRight: isDarkTheme ? "1px solid #3a2d47" : "1px solid #ebeaf1",
        overflow: "auto",
      }}
    >
      <div
        className="logo-container"
        style={{
          padding: "3.5px",
          textAlign: "center",
          backgroundColor: isDarkTheme ? "#1b122b" : "#fff",
          borderBottom: isDarkTheme ? "1px solid #3a2d47" : "1px solid #ebeaf1",
        }}
      >
        <img
          style={{ height: 52, cursor: "pointer" }}
          src={"/CapsiTask.png"}
          alt="Logo"
        />
      </div>

      <Menu
        theme={isDarkTheme ? "dark" : "light"}
        mode="inline"
        selectedKeys={[pathname]}
        defaultSelectedKeys={["/admin-dashboard/layout"]}
        defaultOpenKeys={["1"]}
        onClick={(e) => navigate(e.key)}
        style={{
          backgroundColor: isDarkTheme ? "#1b122b" : "#fff",
          borderRight: 0,
          overflow: "auto",
          marginTop: 12,
        }}
        items={[
          {
            key: "/admin-dashboard/overview",
            label: "Overview",
            // icon: <RiLayout2Line size={20} />,
          },
          {
            key: "/admin-dashboard/layout",
            label: "Layout",
            icon: <RiLayout2Line size={20} />,
          },
          {
            key: "/admin-dashboard/admindashboard",
            label: "Dashboard",
            icon: <RiDashboardLine size={20} />,
          },
          {
            key: "/admin-dashboard/taskreview",
            label: "Task Review",
            icon: <FaRegStar size={20} />,
          },
          {
            key: "/admin-dashboard/feedback",
            label: "Feedback",
            icon: <VscFeedback size={20} />,
          },
          {
            key: "/admin-dashboard/board",
            label: "Board & Backlog",
            icon: <AiOutlineLayout size={20} />,
          },
          {
            key: "/admin-dashboard/people",
            icon: <TeamOutlined style={{ fontSize: 20 }} />,
            label: "People",
          },
          {
            key: "/admin-dashboard/reports",
            label: "Reports",
            icon: <FaRegChartBar size={20} />,
          },
          {
            key: "/admin-dashboard/taskdetails",
            label: "Task Details",
            icon: <LuChartNoAxesColumnDecreasing  size={20} />,
          },
          {
            key: "/admin-dashboard/teams",
            label: "Teams",
            icon: <PiMicrosoftTeamsLogoLight style={{ fontSize: 21 }} />,
          },
          {
            key: "/admin-dashboard/calendar",
            label: "Calendar",
            icon: <FiCalendar size={20} />,
          },
          {
            key: "/admin-dashboard/timeline",
            label: "Timeline",
            icon: <FcTimeline style={{ fontSize: 20 }} />,
          },
          {
            key: "/admin-dashboard/settings",
            label: "Settings",
            icon: <SettingOutlined style={{ fontSize: 20 }} />,
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
