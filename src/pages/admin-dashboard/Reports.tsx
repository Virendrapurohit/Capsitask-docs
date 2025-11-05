import React from "react";
import { Layout, Row, Col, Typography, Image, Anchor, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Reports: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <Content >
        <Row justify="center" gutter={[24, 24]}>
          {/* Main Content */}
          <Col xs={24} md={18} lg={19} xl={19} xxl={20}>
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
              <Row justify="center" id="task-report">
                <Col xs={24} md={20} lg={20} xl={20} xxl={15}>
                  <Row>
                    <Col>
                      <Title level={1} style={{ margin: 0, fontWeight: 500 }}>
                        Task Report
                      </Title>
                    </Col>
                  </Row>

                  {/* <div id="sidebar"> */}
                  <Title level={3} id="task-overview">
                    1. Task Overview
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
                        Project Group
                      </span>{" "}
                      → The Project Group Selection allows users to choose one
                      or more projects from the dropdown list. Once selected,
                      the table displays only the tasks related to the chosen
                      projects, helping users focus on specific project data.
                    </li>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Date Filter Options
                      </span>{" "}
                      →{" "}
                      <ul style={{ fontSize: 15 }}>
                        <ol>
                          <li style={{ marginBottom: 10 }}>
                            <strong>Deadline (Overdue): </strong>
                            Displays all tasks whose due dates have already
                            passed, helping identify pending or delayed work
                            items.
                          </li>
                          <li style={{ marginBottom: 10 }}>
                            <strong>Start Date: </strong>
                            Filters and shows tasks based on their start date,
                            allowing users to view tasks that began within a
                            selected timeframe.
                          </li>
                          <li style={{ marginBottom: 10 }}>
                            <strong>Last Activity: </strong>
                            Displays tasks based on their most recent update or
                            action performed — useful for tracking the latest
                            task progress or edits.
                          </li>
                          <li style={{ marginBottom: 10 }}>
                            <strong>Due Soon: </strong>
                            Shows tasks that are nearing their deadline, helping
                            users prioritize work that needs immediate
                            attention.
                          </li>
                        </ol>
                      </ul>
                    </li>
                    <Card
                      style={{
                        background: "#f3f3ffff",
                        borderRadius: 8,
                        margin: "10px 18px",
                      }}
                    >
                      <Image src="/docs-task-overview.png" />
                    </Card>

                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Task Table Filters & Download Options
                      </span>{" "}
                      →{" "}
                      <ul style={{ fontSize: 15, marginTop: 10 }}>
                        <ol>
                          <li style={{ marginBottom: 10 }}>
                            <strong>Filter Functionality: </strong>
                            The Filter Panel allows users to narrow down task
                            results efficiently. You can apply multiple filters
                            at once to quickly locate specific tasks based on
                            various criteria.
                          </li>
                          <li style={{ marginBottom: 10 }}>
                            <strong>Status Filter: </strong>
                            Filter tasks by current progress (e.g., To Do, In
                            Progress, Testing, Done, Developed).
                          </li>
                          <li style={{ marginBottom: 10 }}>
                            <strong>User Filter: </strong>
                            <ul>
                              <li>Select a user name from the dropdown.</li>
                              <li>
                                Choose the filter type — Assignee, Assigned By,
                                or Reporter — to see tasks related to that user.
                              </li>
                            </ul>
                          </li>
                          <li style={{ marginBottom: 10 }}>
                            <strong>
                              Branch, Milestone, and Priority Filters:{" "}
                            </strong>
                            Further refine task visibility by specific project
                            branches, milestones, or priority levels.
                          </li>
                          <li style={{ marginBottom: 10 }}>
                            <strong>Clear All: </strong>
                            Instantly removes all active filters and resets the
                            table view.
                          </li>
                        </ol>
                      </ul>
                    </li>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Download Options
                      </span>{" "}
                      →{" "}
                      <ul style={{ fontSize: 15, marginTop: 10 }}>
                        <ol>
                          <li style={{ marginBottom: 10 }}>
                            <strong>
                              The Download Menu provides quick export and
                              sharing options:{" "}
                            </strong>
                            <ul>
                              <li>
                                Copy Link: Instantly copy a shareable link to
                                the current filtered view.
                              </li>
                              <li>
                                Export CSV: Download the visible filtered data
                                as a .csv file for reporting or analysis
                                purposes.
                              </li>
                            </ul>
                          </li>
                        </ol>
                      </ul>
                    </li>
                    <Card
                      id="inHand-report"
                      style={{
                        background: "#f3f3ffff",
                        borderRadius: 8,
                        margin: "10px 18px",
                      }}
                    >
                      <Image src="/docs-task-overview-filter.png" />
                    </Card>
                  </ul>

                  <Paragraph
                    id="people-page-overview"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <Title level={3}>2. InHand Report</Title>
                  </Paragraph>

                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    The In-Hand Report section allows users to easily track and
                    manage their active tasks using powerful filters. It
                    provides a simplified way to view tasks assigned to them or
                    tasks they are responsible for, all in one place.
                  </Paragraph>

                  <li style={{ fontSize: 15, marginTop: 10 }}>
                    <span style={{ color: "#007bff", fontSize: 16 }}>
                      Key Features:
                    </span>{" "}
                    →{" "}
                    <ul style={{ fontSize: 15, marginTop: 10 }}>
                      <ol>
                        <li style={{ marginBottom: 10 }}>
                          <strong>Status Filter: </strong>
                          Users can filter tasks based on their current status
                          (e.g., To Do, In Progress, Testing, Done, Developed).
                          This helps identify which tasks are pending, ongoing,
                          or completed.
                        </li>
                        <li style={{ marginBottom: 10 }}>
                          <strong>Assignee Filter: </strong>
                          Users can filter tasks by the Assignee name to see
                          only those tasks assigned to a specific person — or
                          themselves. <br />
                          This makes it easy to focus on personal work or
                          monitor a team member’s workload.
                        </li>
                      </ol>
                    </ul>
                  </li>
                  <Card
                    id="weekly-summary"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-in-hand.png" />
                  </Card>

                  <Paragraph
                    id="people-page-overview"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <Title level={3}>3. Weekly Summary</Title>
                  </Paragraph>

                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    The <strong>Weekly Summary</strong> section provides an
                    overview of all activities performed by a user during the
                    week — excluding weekends (Saturday and Sunday). It helps
                    team leaders and admins monitor individual productivity and
                    project involvement within the last 7 working days.
                  </Paragraph>

                  <li style={{ fontSize: 15, marginTop: 10 }}>
                    <span style={{ color: "#007bff", fontSize: 16 }}>
                      Key Features:
                    </span>{" "}
                    →{" "}
                    <ul style={{ fontSize: 15, marginTop: 10 }}>
                      <ol>
                        <li style={{ marginBottom: 10 }}>
                          <strong>Activity Tracking : </strong>
                          Displays tasks or activities completed or updated by
                          the user within the current week (Monday to Friday).
                          If the user does not perform any activity in a project
                          for seven consecutive days (or any specific period set
                          by the admin), the Weekly Activity Model automatically
                          opens, prompting the user to provide a reason for the
                          inactivity.
                        </li>
                        <li style={{ marginBottom: 10 }}>
                          <strong>Reason Logging : </strong>
                          When submitting the weekly summary, users can add a
                          reason or note explaining their weekly progress,
                          achievements, or pending work.
                        </li>
                      </ol>
                    </ul>
                  </li>
                  <Card
                    id="delete-task-report"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-week.png" />
                  </Card>

                  <Paragraph
                    id="delete-task-report"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <Title level={3}>4. Delete-Task Report</Title>
                  </Paragraph>
                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    The Delete Task Report section records all tasks deleted by
                    the user from any project. <br />
                    When a user deletes a task, the deleted record automatically
                    appears in this report. The table displays key details such
                    as:
                  </Paragraph>

                  <ul style={{ fontSize: 15, marginTop: 10 }}>
                    <ol>
                      <li style={{ marginBottom: 10 }}>
                        <strong>Reason : </strong>
                        The explanation provided by the user for deleting the
                        task.
                      </li>
                      <li style={{ marginBottom: 10 }}>
                        <strong>UKey : </strong>A unique identifier for each
                        deleted task. Clicking on the UKey opens a detailed view
                        of the deleted task, showing information like Title, Due
                        Date, Project, Assignee, Reporter, and other related
                        fields.
                      </li>
                    </ol>
                  </ul>
                  <Card
                    id="inHand-report"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-delete-task.png" />
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>

          <Col xs={0} md={6} lg={5} xl={5} xxl={4}>
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
                    href: "#task-report",
                    title: "Task Report",
                    key: "task-report",
                    children: [
                      {
                        href: "#task-overview",
                        key: "task-overview",
                        title: "Task Overview",
                      },
                      {
                        href: "#inHand-report",
                        key: "inHand-report",
                        title: "InHand Report",
                      },
                      {
                        href: "#weekly-summary",
                        key: "weekly-summary",
                        title: "Weekly Summary",
                      },
                      {
                        href: "#delete-task-report",
                        key: "delete-task-report",
                        title: "Delete-Task Report",
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

export default Reports;
