import React from "react";
import { Layout, Row, Col, Typography, Image, Anchor, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Adminlayout: React.FC = () => {
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
              <Row justify="center" id="sidebar">
                <Col xs={24} md={20} lg={15}>
                  <Row>
                    <Col>
                      <Title level={1} style={{ margin: 0, fontWeight: 500 }}>
                        Layout
                      </Title>
                    </Col>
                  </Row>

                  {/* <div id="sidebar"> */}
                  <Title level={3} id="sidebar">
                    1. Sidebar
                  </Title>
                  <Paragraph
                    id="sidebar"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    The Sidebar contains all the main menus, allowing users to
                    easily navigate and access different sections of the
                    application such as Dashboard, Profile, Attendance, Tasks,
                    and more.
                  </Paragraph>
                  <Card
                    id="topbar"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-admin1.png" />
                  </Card>

                  <Title level={3} id="topbar">
                    2. Topbar
                  </Title>
                  <Card
                    id="navigation"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-topbar.png" />
                  </Card>
                  <Paragraph
                    id="topbar"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <ul>
                      <li>
                        The Top Bar provides important user information and
                        quick-access actions:
                      </li>
                      <li id="navigation">
                        <strong>Add To Navigation :</strong> Allows users to add
                        or remove specific fields/pages from the sidebar
                        navigation. When the button is clicked, the selected
                        page is dynamically added to or removed from the sidebar
                        menu, providing customizable navigation for the
                        logged-in user.
                      </li>
                    </ul>
                  </Paragraph>
                  <Card
                    id="bulk-tasks"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-add-navigation.png" />
                  </Card>
                  <Paragraph
                    id="bulk-tasks"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <li>
                      <strong>Bulk Task Creation : </strong>
                      <mark>Inline Task Creation & Sheet Import/Export</mark>
                      <br />
                      Create and edit tasks directly in a spreadsheet-like grid.
                      <br></br>
                      <strong>Key Actions:</strong>
                      <ul style={{ marginLeft: 20, marginTop: 5 }}>
                        <li>
                          <span style={{ color: "#007bff" }}>+ Add Row</span> →
                          Instantly add a new task all items add.
                        </li>
                        <li>
                          Edit fields inline → Click <em>Apply all fields</em>{" "}
                          to save.
                        </li>
                        <li>
                          <span style={{ color: "#d81b60" }}>Import Sheet</span>{" "}
                          → Upload CSV/Excel to add multiple tasks.
                        </li>
                        <li>
                          <span style={{ color: "#1976d2" }}>
                            Download Sheet
                          </span>{" "}
                          → Export tasks for reports or backup.
                        </li>
                      </ul>
                      <em>
                        Perfect for bulk updates, sprint planning, and data
                        migration.
                      </em>
                    </li>
                  </Paragraph>
                  <Card
                   id="create-task"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-bulk-tasks.png" />
                  </Card>
                  <Paragraph
                    id="create-task"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <li>
                      <strong>Create Task : </strong> Task Creation
                    </li>

                    <strong>Key Actions:</strong>
                    <ul style={{ marginLeft: 20, marginTop: 5 }}>
                      <li>
                        <span style={{ color: "#007bff" }}>Projects</span> →
                        While creating a task, select the Project from the
                        available list. This ensures that the task is linked to
                        the correct project workspace for better tracking and
                        organization.
                      </li>
                      <li>
                        Title →{" "}
                        <em>
                          Enter a descriptive title for the task. (Required)
                        </em>
                      </li>
                      <ul>
                        <li>
                          <span style={{ color: "#d81b60" }}>Priority</span> →
                          Task priority defines the importance and urgency of a
                          task. There are three types of priority levels:
                          <ol>
                            <li>
                              <strong>Low </strong>- Non-urgent or less critical
                              tasks that can be done later without affecting the
                              project timeline.
                            </li>
                            <li>
                              <strong>Medium </strong>- Moderately important
                              tasks that should be completed soon to maintain
                              workflow balance.
                            </li>
                            <li>
                              <strong>High </strong>- Urgent or critical tasks
                              that must be completed as soon as possible, as
                              they directly impact progress or delivery.
                            </li>
                          </ol>
                        </li>
                      </ul>

                      <li>
                        <span style={{ color: "#1976d2" }}>Start Date</span> →
                        The Start Date is the date when the task is created or
                        officially started. It indicates when work on the task
                        begins and helps in tracking progress.
                      </li>
                      <li>
                        <span style={{ color: "#1976d2" }}>Deadline</span> → The
                        Deadline is the target completion date of the task. It
                        defines when the task should be finished to ensure
                        timely delivery and smooth project flow.
                      </li>
                      <li>
                        <span style={{ color: "#1976d2" }}>Sprint</span> → A
                        Sprint is a specific time frame within which certain
                        tasks need to be completed. Tasks are displayed on the
                        Sprint Board or Backlog, and each sprint has its own
                        goal and deadline. Tasks should be completed before the
                        sprint ends.
                      </li>
                      <li>
                        <span style={{ color: "#1976d2" }}>Category</span> →
                        Category selection is optional. It helps to classify
                        tasks based on their type or purpose (e.g., Development,
                        Design, Testing).
                      </li>

                      <ul>
                        <li>
                          <span style={{ color: "#1976d2" }}>Status</span> →
                          Task priority defines the importance and urgency of a
                          task. There are three types of priority levels:
                          <ol>
                            <li>
                              <strong>Backlog </strong>- The task has been
                              created but not yet scheduled for work. It’s in
                              the idea or pending stage.
                            </li>
                            <li>
                              <strong>To Do </strong>- The task has been
                              approved and is ready to start but work has not
                              yet begun.
                            </li>
                            <li>
                              <strong>In Progress </strong>- Work on the task is
                              currently ongoing.
                            </li>
                            <li>
                              <strong>Need to Discuss </strong>- The task needs
                              clarification or discussion before proceeding
                              further.
                            </li>
                            <li>
                              <strong>Testing </strong>- he task has been
                              completed by the developer and is currently under
                              the internal testing phase. QA teams check whether
                              the task meets technical and functional
                              requirements.
                            </li>
                            <li>
                              <strong>UAT (User Acceptance Testing) </strong>-
                              The task is under user-level testing where the
                              client or end user validates the functionality
                              before final approval.
                            </li>
                            <li>
                              <strong>Developed </strong>- The task has been
                              fully developed or implemented and is ready for
                              review or deployment.
                            </li>
                          </ol>
                        </li>
                      </ul>

                      <ul>
                        <li>
                          <span style={{ color: "#1976d2" }}>Issue Type</span> →
                          Task priority defines the importance and urgency of a
                          task. There are three types of priority levels:
                          <ol>
                            <li>
                              <strong>Bug </strong>- Used when something in the
                              system or application is not working as expected
                              and needs fixing.
                            </li>
                            <li>
                              <strong>Error </strong>- MSimilar to a bug but
                              often caused by configuration issues, data
                              problems, or human mistakes that must be
                              corrected.
                            </li>
                            <li>
                              <strong>Task </strong>- Represents a general
                              activity or piece of work that needs to be
                              completed, such as development, design, or
                              documentation.
                            </li>
                            <li>
                              <strong>Epic </strong>- Urgent or critical tasks
                              that must be completed as soon as possible, as
                              they directly impact progress or delivery.
                            </li>
                            <li>
                              <strong>Story </strong>- A user-centered task type
                              representing a specific functionality or
                              requirement from the end-user perspective.
                            </li>
                          </ol>
                        </li>
                      </ul>
                      <li>
                        <span style={{ color: "#1976d2" }}>Branch</span> →
                        selection is optional. It can be used to link the task
                        to a specific code branch or feature branch for version
                        control and development tracking.
                      </li>
                      <li>
                        <span style={{ color: "#1976d2" }}>Reporter</span> → The
                        person who <strong>creates</strong> or{" "}
                        <strong>reports</strong> the task. This user is
                        responsible for <em>tracking progress</em> and getting
                        updates, but not necessarily for completing the task.
                      </li>
                      <li>
                        <span style={{ color: "#1976d2" }}>Assignee To</span> →
                        The person who is{" "}
                        <strong>responsible for completing</strong> the task.
                        You can also select <strong>“Assign to me”</strong> to
                        assign the task to yourself. This field is{" "}
                        <em>required</em> because every task must have someone
                        accountable for doing it.
                      </li>
                      <li>
                        <span style={{ color: "#1976d2" }}>Description</span> →
                        The Description section is used to provide detailed
                        information about the task — including the purpose,
                        requirements, and steps to complete it.
                      </li>
                      <li>
                        <span style={{ color: "#1976d2" }}>Attachment</span> →
                        You can attach relevant files such as{" "}
                        <strong>
                          images, PDFs, Word documents, Excel sheets, HTML
                          files, CSVs, or videos (MP4/MKV)
                        </strong>
                        that provide additional context or support for the task.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Milestone</span> →
                        Mark the task as part of a milestone if applicable only
                        Admin.
                      </li>
                      <li>
                        <span style={{ color: "#1976d2" }}>Create more</span> →
                        Toggle this option to keep the form open for adding
                        multiple tasks in sequence.
                      </li>
                    </ul>
                  </Paragraph>
                  <Card
                  id="user-profile"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-create-task.png" />
                  </Card>
                  <Paragraph
                    id="user-profile"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <li>
                      <strong>User Profile Menu : </strong>
                      The User Profile Page provides a complete overview of the
                      user’s professional details, contact information, and
                      projects they have worked on. This page helps in
                      identifying the user’s role, contact channels, and
                      contributions within the organization.
                      <br /> Provides quick options to Change Password, Switch
                      Panel (if the user is both an Admin and an TeamLeader,
                      Employee), or Logout from the system.
                      <br />
                      <br></br>
                      <strong>Key Actions:</strong>
                      <ul>
                        <li>
                          <span style={{ color: "#1976d2" }}>
                            Changes Password
                          </span>{" "}
                          → Task priority defines the importance and urgency of
                          a task. There are three types of priority levels:
                          <ol>
                            <li>Open the Change Password window.</li>
                            <li>Enter your Current Password.</li>
                            <li>Enter your New Password.</li>
                            <li>
                              Confirm the new password in the Confirm Password
                              field.
                            </li>
                            <li>Click Save to update your password.</li>
                          </ol>
                        </li>
                      </ul>
                    </li>
                  </Paragraph>
                  <Card
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-user-profie.png" />
                  </Card>
                  <Paragraph
                    id="user-profile"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <ul>
                      <li>
                        <span style={{ color: "#1976d2" }}>User Profile</span> →
                        Task priority defines the importance and urgency of a
                        task. There are three types of priority levels:
                        <ol>
                          <li>
                            Users can upload or change their profile picture
                            anytime.
                          </li>
                          <li>
                            If a user does not wish to upload a profile picture,
                            they can customize their initial
                          </li>
                          <li>
                            If a user wants to remove their profile photo and
                            revert to initials.
                          </li>
                        </ol>
                      </li>
                    </ul>
                  </Paragraph>
                  <Card
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-user-profile-page.png" />
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
                  { href: "#sidebar", key: "sidebar", title: "Sidebar" },

                  {
                    href: "#topbar",
                    title: "Topbar",
                    key: "topbar",
                    children: [
                      {
                        href: "#navigation",
                        key: "navigation",
                        title: "Add To Navigation",
                      },
                      {
                        href: "#bulk-tasks",
                        key: "bulk-tasks",
                        title: "Bulk Tasks",
                      },
                      {
                        href: "#create-task",
                        key: "create-task",
                        title: "Create Task",
                      },
                      {
                        href: "#user-profile",
                        key: "user-profile",
                        title: "User Profile Menu",
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

export default Adminlayout;
