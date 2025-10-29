import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AppRoutes from "./routes";

const { Content } = Layout;

const App: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1023) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout>
      {isSidebarVisible && <Sidebar />}
      <Layout>
        <Header />
        <Content
          style={{
            padding: 24,
            height: "calc(100vh - 115px)",
            overflow: "auto",
          }}
        >
          <AppRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
