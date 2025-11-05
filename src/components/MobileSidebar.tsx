import React from "react";
import { Drawer, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { FaRegStar, FaRegChartBar } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineLayout } from "react-icons/ai";
import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";
import { FiCalendar } from "react-icons/fi";
import { FcTimeline } from "react-icons/fc";
import { SettingOutlined, TeamOutlined } from "@ant-design/icons";
import { LuChartNoAxesColumnDecreasing } from "react-icons/lu";
interface MobileHeaderProps {
  isDrawerVisible: boolean;
  toggleDrawer: () => void;
  isMobile: boolean;
  isDarkTheme: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  isDrawerVisible,
  toggleDrawer,
  isDarkTheme,
}) => {
  const navigate = useNavigate();

  const handleMenuClick = (e: any) => {
    navigate(e.key);
    toggleDrawer();
  };

  return (
    <Drawer
      styles={{ body: { padding: "5px" } }}
      placement="left"
     closeIcon={
      <div
        className="logo-container"
        style={{
          padding: "3.5px",
          textAlign: "center",
          // backgroundColor: isDarkTheme ? "#1b122b" : "#fff",
          borderBottom: isDarkTheme ? "1px solid #3a2d47" : "1px solid #ebeaf1",
        }}
      >
        <img
          style={{ height: 52, cursor: "pointer" }}
          src={"/CapsiTask.png"}
          alt="Logo"
        />
      </div>

     }
      open={isDrawerVisible}
      onClose={toggleDrawer}
      width={240}
    >
      
      <Menu
        theme={isDarkTheme ? "dark" : "light"}
        style={{
          borderRight: "0px",
          backgroundColor: isDarkTheme ? "#1b122b" : "#fff",
        }}
        mode="inline"
        defaultSelectedKeys={["/admin-dashboard/overview"]}
        onClick={handleMenuClick}
        items={[
          {
            key: "/admin-dashboard/overview",
            label: "Overview",
          },
          {
            key: "/admin-dashboard/admindashboard",
            label: "Dashboard",
            icon: <RiDashboardLine size={18} />,
          },
          {
            key: "/admin-dashboard/taskreview",
            label: "Task Review",
            icon: <FaRegStar size={18} />,
          },
          {
            key: "/admin-dashboard/feedback",
            label: "Feedback",
            icon: <VscFeedback size={18} />,
          },
          {
            key: "/admin-dashboard/board",
            label: "Board & Backlog",
            icon: <AiOutlineLayout size={18} />,
          },
          {
            key: "/admin-dashboard/people",
            label: "People",
            icon: <TeamOutlined size={20} />,
          },
          {
            key: "/admin-dashboard/reports",
            label: "Reports",
            icon: <FaRegChartBar size={18} />,
          },
                 {
            key: "/admin-dashboard/taskdetails",
            label: "Task Details",
            icon: <LuChartNoAxesColumnDecreasing  size={20} />,
          },
          {
            key: "/admin-dashboard/teams",
            label: "Teams",
            icon: <PiMicrosoftTeamsLogoLight size={18} />,
          },
          {
            key: "/admin-dashboard/calendar",
            label: "Calendar",
            icon: <FiCalendar size={18} />,
          },
          {
            key: "/admin-dashboard/timeline",
            label: "Timeline",
            icon: <FcTimeline size={18} />,
          },
          {
            key: "/admin-dashboard/settings",
            label: "Settings",
            icon: <SettingOutlined size={18} />,
          },
        ]}
      />
    </Drawer>
  );
};

export default MobileHeader;
