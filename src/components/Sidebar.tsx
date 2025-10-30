import { useLocation, useNavigate } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { FaRegChartBar, FaRegStar } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineLayout } from "react-icons/ai";
import { FcTimeline } from "react-icons/fc";
import { FiCalendar } from "react-icons/fi";
import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";
import { SettingOutlined, TeamOutlined } from "@ant-design/icons";
import { Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { RiLayout2Line } from "react-icons/ri";
const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const navigation = useLocation();
  const pathname = navigation.pathname;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (e: any) => {
    navigate(e.key);
  };

  return (
    <Sider
      trigger={null}
      width={210}
      collapsible
      collapsed={false}
      style={{
        backgroundColor: "#fff",
        height: "100vh",
        borderRight: "1px solid #ebeaf1",
        overflow: "auto",
      }}
    >
      <div
        className="logo-container"
        style={{
          padding: "3.5px",
          textAlign: "center",
          borderBottom: "1px solid #ebeaf1",
        }}
      >
        <img
          style={{ height: 52, cursor: "pointer" }}
          src={"/CapsiTask.png"}
          alt="Logo"
        />
      </div>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[pathname]}
        defaultSelectedKeys={["/admin-dashboard/layout"]}
        defaultOpenKeys={["1"]}
        onClick={handleMenuClick}
        style={{
          borderRight: 0,
          backgroundColor: colorBgContainer,
          overflow: "auto",
          marginTop: 12,
        }}
        items={[
          // {
          //   key: "1",
          //   label: "Overview",
          //   children: [
          {
            key: "/admin-dashboard/layout",
            label: "Layout",
            icon: <RiLayout2Line size={20} style={{ color: "#4285f4" }} />,
          },
          {
            key: "/admin-dashboard/admindashboard",
            label: "Dashboard",
            icon: <RiDashboardLine size={20} style={{ color: "#4285f4" }} />,
          },
          {
            key: "/admin-dashboard/taskreview",
            label: "Task Review",
            icon: <FaRegStar size={20} style={{ color: "#4285f4" }} />,
          },
          {
            key: "/admin-dashboard/feedback",
            label: "Feedback",
            icon: <VscFeedback size={20} style={{ color: "#4285f4" }} />,
          },
          {
            key: "/admin-dashboard/board",
            label: "Board & Backlog",
            icon: <AiOutlineLayout size={20} style={{ color: "#4285f4" }} />,
          },
          // {
          //   key: "/admin-dashboard/backlog",
          //   icon: (
          //     <MdOutlineViewList style={{ color: "#4285f4", fontSize: 22 }} />
          //   ),
          //   label: "Backlog",
          // },
          {
            key: "/admin-dashboard/people",
            icon: <TeamOutlined style={{ color: "#4285f4", fontSize: 20 }} />,
            label: "People",
          },
          {
            key: "/admin-dashboard/reports",
            label: "Reports",
            icon: <FaRegChartBar size={20} style={{ color: "#4285f4" }} />,
          },
          {
            key: "/admin-dashboard/teams",
            label: "Teams",
            icon: (
              <PiMicrosoftTeamsLogoLight
                style={{ color: "#4285f4", fontSize: 21 }}
              />
            ),
          },
          {
            key: "/admin-dashboard/calendar",
            label: "Calendar",
            icon: <FiCalendar size={20} style={{ color: "#4285f4" }} />,
          },
          {
            key: "/admin-dashboard/timeline",
            label: "Timeline",
            icon: <FcTimeline style={{ color: "#4285f4", fontSize: 20 }} />,
          },
          {
            key: "/admin-dashboard/settings",
            label: "Settings",
            icon: (
              <SettingOutlined style={{ color: "#4285f4", fontSize: 20 }} />
            ),
          },
          //   ],
          // },
          // {
          //   key: "2",
          //   label: "Employee Panel",
          //   children: [
          //     {
          //       key: "/user-dashboard/admindashboard",
          //       label: "Dashboard",
          //       icon: <RiDashboardLine size={18} />,
          //     },
          //   ],
          // },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
