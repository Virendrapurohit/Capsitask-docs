import React from "react";
import { Layout, Row, Col, Typography, Image, Anchor, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const TimeLine: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <Content >
        <Row justify="center" gutter={[24, 24]}>
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
              <Row justify="center" id="timeline">
                <Col xs={24} md={20} lg={15}>
                  <Row>
                    <Col>
                      <Title
                        level={1}
                        style={{ margin: 0, fontWeight: 500 }}
                        id="timeline"
                      >
                        Time Line
                      </Title>
                    </Col>
                  </Row>

                  {/* <div id="sidebar"> */}
                  <Title level={3} id="timeline-page-overview">
                    1. Time Line Page Overview
                  </Title>
                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    The Timeline View provides a visual overview of all project
                    tasks arranged in a chronological format, helping teams
                    plan, track, and manage work progress efficiently. It allows
                    users to view tasks by project, assignee, and status
                    category, offering better visibility into workloads,
                    deadlines, and task distribution over time.
                  </Paragraph>

                  <Card
                    id="search-and-filter-options"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/timeline-docs.png" />
                  </Card>
                  <Title level={3} id="search-and-filter-options">
                    2. Search and Filter Options
                  </Title>
                  <ul style={{ fontSize: 16 }}>
                    <li>
                      <span style={{ fontWeight: 600 }}>Select Filters</span>
                      <ul>
                        <li>
                          <span style={{ fontWeight: 500 }}>
                            Project Selection:
                          </span>{" "}
                          View tasks within a specific project.
                        </li>
                        <li>
                          <span style={{ fontWeight: 500 }}>
                            Assignee Filter:
                          </span>{" "}
                          View tasks assigned to specific team members.
                        </li>

                        <li>
                          <span style={{ fontWeight: 500 }}>
                            Status Category Filter:
                          </span>{" "}
                          Filter tasks based on their current status (e.g., To
                          Do, In Progress, Testing, or Done).
                        </li>
                        <li>
                          <span style={{ fontWeight: 500 }}>
                            Search Timeline:
                          </span>{" "}
                          Quickly search for tasks by their title or unique key
                          (Ukey).
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul style={{ fontSize: 16 }}>
                    <li>
                      <span style={{ fontWeight: 600 }}>View Modes</span>
                      <ul>
                        <li>
                          <span style={{ fontWeight: 500 }}>Today:</span>
                          Displays all tasks and activities scheduled for the
                          current day.
                        </li>
                        <li>
                          <span style={{ fontWeight: 500 }}>This Week:</span>{" "}
                          Shows the task schedule for the selected week.
                        </li>
                        <li>
                          <span style={{ fontWeight: 500 }}>Month:</span>{" "}
                          Displays all tasks within the current month.
                        </li>
                        <li>
                          <span style={{ fontWeight: 500 }}>Quarter:</span>{" "}
                          Provides a broader overview for long-term project
                          planning.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul style={{ fontSize: 16 }}>
                    <li>
                      <span style={{ fontWeight: 600 }}>Timeline Display</span>
                      <ul>
                        <li>
                          Tasks are displayed horizontally across a date-based
                          grid. Each column represents a day, week, month, or
                          quarter, depending on the selected view mode. The left
                          side lists task details, including the task key (Ukey)
                          and task name, while the timeline area shows when each
                          task is planned or scheduled to occur.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <Card
                    id="timeline-task-interaction"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/timeline-filters.png" />
                  </Card>
                  <Title level={3} id="timeline-task-interaction">
                    3. Task Scheduling and Tracking
                  </Title>
                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    Each task is displayed along its scheduled dates, showing
                    when it starts and ends. This makes it easy to:
                  </Paragraph>
                  <ul style={{ fontSize: 16 }}>
                    <li>Identify overlapping or delayed tasks.</li>
                    <li>Adjust schedules to balance workloads.</li>
                    <li>Plan future sprints or milestones effectively.</li>
                    <li>
                      <strong>Ukey Click</strong> Clicking on the Ukey within
                      the timeline opens the Edit Task Drawer, allowing users to
                      quickly view and update task details such as title,
                      description, assignee, status, and deadlines — all without
                      leaving the current page.
                    </li>
                  </ul>
                  <Card
                    id="timeline-date-update"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/edit-timeline.png" />
                  </Card>
                  <Title level={3} id="timeline-date-update">
                    4. Timeline Date Update
                  </Title>
                  <ul style={{ fontSize: 16 }}>
                    <li>
                      When users scroll or drag the task bar on the timeline,
                      the system automatically updates the Start Date and End
                      Date.
                    </li>
                    <li>
                      The date range changes dynamically as the task moves
                      horizontally across the timeline.
                    </li>
                    <li>
                      This ensures the project schedule remains accurate in real
                      time without manual input.
                    </li>
                    <li>
                      Users can update deadlines directly by dragging tasks,
                      making date management faster and more intuitive.
                    </li>
                  </ul>
                  <Card
                    id="timeline-date-update"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/date-filter.png" />
                  </Card>
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
                    href: "#timeline",
                    title: "Timeline",
                    key: "timeline",
                    children: [
                      {
                        href: "#timeline-page-overview",
                        key: "timeline-page-overview",
                        title: "Timeline Page Overview",
                      },
                      {
                        href: "#search-and-filter-options",
                        key: "search-and-filter-options",
                        title: " Search and Filter Options",
                      },
                      {
                        href: "#timeline-task-interaction",
                        key: "timeline-task-interaction",
                        title: "Task Tracking and Interaction",
                      },
                      {
                        href: "#timeline-date-update",
                        key: "timeline-date-update",
                        title: "Timeline Date Update",
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

export default TimeLine;
