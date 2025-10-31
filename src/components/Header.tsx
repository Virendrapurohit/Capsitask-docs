import React, { useState, useEffect } from "react";
import { theme, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import Search from "antd/es/transfer/search";
import MobileHeader from "./MobileSidebar";

const AppHeader: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth <= 1023;
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
          background: colorBgContainer,
          borderBottom: "1px solid #ebeaf1",
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
          <h3 style={{ margin: "0px" ,fontWeight:500 }}>Helping Center</h3>
          <div>
            <Search placeholder="Search" />
          </div>
        </div>
      </Header>

      <MobileHeader
        isDrawerVisible={isSidebarVisible}
        toggleDrawer={toggleSidebar}
        isMobile={isMobile}
      />
    </>
  );
};

export default AppHeader;
