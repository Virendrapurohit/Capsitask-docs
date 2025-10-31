import React from "react";
import { Layout, Row, Col, Typography, Image, Anchor, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const People: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <Content >
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
              <Row justify="center" id="user-report">
                <Col xs={24} md={20} lg={15}>
                  <Row>
                    <Col>
                      <Title level={1} style={{ margin: 0, fontWeight: 500 }}>
                        User Report
                      </Title>
                    </Col>
                  </Row>

                  {/* <div id="sidebar"> */}
                  <Title level={3} id="people-page-overview">
                    1. People Page Overview
                  </Title>
                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    The People Page provides a complete overview of all users in
                    the system, displaying their details, task progress, and
                    activity across different projects. It serves as a
                    centralized dashboard for managing users, tracking
                    performance, and reviewing overall participation in multiple
                    projects.
                  </Paragraph>

                  <ul style={{ marginLeft: 20, marginTop: 5 }}>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Search and Filter Functionality
                      </span>{" "}
                      → At the top of the page, users can find a Search List box
                      that allows searching by name or email, making it easy to
                      locate specific team members in large datasets. Next to
                      the search box is a Project Selection Dropdown, which
                      allows selecting one or more projects at a time.
                    </li>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Project Selection Dropdown
                      </span>{" "}
                      → Next to the search box is a Project Selection Dropdown,
                      which allows selecting one or more projects at a time. The
                      dropdown supports multiple project selection, meaning
                      users can choose multiple projects simultaneously.
                    </li>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Active and Inactive Users
                      </span>{" "}
                      → A Status Filter dropdown (Active/Inactive) is provided
                      to help users filter the table based on user activity
                      status.
                    </li>

                    <Card
                      style={{
                        background: "#f3f3ffff",
                        borderRadius: 8,
                        margin: "10px 18px",
                      }}
                    >
                      <Image src="/docs-people.png" />
                    </Card>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        User Details Navigation
                      </span>{" "}
                      → Clicking on a username redirects you to the{" "}
                      <strong>User Details Page</strong>, where you can view
                      complete information about that specific user.
                    </li>

                    <Card
                      id="user-reporting-section"
                      style={{
                        background: "#f3f3ffff",
                        borderRadius: 8,
                        margin: "10px 18px",
                      }}
                    >
                      <Image src="/docs-user-report.png" />
                    </Card>
                  </ul>

                  <Paragraph
                    id="people-page-overview"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <Title level={3}>2. User Reporting Section</Title>
                    <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                      This section allows users to view all tasks assigned to
                      them across multiple projects in one place. If a user is
                      part of two or more projects, they can easily track which
                      tasks belong to which project using the project dropdown
                      filter.
                    </Paragraph>
                    <ul style={{ marginLeft: 20, marginTop: 5 }}>
                      <li style={{ marginBottom: 10 }}>
                        <span style={{ color: "#007bff" }}>Status Filter</span>{" "}
                        → Users can filter tasks by their current status — such
                        as <strong>ToDo</strong>, <strong>In Progress</strong>,{" "}
                        <strong>Need to Discuss</strong>,{" "}
                        <strong>Developed</strong>,<strong>Testing</strong>,{" "}
                        <strong>UAT</strong>, or <strong>Done</strong>. This
                        helps users quickly identify pending or completed work.
                      </li>
                      <li style={{ marginBottom: 10 }}>
                        <span style={{ color: "#007bff" }}>
                          Recent Activity
                        </span>{" "}
                        → The Recent Activity panel shows the latest updates
                        related to the user’s tasks, such as status changes,
                        description updates, or priority modifications. Users
                        can also filter activity by specific projects for a
                        focused view.
                        <br />
                      </li>

                      <li>
                        <span style={{ color: "#007bff" }}>
                          Projects Worked On
                        </span>{" "}
                        → This section displays all the projects where the user
                        is assigned. When the user clicks on a project, the
                        system shows all the tasks related to that specific
                        project in the task table. It helps users quickly view
                        and manage tasks within a selected project.
                      </li>

                      <Card
                        id="user-reporting-section"
                        style={{
                          background: "#f3f3ffff",
                          borderRadius: 8,
                          margin: "10px 18px",
                        }}
                      >
                        <Image src="/docs-user-details.png" />
                      </Card>
                    </ul>
                  </Paragraph>
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
                    href: "#user-report",
                    title: "User Report",
                    key: "user-report",
                    children: [
                      {
                        href: "#people-page-overview",
                        key: "people-page-overview",
                        title: "People Page Overview",
                      },
                      {
                        href: "#user-reporting-section",
                        key: "user-reporting-section",
                        title: "User Reporting Section",
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

export default People;
