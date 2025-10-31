import React from "react";
import { Layout, Row, Col, Typography, Image, Anchor, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const CalendarCreate: React.FC = () => {
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
              <Row justify="center" id="calendar">
                <Col xs={24} md={20} lg={15}>
                  <Row>
                    <Col>
                      <Title level={1} style={{ margin: 0, fontWeight: 500 }}>
                        Calendar
                      </Title>
                    </Col>
                  </Row>

                  {/* <div id="sidebar"> */}
                  <Title level={3} id="calendar-view">
                    1. Calendar Filter
                  </Title>
                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    The Calendar View displays all project tasks organized by
                    date, allowing users to easily track deadlines, progress,
                    and workloads throughout the month. <br />
                    In this view, users can apply multiple filters and navigate
                    between months for better task management.
                  </Paragraph>

                  <ul style={{ marginLeft: 20, marginTop: 5 }}>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Key Highlights
                      </span>
                      →{" "}
                      <ul>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          <strong> Project Dropdown: </strong> Allows users to
                          switch between projects. When a project is selected,
                          the calendar updates to show only the tasks related to
                          that project.
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          <strong> Search Bar: </strong> Enables users to search
                          specific tasks by title or keyword within the selected
                          project.
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          <strong> Assignee Filter: </strong> Lets users filter
                          tasks by assignee, displaying only tasks assigned to
                          the selected team member.
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          <strong> Date Selector : </strong> Opens a month and
                          year picker, allowing users to navigate between months
                          (e.g., Oct 2025). The “Today” button quickly returns
                          the view to the current date.
                        </li>
                      </ul>
                    </li>

                    <Card
                      id="calendar-view"
                      style={{
                        background: "#f3f3ffff",
                        borderRadius: 8,
                        margin: "10px 18px",
                      }}
                    >
                      <Image src="/docs-calendar-filter.png" />
                    </Card>
                  </ul>

                  <Title level={3} id="add&update-task">
                    2. Add & Update Task in Calendar View
                  </Title>
                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    In the Calendar View, users can easily create and manage
                    tasks directly from specific dates — making task scheduling
                    and tracking more efficient.
                  </Paragraph>

                  <ul style={{ marginLeft: 20, marginTop: 5 }}>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Add Task
                      </span>
                      →{" "}
                      <ul>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Click on the “+” icon on any date cell in the
                          calendar.
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          A Create Task popup appears, showing the selected
                          Project Name and UKey.
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          <strong> Enter the required details: </strong>
                          <ul>
                            <li style={{ fontSize: 15, marginTop: 10 }}>
                              Title – What needs to be done
                            </li>
                            <li style={{ fontSize: 15, marginTop: 10 }}>
                              Assignee – Select one or multiple assignees
                            </li>
                            <li style={{ fontSize: 15, marginTop: 10 }}>
                              Issue Type – Define the type of task (e.g., Bug,
                              Feature, Task)
                            </li>
                          </ul>
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Click Create to add the task to the selected date. The
                          new task will appear immediately in the calendar.
                        </li>
                      </ul>
                    </li>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Update Task
                      </span>
                      →{" "}
                      <ul>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Click on any existing task card (e.g., CP-759) in the
                          calendar to open its Task Details panel.
                        </li>
                    
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          You can modify
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Title, Priority, Start & Deadline Dates, Sprint,
                          Status, Category, Issue Type, Branch, Reporter, and
                          Assignee(s)
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Use the Description or Attachment tab to add detailed
                          information or supporting files.
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Once done, click Update to save your changes. <br />
                          All updates reflect instantly in the calendar and
                          other linked views.
                        </li>
                      </ul>
                    </li>
                    <Card
                      id="add&update-task"
                      style={{
                        background: "#f3f3ffff",
                        borderRadius: 8,
                        margin: "10px 18px",
                      }}
                    >
                      <Image src="/docs-calendar -add-edit.png" />
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
                    href: "#calendar",
                    title: "Calendar",
                    key: "calendar",
                    children: [
                      {
                        href: "#calendar-view",
                        key: "calendar-view",
                        title: "Calendar Filter",
                      },
                         {
                        href: "#add&update-task",
                        key: "add&update-task",
                        title: "Add & Update Task ",
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

export default CalendarCreate;
