import React from "react";
import { Layout, Row, Col, Typography, Image, Anchor, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Settings: React.FC = () => {
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
              <Row justify="center" id="general-settings">
                <Col xs={24} md={20} lg={20} xl={20} xxl={15}>
                  <Row>
                    <Col>
                      <Title level={1} style={{ margin: 0, fontWeight: 500 }}>
                        General Settings
                      </Title>
                    </Col>
                  </Row>

                  {/* <div id="sidebar"> */}

                  {/* Projects */}
                  <Title level={3} id="projects">
                    1. Projects -{" "}
                    <span style={{ color: "#898a93", fontSize: 14 }}>
                      Manage all projects
                    </span>
                  </Title>
                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    The Manage All Projects section allows <b>admins</b> to
                    view, edit, and organize all existing projects with complete
                    access to <b>project settings</b> and storage management.
                    <b>Team Leaders</b> can manage their respective project
                    sections, including
                    <b> sprint creation and updates</b>, ensuring smooth
                    coordination and progress tracking across the organization.
                  </Paragraph>

                  <ul style={{ marginLeft: 20, marginTop: 5 }}>
                    <li style={{ fontSize: 16, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Create Project
                      </span>{" "}
                      → Click the <strong>“+ Create Project”</strong> button to
                      add a new project. This opens the{" "}
                      <strong>Add Project</strong> modal where you can enter all
                      necessary project details.
                    </li>

                    <li style={{ fontSize: 16, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Add Project Form
                      </span>{" "}
                      → This form includes essential fields such as:
                      <ul style={{ fontSize: 16, marginBottom: 10 }}>
                        <ol>
                          <li style={{ marginTop: 8, marginBottom: 8 }}>
                            <strong>Project Name:</strong> Enter a unique name
                            for the project.
                          </li>
                          <li style={{ marginBottom: 8 }}>
                            <strong>Alias:</strong> Provide a short code or
                            identifier for easy reference.
                          </li>
                          <li style={{ marginBottom: 8 }}>
                            <strong>Assignee:</strong> Choose one or more team
                            members responsible for project execution.
                          </li>
                          <li style={{ marginBottom: 8 }}>
                            <strong>Team Leader:</strong> Select the project
                            leader who will review and manage team progress.
                          </li>
                          <li style={{ marginBottom: 8 }}>
                            <strong>Description:</strong> Briefly describe the
                            project’s purpose and scope.
                          </li>
                          <li style={{ marginBottom: 8 }}>
                            <strong>Project Logo:</strong> Upload an image or
                            logo that visually represents the project.
                          </li>
                        </ol>
                      </ul>
                    </li>

                    <li style={{ fontSize: 16, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Search & Add Assignees
                      </span>{" "}
                      → Opens a searchable popup where you can select multiple
                      users to assign to the project. Click{" "}
                      <strong>Apply</strong> once the desired assignees are
                      chosen.
                    </li>

                    <li style={{ fontSize: 16, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Review Service
                      </span>{" "}
                      → Enables the <strong>Active Task Review Service</strong>{" "}
                      for that project. When enabled:
                      <ul>
                        <li>
                          Employees and interns cannot mark tasks as{" "}
                          <strong>“Done”</strong>.
                        </li>
                        <li>
                          Only the assigned <strong>Team Leader</strong> can
                          review and close the task after checking progress.
                        </li>
                        <li>
                          Employees completing work will see the option{" "}
                          <strong>“Send-To-TL”</strong> to forward the task for
                          review.
                        </li>
                      </ul>
                    </li>

                    <Card
                      id="projects"
                      style={{
                        background: "#f3f3ffff",
                        borderRadius: 8,
                        margin: "10px 18px",
                      }}
                    >
                      <Image src="/docs-create-projects.png" />
                    </Card>
                  </ul>

                  <ul style={{ marginLeft: 20, marginTop: 5 }}>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Project Filters
                      </span>{" "}
                      → The project filters allow users to manage and view
                      projects based on their current status and review mode:
                      <ul>
                        <li style={{ marginTop: 8, marginBottom: 8 }}>
                          <strong>All Projects:</strong> Displays every project,
                          whether active or inactive.
                        </li>
                        <li style={{ marginBottom: 8 }}>
                          <strong>Deleted Projects:</strong> Lists projects that
                          were removed or archived.
                        </li>
                        <li style={{ marginBottom: 8 }}>
                          <strong>Active:</strong> Shows projects that are
                          currently running and may have the
                          <strong>Task Review Service</strong> enabled.
                        </li>
                        <li style={{ marginBottom: 8 }}>
                          <strong>Inactive:</strong> Displays paused or
                          non-active projects, also indicating whether the Task
                          Review Service is applied.
                        </li>
                      </ul>
                    </li>

                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Logs Panel
                      </span>{" "}
                      → The Logs section provides a detailed history of project
                      activities such as creation, updates, and member
                      assignments. Users can review:
                      <ul>
                        <li style={{ marginTop: 8, marginBottom: 8 }}>
                          Who created or modified the project.
                        </li>
                        <li style={{ marginBottom: 8 }}>
                          Which assignees or team leaders were added or changed.
                        </li>
                        <li style={{ marginBottom: 8 }}>
                          Time and date of the last modification for complete
                          tracking.
                        </li>
                      </ul>
                    </li>

                    <Card
                      id="user-admin-view"
                      style={{
                        background: "#f3f3ffff",
                        borderRadius: 8,
                        margin: "10px 18px",
                      }}
                    >
                      <Image src="/docs-project-filter.png" />
                    </Card>
                  </ul>

                  <ul style={{ marginLeft: 20, marginTop: 5 }}>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Edit Project
                      </span>{" "}
                      → The <strong>Edit</strong> icon (
                      <span style={{ color: "#1890ff" }}>✏️</span>) allows users
                      to modify project details such as name, alias,
                      description, and team structure. Admins and team leaders
                      can use this option to:
                      <ul style={{ marginTop: 6 }}>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Update project names, aliases, and logos as needed.
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Change the assigned <strong>Team Leader</strong> or
                          members.
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Edit project descriptions or other details to keep
                          data current.
                        </li>
                      </ul>
                    </li>

                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Delete Project
                      </span>{" "}
                      → The <strong>Delete</strong> icon (
                      <span style={{ color: "red" }}>🗑️</span>) performs a{" "}
                      <strong>soft delete</strong> action — meaning the project
                      is not permanently removed. Instead, it is moved to the
                      <strong>Deleted Projects</strong> list, where admins can
                      later review or restore it if necessary.
                      <ul style={{ marginTop: 6 }}>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Ensures no accidental data loss.
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Deleted projects can still be viewed from the
                          <strong>
                            Project Filters → Deleted Projects
                          </strong>{" "}
                          tab.
                        </li>
                        <li style={{ fontSize: 15, marginTop: 10 }}>
                          Only <strong>Admins</strong> have the permission to
                          permanently remove a project.
                        </li>
                      </ul>
                    </li>

                    <Card
                      style={{
                        background: "#f3f3ff",
                        borderRadius: 8,
                        margin: "12px 18px",
                        padding: 10,
                        textAlign: "center",
                      }}
                    >
                      <Image
                        src="/docs-project-table.png"
                        alt="Edit and Delete Project Options"
                        style={{ borderRadius: 6, maxWidth: "95%" }}
                      />
                    </Card>
                  </ul>

                  {/* User */}
                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    <Title level={3}>2. User (Admin View)</Title>
                  </Paragraph>
                  <ul style={{ marginLeft: 20, marginTop: 5 }}>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Create User
                      </span>{" "}
                      → The <strong>“Create User”</strong> button allows
                      administrators to add new users into the system. When
                      clicked, it opens a form that collects all necessary
                      information to register a new member. This ensures proper
                      access control and organization hierarchy within the
                      platform.
                      <ul style={{ marginTop: 6 }}>
                        <li style={{ marginTop: 5 }}>
                          <strong>Name:</strong> Enter the full name of the
                          user.
                        </li>
                        <li style={{ marginTop: 5 }}>
                          <strong>Company:</strong> Select the associated
                          company name from the dropdown list.
                        </li>
                        <li style={{ marginTop: 5 }}>
                          <strong>Role:</strong> Defines the user's position and
                          permission level within the system. The available
                          roles are:
                          <ul style={{ marginTop: 5 }}>
                            <li style={{ marginTop: 5 }}>
                              <strong>Intern:</strong> Limited access—can view
                              and update assigned tasks only.
                            </li>
                            <li style={{ marginTop: 5 }}>
                              <strong>Employee:</strong> Standard access—can
                              perform daily work updates and send tasks for
                              review.
                            </li>
                            <li style={{ marginTop: 5 }}>
                              <strong>Team Leader:</strong> Can review employee
                              work, manage sprints, assign tasks, and send
                              approvals to Admin.
                            </li>
                            <li style={{ marginTop: 5 }}>
                              <strong>Admin:</strong> Has full control,
                              including user management, project creation, and
                              company-wide settings.
                            </li>
                          </ul>
                        </li>
                        <li style={{ marginTop: 5 }}>
                          <strong>Email:</strong> Enter the user’s official
                          email ID used for login and notifications.
                        </li>
                        <li style={{ marginTop: 5 }}>
                          <strong>Password:</strong> Default password is{" "}
                          <code>welcome</code> which users can change later.
                        </li>
                        <li style={{ marginTop: 5 }}>
                          <strong>Status:</strong> Choose between{" "}
                          <strong>Active</strong> (grants access) and
                          <strong>Inactive</strong> (restricts login). Inactive
                          users are temporarily disabled but can be reactivated
                          anytime.
                        </li>
                        <li style={{ marginTop: 5 }}>
                          <strong>Note:</strong> Inactive users will not be able
                          to log in until activated by an admin.
                        </li>
                      </ul>
                    </li>

                    <Card
                      style={{
                        background: "#f3f3ff",
                        borderRadius: 8,
                        margin: "12px 18px",
                        padding: 10,
                        textAlign: "center",
                      }}
                    >
                      <Image
                        src="/docs-create-user.png"
                        alt="Create User Highlight"
                        style={{ borderRadius: 6, maxWidth: "95%" }}
                      />
                    </Card>
                  </ul>
                  <ul style={{ marginLeft: 20, marginTop: 5 }}>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        User List Panel
                      </span>{" "}
                      → This section displays all registered users in a tabular
                      format with details such as <strong>Name</strong>,{" "}
                      <strong>Email</strong>,<strong>Status</strong>, and{" "}
                      <strong>Company Name</strong>. It also includes several
                      filters and actions to manage users efficiently.
                      <ul style={{ marginTop: 6 }}>
                        <li style={{ marginTop: 5 }}>
                          <strong>Search List:</strong> Quickly search users by
                          name or email to find specific members within the
                          list.
                        </li>
                        <li style={{ marginTop: 5 }}>
                          <strong>Role Filter:</strong> Allows filtering users
                          based on their assigned roles such as:
                          <ul style={{ marginTop: 5 }}>
                            <li>
                              <strong>Intern</strong> – Basic access level for
                              trainees.
                            </li>
                            <li>
                              <strong>Employee</strong> – Regular access for
                              daily work updates.
                            </li>
                            <li>
                              <strong>Team Leader</strong> – Can manage and
                              review employee tasks.
                            </li>
                            <li>
                              <strong>Admin</strong> – Full access to system
                              management.
                            </li>
                          </ul>
                        </li>
                        <li style={{ marginTop: 5 }}>
                          <strong>Status Filter:</strong> Filters users by their
                          account status.
                          <ul style={{ marginTop: 5 }}>
                            <li>
                              <strong>Active</strong> – Users who can log in and
                              access the system.
                            </li>
                            <li>
                              <strong>Inactive</strong> – Users temporarily
                              restricted from login.
                            </li>
                          </ul>
                        </li>
                        <li style={{ marginTop: 5 }}>
                          <strong>Select Company:</strong> Filters users
                          belonging to a specific company within the
                          organization. Useful when managing multiple company
                          databases under one admin account.
                        </li>
                        <li style={{ marginTop: 5 }}>
                          <strong>Logs Button:</strong> Opens a detailed
                          activity panel on the right side of the screen,
                          displaying user-related actions such as:
                          <ul style={{ marginTop: 5 }}>
                            <li>New user creation with date and time.</li>
                            <li>Role updates or status changes.</li>
                            <li>
                              Admin activity logs with color-coded differences
                              (e.g.,
                              <span style={{ color: "red" }}>old value</span> →
                              <span style={{ color: "green" }}>new value</span>
                              ).
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <Card
                      id="project-sprint"
                      style={{
                        background: "#f3f3ff",
                        borderRadius: 8,
                        margin: "12px 18px",
                        padding: 10,
                        textAlign: "center",
                      }}
                    >
                      <Image
                        src="/docs-user-fiter.png"
                        alt="User List Filters and Logs Highlight"
                        style={{ borderRadius: 6, maxWidth: "95%" }}
                      />
                    </Card>
                  </ul>

                  {/* Sprint */}

                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    <Title level={3}>
                      3. Project Sprint{" "}
                      <span style={{ color: "#898a93", fontSize: 14 }}>
                        Organize sprints
                      </span>
                    </Title>
                  </Paragraph>

                  <ul style={{ marginLeft: 20, marginTop: 5 }}>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Sprint Management
                      </span>{" "}
                      → The Sprint Management page allows administrators to
                      create, view, and manage sprints associated with specific
                      projects.
                      <ul style={{ marginTop: 6 }}>
                        <li style={{ marginTop: 5 }}>
                          <strong>Create Sprints:</strong> Clicking the
                          <span style={{ color: "#007bff" }}>
                            {" "}
                            + Create Sprints{" "}
                          </span>{" "}
                          button opens a form where users can define a new
                          sprint. Each sprint can be linked to a specific
                          project to organize task flow efficiently.
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Project Dropdown:</strong> The dropdown at the
                          top-right corner enables filtering of sprints by
                          project name. Selecting a project (e.g.,
                          <em>CapsiTask</em>) displays only the sprints
                          associated with that project.
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Sprint List Table:</strong> Displays all
                          sprints in a clean and structured format. Each row
                          includes:
                          <ul style={{ marginTop: 5 }}>
                            <li>
                              <strong>S.No:</strong> Sprint index number in the
                              list.
                            </li>
                            <li>
                              <strong>Name:</strong> The sprint name (e.g.,
                              Capsitech Projects 1, 2, etc.).
                            </li>
                            <li>
                              <strong>Edit Icon:</strong> Allows modification of
                              sprint details directly from the list.
                            </li>
                          </ul>
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Pagination:</strong> Located at the
                          bottom-left corner, this lets users control how many
                          sprints are displayed per page (e.g., 15 / page).
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Refresh Button:</strong> The circular refresh
                          icon on the top-right reloads sprint data and ensures
                          that the latest updates are displayed without manual
                          page refresh.
                        </li>
                      </ul>
                    </li>

                    <Card
                      id="all-branch"
                      style={{
                        background: "#f3f3ff",
                        borderRadius: 8,
                        margin: "12px 18px",
                        padding: 10,
                        textAlign: "center",
                      }}
                    >
                      <Image
                        src="/docs-sprint.png"
                        alt="Sprint Management Page Highlights"
                        style={{ borderRadius: 6, maxWidth: "95%" }}
                      />
                    </Card>
                  </ul>

                  <Paragraph
                    id="delete-task-report"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <Title level={3}>
                      4. All Branch{" "}
                      <span style={{ color: "#898a93", fontSize: 14 }}>
                        Control branches
                      </span>
                    </Title>
                  </Paragraph>

                  <ul style={{ marginLeft: 20, marginTop: 5 }}>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Branch Management
                      </span>{" "}
                      → The Branch Management page helps users create and manage
                      branches linked to projects or repositories. It provides
                      options for adding, viewing, and editing branches
                      efficiently.
                      <ul style={{ marginTop: 6 }}>
                        <li>
                          <strong>+ Create Branch:</strong> The blue button at
                          the top-left corner allows users to add a new branch.
                          When clicked, a modal opens where the branch name and
                          other details can be entered.
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Branch List Table:</strong> Displays all
                          existing branches in a sequential list format. Each
                          entry includes:
                          <ul style={{ marginTop: 5 }}>
                            <li>
                              <strong>S. No:</strong> Serial number of the
                              branch in the list.
                            </li>
                            <li>
                              <strong>Name:</strong> The branch name (e.g.,{" "}
                              <em>paye</em>, <em>fetchSic</em>, etc.).
                            </li>
                            <li>
                              <strong>Edit Icon:</strong> The pencil icon on the
                              right allows users to modify branch names
                              directly.
                            </li>
                          </ul>
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Search Branch:</strong> The search bar in the
                          top-right corner enables quick searching of branches
                          by name, helping users locate specific branches
                          instantly.
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Refresh Button:</strong> The circular arrow
                          icon reloads the branch list to display the most
                          recent updates without reloading the page manually.
                        </li>
                      </ul>
                    </li>

                    <Card
                      id="issue"
                      style={{
                        background: "#f3f3ff",
                        borderRadius: 8,
                        margin: "12px 18px",
                        padding: 10,
                        textAlign: "center",
                      }}
                    >
                      <Image
                        src="/docs-branch.png"
                        alt="Branch Management Page Highlights"
                        style={{ borderRadius: 6, maxWidth: "95%" }}
                      />
                    </Card>
                  </ul>

                  <Paragraph
                    id="delete-task-report"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <Title level={3}>
                      5. Issue{" "}
                      <span style={{ color: "#898a93", fontSize: 14 }}>
                        Track & resolve issues
                      </span>
                    </Title>
                  </Paragraph>

                  <ul style={{ marginLeft: 20, marginTop: 5 }}>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Issue Type Management
                      </span>{" "}
                      → This page allows administrators to manage and configure
                      the types of issues that can be created within a project.
                      Common issue types include Task, Bug, Error, Story, and
                      Epic.
                      <ul style={{ marginTop: 6 }}>
                        <li style={{ marginTop: 5 }}>
                          <strong>+ Create Issue:</strong> The blue button at
                          the top-left corner allows users to add new issue
                          types. Clicking this button opens a form or modal
                          where the issue name can be defined.
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Issue Type List Table:</strong> Displays all
                          existing issue types in a structured table format.
                          <ul style={{ marginTop: 5 }}>
                            <li>
                              <strong>S. No:</strong> Serial number of the issue
                              type.
                            </li>
                            <li>
                              <strong>Name:</strong> The name of the issue type
                              (e.g., Task, Bug, Story).
                            </li>
                            <li>
                              <strong>Edit Icon:</strong> The pencil icon on the
                              right side allows users to edit the issue name or
                              modify related configurations.
                            </li>
                          </ul>
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Search Issue:</strong> The search bar located
                          at the top-right enables users to quickly find an
                          issue type by name for easier navigation.
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Refresh Button:</strong> The circular refresh
                          icon reloads the list of issue types to display any
                          new additions or updates without reloading the full
                          page.
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Pagination:</strong> Found at the bottom of
                          the table, this feature allows users to control how
                          many issue types are displayed per page and navigate
                          between multiple pages of results.
                        </li>
                      </ul>
                    </li>

                    <Card
                      id="review-type"
                      style={{
                        background: "#f3f3ff",
                        borderRadius: 8,
                        margin: "12px 18px",
                        padding: 10,
                        textAlign: "center",
                      }}
                    >
                      <Image
                        src="/docs-issue.png"
                        alt="Issue Type Management Page Highlights"
                        style={{ borderRadius: 6, maxWidth: "95%" }}
                      />
                    </Card>
                  </ul>

                  <Paragraph
                    id="delete-task-report"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <Title level={3}>
                      6. Review Type{" "}
                      <span style={{ color: "#898a93", fontSize: 14 }}>
                        Setup review types
                      </span>
                    </Title>
                  </Paragraph>

                  <ul style={{ marginLeft: 20, marginTop: 5 }}>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Review Type (Settings)
                      </span>{" "}
                      → This section allows administrators to define and manage
                      various types of performance review criteria used during
                      task evaluations. These review types are later used by
                      Team Leaders or Admins when assessing task submissions.
                      <ul style={{ marginTop: 6 }}>
                        <li>
                          <strong>+ Add Review Type:</strong> Opens a form to
                          create a new review criterion (e.g., Attendance,
                          Communication, Technical Skills). This helps
                          standardize evaluation across all team members.
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Search Review Type:</strong> A search field
                          used to quickly locate a specific review type by its
                          name — especially useful when the list is long.
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Refresh Icon:</strong> Reloads the list to
                          show the most recent updates or changes made to review
                          types.
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Table Columns:</strong>
                          Displays a structured list of all available review
                          types:
                          <ul style={{ marginTop: 5 }}>
                            <li>
                              <strong>S. No:</strong> Serial number representing
                              the order of each review type.
                            </li>
                            <li>
                              <strong>Name:</strong> The title or label of the
                              review criterion (e.g., Code Quality, Timeliness).
                            </li>
                            <li>
                              <strong>Edit Icon:</strong> Allows modification of
                              an existing review type name if updates are
                              required.
                            </li>
                            <li>
                              <strong>Delete Icon:</strong> Permanently removes
                              the selected review type from the list.
                            </li>
                          </ul>
                        </li>

                        <li style={{ marginTop: 5 }}>
                          <strong>Pagination Control:</strong> Located at the
                          bottom-left, it allows users to select how many items
                          to display per page (e.g., 15, 30, 50), making
                          navigation through longer lists easier.
                        </li>
                      </ul>
                    </li>

                    <Card
                      id="group-projects"
                      style={{
                        background: "#f3f3ff",
                        borderRadius: 8,
                        margin: "12px 18px",
                        padding: 10,
                        textAlign: "center",
                      }}
                    >
                      <Image
                        src="/docs-review-type.png"
                        alt="Review Type Page Highlights"
                        style={{ borderRadius: 6, maxWidth: "95%" }}
                      />
                    </Card>
                  </ul>

                  <Paragraph
                    id="delete-task-report"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <Title level={3}>
                      7. Groups Projects{" "}
                      <span style={{ color: "#898a93", fontSize: 14 }}>
                        Manage groups
                      </span>
                    </Title>
                  </Paragraph>

                  <ul style={{ marginLeft: 20, marginTop: 5 }}>
                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Project Group (Settings)
                      </span>{" "}
                      → This section helps administrators organize multiple
                      related projects into logical groups. Grouping projects
                      simplifies management, reporting, and permission handling.
                      <ul style={{ marginTop: 6 }}>
                        <li>
                          <strong>+ Create Group:</strong> Opens a modal form to
                          create a new project group. The admin can enter a
                          group name and assign one or more projects under it.
                        </li>

                        <li style={{ marginTop: 6 }}>
                          <strong>Search by Name:</strong> A search bar to
                          quickly find any group by its name. Useful when many
                          project groups exist.
                        </li>

                        <li style={{ marginTop: 6 }}>
                          <strong>Refresh Icon:</strong> Reloads the list to
                          reflect any recent additions or modifications to
                          project groups.
                        </li>

                        <li style={{ marginTop: 6 }}>
                          <strong>Table Columns:</strong>
                          <ul style={{ marginTop: 5 }}>
                            <li>
                              <strong>S. No:</strong> Displays the serial number
                              of each group.
                            </li>
                            <li>
                              <strong>Name:</strong> Shows the title of the
                              group created by the admin (e.g., Acting Office,
                              Debitum).
                            </li>
                            <li>
                              <strong>Edit Icon:</strong> Opens the{" "}
                              <em>Edit Group</em> modal to update group details
                              such as name or associated projects.
                            </li>
                          </ul>
                        </li>

                        <li style={{ marginTop: 6 }}>
                          <strong>Pagination:</strong> Controls how many groups
                          are shown per page and allows navigation through
                          multiple pages.
                        </li>
                      </ul>
                    </li>

                    <li style={{ fontSize: 15, marginTop: 10 }}>
                      <span style={{ color: "#007bff", fontSize: 16 }}>
                        Edit Group (Modal)
                      </span>{" "}
                      → When an admin clicks the edit icon beside any group
                      name, the <strong>Edit Group</strong>
                      modal appears.
                      <ul style={{ marginTop: 6 }}>
                        <li style={{ marginTop: 6 }}>
                          <strong>Name Field:</strong> Displays the current
                          group name. Admins can edit it to rename the group.
                        </li>
                        <li style={{ marginTop: 6 }}>
                          <strong>Projects Field:</strong> A multi-select input
                          showing all the projects associated with the selected
                          group. Each project name is displayed as a tag.
                        </li>
                        <li style={{ marginTop: 6 }}>
                          <strong>Remove Tag (×):</strong> Clicking on the ×
                          icon beside a project name removes that project from
                          the group.
                        </li>
                        <li style={{ marginTop: 6 }}>
                          <strong>Add Dropdown:</strong> Allows selection of
                          additional projects from the list to include in the
                          same group.
                        </li>
                        <li style={{ marginTop: 6 }}>
                          <strong>Save Changes:</strong> After editing, clicking
                          the save button updates the group configuration in the
                          database.
                        </li>
                      </ul>
                    </li>

                    <Card
                      style={{
                        background: "#f4f6ff",
                        borderRadius: 8,
                        margin: "12px 18px",
                        padding: 10,
                        textAlign: "center",
                      }}
                    >
                      <Image
                        src="/docs-groupimg.png"
                        alt="Project Group Page and Edit Group Modal"
                        style={{ borderRadius: 6, maxWidth: "95%" }}
                      />
                    </Card>
                  </ul>
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
                    href: "#general-settings",
                    key: "general-settings",
                    title: "General Settings",
                    children: [
                      {
                        href: "#projects",
                        key: "projects",
                        title: "Projects",
                      },
                      {
                        href: "#user-admin-view",
                        key: "user-admin-view",
                        title: "User & Admin View",
                      },
                      {
                        href: "#project-sprint",
                        key: "project-sprint",
                        title: "Project Sprint",
                      },
                      {
                        href: "#all-branch",
                        key: "all-branch",
                        title: "All Branch",
                      },
                      {
                        href: "#issue",
                        key: "issue",
                        title: "Issue",
                      },
                      {
                        href: "#review-type",
                        key: "review-type",
                        title: "Review Type",
                      },
                      {
                        href: "#group-projects",
                        key: "group-projects",
                        title: "Groups Projects",
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

export default Settings;
