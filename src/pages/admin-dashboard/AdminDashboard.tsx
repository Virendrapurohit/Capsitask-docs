import React from "react";
import { Layout, Row, Col, Typography, Image, Anchor, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const AdminDashboard: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <Content>
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
              <Row justify="center" id="view-all">
                <Col xs={24} md={20} lg={20} xl={20} xxl={15}>
                  <Row>
                    <Col>
                      <Title level={1} style={{ margin: 0, fontWeight: 500 }}>
                        Dashboard
                      </Title>
                    </Col>
                  </Row>
                  <Card
                    id="view-all"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-dashboard.png" />
                  </Card>
                  <Paragraph
                    id="sidebar"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    Capsitask provides you the best compliance Task management
                    system and here is a tour to it through the dashboard that
                    provides you real-time insights into{" "}
                    <strong>user performance</strong> ,
                    <strong> upcoming deadlines</strong> ,{" "}
                    <strong>Project Overview Section</strong> ,{" "}
                    <strong>Task Report</strong> ,
                    <strong>Assignee Contribution</strong>,
                    <strong>Highly Active Projects</strong> and much more - all
                    in one place. Designed to keep you informedand in control,
                    the Dashboard helps you make quick.
                  </Paragraph>

                  {/* <div id="sidebar"> */}
                  <Title level={3} id="view-all">
                    1. View All Projects
                  </Title>
                  <Paragraph
                    id="view-all"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    The <strong>View All Projects</strong> section provides
                    users with a complete list of all the projects they are
                    assigned to. It displays detailed project information in a
                    structured table format, helping users quickly understand
                    their project responsibilities and status.
                  </Paragraph>
                  <Paragraph
                    id="view-all"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <li>
                      <strong>Table Columns and Details:</strong>
                      <ul style={{ marginLeft: 20, marginTop: 5 }}>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Project Alias
                          </span>{" "}
                          → A short identifier used to easily recognize the
                          project.
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>Project Name</span>{" "}
                          → The full name of the project.
                        </li>

                        <li>
                          <span style={{ color: "#1976d2" }}>Task Count</span> →
                          Shows the total number of tasks within the project,
                          categorized by:
                          <br /> 1. To Do <br />
                          2. In Progress <br />
                          3. Done
                        </li>
                        <li>
                          <span style={{ color: "#1976d2" }}>Assignees</span> →
                          Displays how many members are assigned to the project.
                        </li>
                        <li>
                          <span style={{ color: "#1976d2" }}>Created Date</span>{" "}
                          → The date when the project was created.
                        </li>
                      </ul>
                    </li>
                  </Paragraph>
                  <Card
                    id="projects"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-dash-view-all.png" />
                  </Card>

                  <Title level={3} id="projects">
                    2. Projects
                  </Title>
                  <Paragraph
                    id="projects"
                    style={{ fontSize: 15, margin: "0px 22px" }}
                  >
                    In the Capsitask Dashboard, users can interact with projects
                    and assignees for quick access to detailed information.
                  </Paragraph>
                  <Paragraph
                    id="projects"
                    style={{ fontSize: 15, margin: "0px 22px" }}
                  >
                    <li>
                      <strong>Project Card Overview:</strong>
                      <ul style={{ marginLeft: 20, marginTop: 5 }}>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Project Alias
                          </span>{" "}
                          → A short identifier used to easily recognize the
                          project.
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Assignee Count
                          </span>{" "}
                          → Number of team members assigned (e.g., 6 Assignees).
                        </li>

                        <li>
                          <span style={{ color: "#1976d2" }}>
                            Quick Task Summary
                          </span>{" "}
                          →
                          <br /> 1. To Do: 62
                          <br />
                          2. In Progress: 14 <br />
                          3. Done: 204
                        </li>

                        <li>
                          <span style={{ color: "#1976d2" }}>
                            Project Created Date
                          </span>{" "}
                          → The date when the project was created.
                        </li>
                      </ul>
                    </li>
                  </Paragraph>
                  <Paragraph
                    id="projects"
                    style={{ fontSize: 15, margin: "0px 22px" }}
                  >
                    <li>
                      <strong>Interactive Actions:</strong>
                      <ul style={{ marginLeft: 20, marginTop: 5 }}>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Click on a Project Card
                          </span>{" "}
                          → Opens the project details page showing all related
                          tasks, their statuses, priorities, and board pages.
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Click on the Assignee Count
                          </span>{" "}
                          → Opens a table listing all users assigned to that
                          project or <strong>Click on a User Name </strong>
                          Navigates directly to the User Details Page, where you
                          can view:
                        </li>
                      </ul>
                    </li>
                  </Paragraph>
                  <Card
                    id="task-report"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-project.png" />
                  </Card>
                  <Title level={3} id="view-all">
                    3. Task Report and Assignee Contribution
                  </Title>
                  <Paragraph
                    id="assignee-contribution"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <li>
                      <strong>Task Report:</strong>
                      <Paragraph style={{ fontSize: 15, margin: "0px 22px" }}>
                        The Task Report section provides a visual summary of all
                        tasks within a selected project. Users can select a
                        project from the dropdown (e.g., Hybrid) to view its
                        current task distribution.
                      </Paragraph>
                      <ul style={{ marginLeft: 20, marginTop: 5 }}>
                        <li>Displayed Information</li>
                        <li>
                          Gives a real-time overview of task statuses within the
                          project. Helps track overall project health and
                          identify bottlenecks. Uses a color-coded donut chart
                          for easy visual analysis.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong id="assignee-contribution">
                        Assignee Contribution:
                      </strong>
                      <Paragraph>
                        Right below the Task Report, the Assignee Contribution
                        section provides a detailed summary of each team
                        member’s task performance.
                      </Paragraph>
                      <ul style={{ marginLeft: 20, marginTop: 5 }}>
                        <li>
                          <span style={{ color: "#007bff" }}>Assignee:</span> →
                          Assignee: Name of the team member assigned to the
                          project.
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Task Assigned:
                          </span>{" "}
                          → Total number of tasks assigned to the user.
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>Completed:</span> →
                          Number of tasks successfully completed.
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Contribution:
                          </span>{" "}
                          → Completion percentage displayed as a progress bar.
                        </li>
                      </ul>
                    </li>
                  </Paragraph>
                  <Card
                    id="project-status"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-task-report-assignee.png" />
                  </Card>

                  <Title level={3} id="project-status-admin">
                    4. (A) Project Status (Admin View)
                  </Title>
                  <Paragraph style={{ fontSize: 15, margin: "0px 22px" }}>
                    The Project Status section provides a quick visual
                    comparison of task priorities within a selected project.
                    This chart helps admins analyze how tasks are distributed
                    based on priority levels such as High, Medium, and Low.
                  </Paragraph>
                  <Paragraph
                    id="bulk-tasks"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <li>
                      <strong>Key Features:</strong>

                      <ul style={{ marginLeft: 20, marginTop: 5 }}>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Project Selection Dropdown:
                          </span>{" "}
                          → The dropdown menu allows the admin to switch between
                          multiple projects (e.g., Flipoke, Stock & Inventory,
                          Capsitech Accounts, etc.) to view their respective
                          task statuses.
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Bar Chart Visualization:
                          </span>{" "}
                          → Displays the number of tasks based on their priority
                          level. Each bar represents: <br />
                          1. High: Tasks that require immediate attention.
                          <br />
                          2. Medium: Tasks of moderate importance. <br />
                          3. Low: Tasks with the least urgency.
                          <br />
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Hover Insights:
                          </span>{" "}
                          → When hovering over a bar, a tooltip displays the
                          priority type and the total task count (e.g., High –
                          Task Count 3).
                        </li>
                      </ul>
                    </li>
                  </Paragraph>
                  <Card
                    id="pending-tasks-teamLeader/employee"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-project-status.png" />
                  </Card>

                  <Title level={3} id="pending-tasks-teamLeader/employee">
                    4. (B) Pending Tasks (TeamLeader/Employee)
                  </Title>
                  <Paragraph style={{ fontSize: 15, margin: "0px 22px" }}>
                    The Pending Tasks section displays the top{" "}
                    <strong>High</strong> Priority tasks that are currently
                    assigned to the logged-in user. This section helps users
                    quickly identify and focus on their most critical tasks that
                    need immediate attention.
                  </Paragraph>
                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    <li>
                      <strong>Key Details:</strong>

                      <ul style={{ marginLeft: 20, marginTop: 5 }}>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            High Priority Filter:
                          </span>{" "}
                          → Only tasks marked with High Priority are displayed
                          in this section.
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>Task Limit:</span>{" "}
                          → The list shows a maximum of 15 tasks at a time to
                          maintain clarity and focus. (If there are more than 15
                          high-priority tasks, only the first 15 are displayed.)
                        </li>

                        <li>
                          <span style={{ color: "#007bff" }}>
                            User-Specific View:
                          </span>{" "}
                          → Each user sees only their own assigned high-priority
                          tasks. Tasks belonging to other users are not visible.
                        </li>
                      </ul>
                    </li>
                  </Paragraph>
                  <Card
                    id="highly-active-project"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-pending-task.png" />
                  </Card>

                  <Title level={3} id="highly-active-project">
                    5. Highly Active Project & Chart
                  </Title>
                  <Paragraph style={{ fontSize: 15, margin: "0px 22px" }}>
                    The Highly Active Project section highlights the projects
                    with the highest task activity within the selected year.
                    This section helps users quickly identify which projects are
                    most actively worked on and progressing.
                  </Paragraph>
                  <Paragraph
                    id="bulk-tasks"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <li>
                      <strong>Key Details:</strong>

                      <ul style={{ marginLeft: 20, marginTop: 5 }}>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Ranking Based on Activity:
                          </span>{" "}
                          → Projects are ranked from most active to least active
                          according to the number of tasks created or updated
                          within the selected year.
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Top Priority Display:
                          </span>{" "}
                          → The project with the highest number of tasks appears
                          at the top of the list.
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Data Columns:
                          </span>{" "}
                          <br />
                          1. <strong>Project Name</strong>: Displays the
                          project’s title along with its short code (e.g., LTS,
                          HP). <br />
                          2. <strong>Team: Number</strong>: of members assigned
                          to the project.
                          <br />
                          3. <strong>Start Date</strong>: The date when the
                          project was initiated.
                          <br />
                          4. <strong> Progress</strong>: Visual progress bar
                          showing the completion percentage based on task
                          status.
                          <br />
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Activity Chart Integration:
                          </span>{" "}
                          → The Activity Percentage chart above shows the same
                          data in graphical form, representing how much each
                          project contributes to total task activity.
                        </li>
                      </ul>
                    </li>
                  </Paragraph>

                  <Card
                    id="upcoming-deadlines"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-highly- active-chart.png" />
                  </Card>

                  <Title level={3} id="view-all">
                    5. (A) Upcoming Deadlines (Admin View)
                  </Title>
                  <Paragraph style={{ fontSize: 15, margin: "0px 22px" }}>
                    The <strong>Upcoming Deadlines</strong> section helps users
                    quickly identify tasks that are due within the next 7 days.
                    It ensures that important tasks are not missed and provides
                    a centralized view of all upcoming work items.
                  </Paragraph>
                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    <li>
                      <strong>Key Functionalities:</strong>

                      <ul style={{ marginLeft: 20, marginTop: 5 }}>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            7-Day Task Preview:
                          </span>{" "}
                          → Displays tasks that have a deadline within the next
                          7 days from the current date. This allows users to
                          stay on top of urgent or near-due tasks.
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            View All Option:
                          </span>{" "}
                          → Clicking “View All” opens a detailed task list where
                          users can view all tasks across projects, not limited
                          to the 7-day range.
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>Date Filter:</span>{" "}
                          → The expanded view includes a custom date range
                          filter (Start Date – End Date), allowing users to view
                          tasks within a specific time window. <br />
                          Users can select any date range to find upcoming,
                          overdue, or future tasks.
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            Project Grouping:
                          </span>{" "}
                          → Tasks are grouped by project, so users can easily
                          see which project each task belongs to. The dropdown
                          on the right allows filtering by a specific project.
                        </li>
                      </ul>
                    </li>
                  </Paragraph>
                  <Card
                    id="latest-activity"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-upcoming.png" />
                  </Card>

                  <Title level={3} id="view-all">
                    5. (B) Upcoming Deadlines & Latest Activity
                    (TeamLeader/Employee)
                  </Title>
                  <Paragraph style={{ fontSize: 15, margin: "0px 22px" }}>
                    The <strong>Upcoming Deadlines</strong> so you mean the
                    “Upcoming Deadlines” section in the Employee/TeamLeader
                    dashboard should work exactly the same as it does for the
                    Admin, right?
                  </Paragraph>
                  <Paragraph
                    id="bulk-tasks"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <li>
                      <strong>Latest Activity - Key Functionalities:</strong>

                      <ul style={{ marginLeft: 20, marginTop: 5 }}>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            When Role = Employee
                          </span>{" "}
                          → The “Latest Activity” panel shows only that user’s
                          own activity logs (like their created/updated
                          tasks.all).{" "}
                        </li>
                        <li>
                          <span style={{ color: "#007bff" }}>
                            When Role = Team Leader
                          </span>{" "}
                          → The “Latest Activity” panel should show logs for all
                          users who are assignees in the projects that the team
                          leader is assigned to.
                          <br /> So it’s not only their own logs, but also the
                          activity of their project team members.
                        </li>
                      </ul>
                    </li>
                  </Paragraph>
                  <Card
                    id="navigation"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-latest- activity.png" />
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
                    href: "#view-all",
                    key: "view-all",
                    title: "View All Projects",
                  },

                  {
                    href: "#projects",
                    title: "Projects",
                    key: "projects",
                    // children: [
                    //   {
                    //     href: "#navigation",
                    //     key: "navigation",
                    //     title: "Add To Navigation",
                    //   },
                    //   {
                    //     href: "#bulk-tasks",
                    //     key: "bulk-tasks",
                    //     title: "Bulk Tasks",
                    //   },
                    //   {
                    //     href: "#create-task",
                    //     key: "create-task",
                    //     title: "Create Task",
                    //   },
                    //   {
                    //     href: "#user-profile",
                    //     key: "user-profile",
                    //     title: "User Profile Menu",
                    //   },
                    // ],
                  },

                  {
                    href: "#task-report",
                    title: "Task Report",
                    key: "task-report",
                    children: [
                      {
                        href: "#assignee-contribution",
                        key: "assignee-contribution",
                        title: "Assignee Contribution",
                      },
                    ],
                  },
                  {
                    href: "#project-status",
                    title: "Project Status",
                    key: "project-status",
                    children: [
                      {
                        href: "#project-status-admin",
                        key: "project-status-admin",
                        title: "Project Status (Admin View)",
                      },
                      {
                        href: "#pending-tasks-teamLeader/employee",
                        key: "pending-tasks-teamLeader/employee",
                        title: "Pending Tasks (TeamLeader/Employee)",
                      },
                    ],
                  },
                  {
                    href: "#highly-active-project",
                    title: " Highly Active Project & Chart",
                    key: "highly-active-project",
                  },

                  {
                    href: "#upcoming-deadlines",
                    title: "Upcoming Deadlines",
                    key: "upcoming-deadlines",
                  },
                  {
                    href: "#latest-activity",
                    title: "Latest Activity",
                    key: "latest-activity",
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

export default AdminDashboard;
