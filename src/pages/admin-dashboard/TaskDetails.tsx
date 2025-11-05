import React from "react";
import { Layout, Row, Col, Typography, Image, Anchor, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const TaskDetails: React.FC = () => {
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
              <Row justify="center" id="task-details">
                <Col xs={24} md={20} lg={20} xl={20} xxl={15}>
                  <Row>
                    <Col>
                      <Title level={1} style={{ margin: 0, fontWeight: 500 }}>
                        Task Details
                      </Title>
                    </Col>
                  </Row>

                  {/* <div id="sidebar"> */}
                  <Title level={3} id="task-page-overview">
                    1. Task Page Overview
                  </Title>
                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    The Task page provides a detailed view of tasks assigned to
                    each team member, including their name, role, and last
                    activity status.
                  </Paragraph>
                  <Paragraph
                    id="update-task"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <li>
                      <strong>Updated Task :</strong> Task Editing
                    </li>

                    <strong>Key Actions:</strong>
                    <ul style={{ marginLeft: 20, marginTop: 5 }}>
                      <li>
                        <span style={{ color: "#007bff" }}>
                          Edit Existing Task
                        </span>{" "}
                        → You can edit any task that you have permission to
                        modify. Click on the task from the Board, Backlog, or
                        List view and select the <strong>“Edit”</strong> option.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Update Fields</span>{" "}
                        → Modify any task details such as{" "}
                        <em>Title, Description, Assignee, Priority, Dates,</em>{" "}
                        or other fields as required. Each change helps maintain
                        accurate progress tracking.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Project</span> → The
                        project cannot be changed once the task is created. It
                        remains linked to its original project for consistent
                        tracking.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Priority</span> → You
                        can change the priority level anytime to reflect the
                        current importance of the task:
                        <ol>
                          <li>
                            <strong>Low</strong> – Minor importance, can be
                            delayed.
                          </li>
                          <li>
                            <strong>Medium</strong> – Normal importance, should
                            be addressed soon.
                          </li>
                          <li>
                            <strong>High</strong> – Urgent or critical task
                            needing immediate action.
                          </li>
                        </ol>
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Status</span> →
                        Update the task’s progress by changing its status (e.g.,{" "}
                        <strong>
                          Backlog → To Do → In Progress → Testing → Done
                        </strong>
                        ). This helps the team stay aligned on progress.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Assignee To</span> →
                        Reassign the task to another user if responsibilities
                        change. Selecting <strong>“Assign to me”</strong> will
                        automatically assign it to your account.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Reporter</span> → The
                        reporter remains the same unless the task ownership
                        needs to be transferred. This field keeps track of who
                        initially created or is managing the task.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Description</span> →
                        Update the description with new details, progress notes,
                        or any relevant updates for better context.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Attachments</span> →
                        Add new files or remove outdated ones to keep task
                        documentation up-to-date. Accepted formats include{" "}
                        <strong>
                          images, PDFs, Word, Excel, CSV, HTML, and videos
                          (MP4/MKV)
                        </strong>
                        .
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>
                          Comment or History Log
                        </span>{" "}
                        → Every update made to a task is automatically recorded
                        in the <strong>Task Activity Log</strong>, showing who
                        made the change and when. You can also add comments to
                        explain the updates.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Save Changes</span> →
                        After making all necessary updates, click on{" "}
                        <strong>“Save”</strong> to apply the changes. A success
                        message will confirm that the task has been updated.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Notifications</span>{" "}
                        → If a task is reassigned or significantly modified, an
                        email notification will be sent automatically to the{" "}
                        <strong>Assignee</strong> and <strong>Reporter</strong>.
                      </li>
                    </ul>
                  </Paragraph>

                  <Card
                    id="task-activity"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-taskdetails.png" />
                  </Card>

                  <Paragraph
                    id="task-activity"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <li>
                      <strong>Task Activity :</strong> Task All Logs
                    </li>

                    <strong>Overview:</strong>
                    <ul style={{ marginLeft: 20, marginTop: 5 }}>
                      <li>
                        The <strong>Task Activity</strong> section provides a
                        complete record of all actions, updates, and comments
                        made on a task. It helps teams maintain full visibility
                        of the task’s progress, communication, and history.
                      </li>

                      <li>
                        Every event — such as{" "}
                        <em>
                          status updates, assignee changes, comments,
                          attachments,
                        </em>{" "}
                        or <em>description edits</em> — is automatically logged
                        here with the <strong>user name, timestamp,</strong> and
                        a clear description of the change.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>
                          Types of Activities:
                        </span>
                        <ol>
                          <li>
                            <strong>Comment Logs</strong> – Displays all
                            comments or replies added by users. Each comment
                            includes options for reply, edit, delete, and emoji
                            reactions.
                          </li>
                          <li>
                            <strong>History Logs</strong> – Shows updates like
                            status change, priority change, reassignment, or due
                            date modification. Example:
                            <em>“Status changed from In Progress → Testing”</em>
                            .
                          </li>
                          <li>
                            <strong>Attachment Logs</strong> – Lists all files
                            uploaded or removed with user and date information.
                          </li>
                          <li>
                            <strong>Mentions</strong> – When a user is tagged
                            using
                            <span style={{ color: "#007bff" }}> @username</span>
                            , an email notification is automatically sent to
                            that user.
                          </li>
                        </ol>
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Timeline View:</span>{" "}
                        – Task logs are displayed in a structured timeline
                        format, showing the most recent updates at the top. This
                        makes it easy to track who did what and when.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>
                          Activity Filter:
                        </span>{" "}
                        – You can filter activities by type such as{" "}
                        <strong>Comment</strong>,<strong>History</strong>, or{" "}
                        <strong>Attachment</strong> for focused viewing.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Pagination:</span> –
                        For tasks with long histories, activity logs are
                        paginated for faster loading and easy navigation.
                      </li>

                      <li id="task-discussion">
                        <span style={{ color: "#1976d2" }}>Updates:</span> – The
                        Task Activity section updates automatically whenever any
                        user performs an action on the task, ensuring everyone
                        sees the latest information without needing to refresh.
                      </li>
                    </ul>
                  </Paragraph>

                  <Paragraph
                    id="task-discussion"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <li>
                      <strong>Task Discussion :</strong> User Mentions, Replies,
                      Edits, and Emojis
                    </li>

                    <strong>Overview:</strong>
                    <ul style={{ marginLeft: 20, marginTop: 5 }}>
                      <li>
                        The <strong>Task Discussion</strong> section allows team
                        members to communicate and collaborate directly within a
                        task. Users can add comments, reply to specific
                        messages, mention teammates, and react with emojis —
                        keeping all task-related conversations in one place.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Add Comment:</span> –
                        Write messages or updates related to the task using the
                        comment input box. Press <strong>Enter</strong> or click{" "}
                        <em>Post</em> to submit your comment.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>
                          Mentions (@user):
                        </span>{" "}
                        – Use <strong>@username</strong> to mention any team
                        member in a comment. The mentioned user receives an{" "}
                        <strong>email notification</strong> and can view the
                        mention directly in the discussion.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Reply:</span> – Each
                        comment includes a <strong>Reply</strong> option.
                        Replies appear <em>nested</em> under the original
                        comment, keeping discussions organized and easy to
                        follow.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Edit & Delete:</span>{" "}
                        – Users can <strong>edit</strong> or{" "}
                        <strong>delete</strong> their own comments if they need
                        to make corrections or remove outdated messages.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>
                          Emoji Reactions:
                        </span>{" "}
                        – Add quick feedback with emoji reactions such as 👍 ❤️
                        😄 👀. This helps acknowledge comments or express
                        reactions without typing a full reply.
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>Timestamp:</span> –
                        Every comment and reply displays the exact date and time
                        of posting or last edit, ensuring full transparency in
                        the communication flow.
                      </li>
                    </ul>
                    <Card
                      id="mentions"
                      style={{
                        background: "#f3f3ffff",
                        borderRadius: 8,
                        margin: "10px 18px",
                      }}
                    >
                      <Image src="/docs-task discussion.png" />
                    </Card>
                  </Paragraph>
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
                    href: "#task-details",
                    key: "task-details",
                    title: "Task Details",
                    children: [
                      {
                        href: "#task-page-overview",
                        key: "task-page-overview",
                        title: "Task  Page Overview",
                      },
                      {
                        href: "#task-activity",
                        key: "task-activity",
                        title: "Task Activity",
                      },
                      {
                        href: "#task-discussion",
                        key: "task-discussion",
                        title: "Task Discussion",
                        children: [
                          {
                            href: "#mentions",
                            key: "mentions",
                            title: "Mentions",
                          },
                        ],
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

export default TaskDetails;
