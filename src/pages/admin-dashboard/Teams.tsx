import React from "react";
import { Layout, Row, Col, Typography, Image, Anchor, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Teams: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <Content style={{ padding: "24px" }}>
        <Row justify="center" gutter={[24, 24]}>
          {/* Main Content */}
          <Col xs={24} md={18} lg={20}>
            <div
              ref={scrollContainerRef}
              className="scrollable"
              style={{
                minHeight: "80vh",
                maxHeight: "80vh",
                overflowY: "auto",
                paddingRight: 12,
                scrollbarWidth: "none",
              }}
            >
              <Row justify="center" id="teams">
                <Col xs={24} md={20} lg={15}>
                  <Row>
                    <Col>
                      <Title level={1} style={{ margin: 0, fontWeight: 500 }}>
                        Teams
                      </Title>
                    </Col>
                  </Row>

                  {/* <div id="sidebar"> */}
                  <Title level={3} id="people-page-overview">
                    1. Teams Page Overview
                  </Title>
                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    The Teams section displays all users associated with
                    different projects. Each card represents a user along with
                    their role (e.g., Team Leader, Admin, Member) and their last
                    activity time within the system. This view helps identify
                    user engagement and activity levels across projects. Users
                    can also filter the team list based on specific projects,
                    allowing you to view only the members involved in that
                    selected project.
                  </Paragraph>

                  <ul style={{ marginLeft: 20, marginTop: 5 }}>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Key Highlights
                      </span>
                      →{" "}
                      <ul>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Displays user profile with name, role, and last
                          activity status
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Shows Role Team Leader or Admin badges for clarity.
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Provides project-based filtering to view team members
                          specific to each project.
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Inactive users are highlighted with red text (e.g.,
                          “Activity: a month ago”) for easy tracking.
                        </li>
                      </ul>
                    </li>

                    <Card
                      id="teams-page-overview"
                      style={{
                        background: "#f3f3ffff",
                        borderRadius: 8,
                        margin: "10px 18px",
                      }}
                    >
                      <Image src="/docs-Teams.png" />
                    </Card>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>

          <Col xs={0} md={6} lg={4}>
            <div style={{ position: "sticky", top: 80 }}>
              <Anchor
                affix={false}
                getContainer={() => scrollContainerRef.current!}
                onClick={(e, link) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target && scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      behavior: "smooth",
                    });
                  }
                }}
                items={[
                  {
                    href: "#teams",
                    title: "Teams",
                    key: "teams",
                    children: [
                      {
                        href: "#teams-page-overview",
                        key: "teams-page-overview",
                        title: "Teams Page Overview",
                      },
                  
                    ],
                  },
                ]}
              />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Teams;
