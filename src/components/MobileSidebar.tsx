import React from "react";
import { Drawer, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { FaRegStar, FaRegChartBar } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineLayout } from "react-icons/ai";
import { MdOutlineViewList } from "react-icons/md";
import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";
import { FiCalendar } from "react-icons/fi";
import { FcTimeline } from "react-icons/fc";
import { SettingOutlined, TeamOutlined } from "@ant-design/icons";

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
      title="Admin Panel"
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
        defaultSelectedKeys={["/admin-dashboard/admindashboard"]}
        onClick={handleMenuClick}
        items={[
          {
            key: "/admin-dashboard/admindashboard",
            label: "Dashboard",
            icon: <RiDashboardLine size={18} />,
          },
          {
            key: "/admin-dashboard/dashboard",
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
            label: "Board",
            icon: <AiOutlineLayout size={18} />,
          },
          {
            key: "/admin-dashboard/backlog",
            label: "Backlog",
            icon: <MdOutlineViewList size={18} />,
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
