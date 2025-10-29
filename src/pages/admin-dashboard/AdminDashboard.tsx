import React from "react";
import { Layout, Row, Col, Typography, Image, Anchor, Card } from "antd";
import { AlignLeftOutlined, EyeOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Link } = Anchor;

const sections = [
  { id: "todays-working", title: "Todays Working" },
  { id: "shift-details", title: "Shift Details" },
  { id: "attendance", title: "Attendance" },
  { id: "check-in-time-accuracy", title: "Check-In Time Accuracy" },
  { id: "tasks", title: "Tasks" },
  { id: "leaves-and-requests", title: "Leaves and Requests" },
  { id: "hour-statistics", title: "Hour Statistics" },
  { id: "weekely-hours", title: "Weekely Hours" },
  { id: "monthly-hours", title: "Monthly Hours" },
  { id: "events", title: "Events" },
];

const AdminDashboard: React.FC = () => {
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
                paddingRight: 12, // for scrollbar space
              }}
            >
              <Row justify="center">
                <Col xs={24} md={20} lg={15}>
                  <div style={{ margin: "0 -32px" }}>
                    <div style={{ padding: "0 32px" }}>
                      <Row>
                        <Col>
                          <Title
                            level={1}
                            style={{ margin: 0, fontWeight: 700 }}
                          >
                            Dashboard
                          </Title>
                        </Col>
                      </Row>
                      <Paragraph style={{ marginTop: 8 }}>
                        The Employee Dashboard provides a comprehensive view of
                        daily activities, work performance, and key attendance
                        metrics helping employees stay informed and productive
                        throughout their workday.
                      </Paragraph>

                      {/* Top Image */}
                      <Row align="middle" style={{ margin: "16px 0" }}>
                        <Col span={24}>
                          <Card
                            style={{
                              background: "rgb(243,243,255)",
                              borderRadius: 8,
                            }}
                          >
                            <Image
                              src="/image.jpg"
                              alt="dashboard"
                              preview={{
                                mask: (
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 8,
                                    }}
                                  >
                                    <EyeOutlined /> Preview
                                  </div>
                                ),
                              }}
                              style={{ borderRadius: 6 }}
                            />
                          </Card>
                        </Col>
                      </Row>

                      {/* Sections */}
                      {sections.map((section) => (
                        <div
                          key={section.id}
                          id={section.id}
                          style={{ marginTop: 20 }}
                        >
                          <Title
                            level={section.id === "todays-working" ? 3 : 4}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              marginBottom: 8,
                            }}
                          >
                            {section.id === "todays-working" && (
                              <AlignLeftOutlined />
                            )}
                            {section.title}
                          </Title>
                          <Paragraph>
                            {/* Dummy content - replace with real */}
                            {section.id === "todays-working" && (
                              <ul>
                                <li>
                                  Displays today's working time in real-time...
                                </li>
                                <li>Progress bar visualization...</li>
                                <li>Current date, required hours...</li>
                                <li>First clock-in, last clock-out...</li>
                              </ul>
                            )}
                            {section.id === "shift-details" &&
                              "Shows your shift effective date, working hours..."}
                            {section.id === "attendance" &&
                              "Displays summary of Present, Absent, WFH..."}
                            {section.id === "check-in-time-accuracy" &&
                              "On-time vs late check-ins..."}
                            {section.id === "tasks" && (
                              <ul>
                                <li>Lists all tasks assigned for today.</li>
                                <li>Click to view details.</li>
                              </ul>
                            )}
                            {section.id === "leaves-and-requests" &&
                              "Leave balance and request history..."}
                            {section.id === "hour-statistics" &&
                              "Monthly average hours, break time..."}
                            {section.id === "weekely-hours" &&
                              "Past 7 days working summary..."}
                            {section.id === "monthly-hours" &&
                              "Monthly hours breakdown..."}
                            {section.id === "events" &&
                              "Upcoming events and holidays..."}
                          </Paragraph>
                          <Card
                            style={{
                              background: "rgb(243,243,255)",
                              borderRadius: 8,
                            }}
                          >
                            <Image
                              src="/image.jpg"
                              alt={section.id}
                              preview={{
                                mask: (
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 8,
                                    }}
                                  >
                                    <EyeOutlined /> Preview
                                  </div>
                                ),
                              }}
                            />
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          {/* Sidebar Anchor Navigation */}
          <Col xs={0} md={6} lg={4}>
            <div style={{ position: "sticky", top: 80 }}>
              <Anchor
                offsetTop={80}
                getContainer={() => scrollContainerRef.current || window}
                showInkInFixed
              >
                {sections.map((s) => (
                  <Link key={s.id} href={`#${s.id}`} title={s.title} />
                ))}
              </Anchor>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AdminDashboard;
