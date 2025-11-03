import React, { useEffect, useState } from "react";
import { Button } from "antd";
import {
  SunOutlined,
  MoonOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import MobileHeader from "./MobileSidebar";

const AppHeader: React.FC<{
  toggleTheme: () => void;
  isDarkTheme: boolean;
}> = ({ toggleTheme, isDarkTheme }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth <= 1200;
      setIsMobile(isMobileScreen);
      if (!isMobileScreen) {
        setIsSidebarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <Header
        style={{
          padding: "0px 16px",
          background: isDarkTheme ? "#1b122b" : "#fff",
          borderBottom: isDarkTheme ? "1px solid #3a2d47" : "1px solid #ebeaf1",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {isMobile && (
            <Button
              type="text"
              icon={
                isSidebarVisible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
              }
              onClick={toggleSidebar}
              style={{ fontSize: "16px", width: 64, height: 64 }}
            />
          )}
          <h3 style={{ margin: "0px", fontWeight: 500 }}>Helping Center</h3>
          <Button
            type="text"
            icon={isDarkTheme ? <SunOutlined /> : <MoonOutlined />}
            onClick={toggleTheme}
            style={{ fontSize: "18px" }}
          />
        </div>
      </Header>
      <MobileHeader
        isDrawerVisible={isSidebarVisible}
        toggleDrawer={toggleSidebar}
        isMobile={isMobile}
        isDarkTheme={isDarkTheme}
      />
    </>
  );
};

export default AppHeader;
