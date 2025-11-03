import React, { useState, useEffect } from "react";
import { Layout, ConfigProvider } from "antd";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AppRoutes from "./routes";
import { darkTheme, lightTheme } from "./components/Theme";

const { Content } = Layout;

const App: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [theme, setTheme] = useState(lightTheme);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkTheme(true);
      setTheme(darkTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    setTheme(isDarkTheme ? lightTheme : darkTheme);
  };

  return (
    <ConfigProvider theme={theme}>
      <Layout>
        {isSidebarVisible && <Sidebar isDarkTheme={isDarkTheme} />}
        <Layout>
          <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
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
    </ConfigProvider>
  );
};

export default App;
