import React from "react";
import { Layout, Row, Col, Typography, Image, Anchor, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Board: React.FC = () => {
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
              <Row justify="center" id="board&backlog">
                <Col xs={24} md={20} lg={15}>
                  <Row>
                    <Col>
                      <Title level={1} style={{ margin: 0, fontWeight: 500 }}>
                        Board & Backlog Section
                      </Title>
                    </Col>
                  </Row>

                  {/* <div id="sidebar"> */}
                  <Title level={3} id="board&backlog">
                    1. Board
                  </Title>
                  <Paragraph
                   
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    The Board provides a visual view of all active tasks
                    organized by their current status. Each task moves across
                    different columns such as <strong>To Do</strong>,{" "}
                    <strong>In Progress</strong>, <strong>UAT</strong>,{" "}
                    <strong>Testing</strong> ,<strong>Need To Discuss </strong>
                    and Completed as it progresses through the workflow.
                  </Paragraph>
                  <Card
                    id="task-closure"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-board.png" />
                  </Card>

                  <Title level={3} id="board&backlog">
                    2. Backlog
                  </Title>
                  <Paragraph
                  
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <strong> Tasks that are not assigned to any sprint </strong>{" "}
                    are automatically displayed in the{" "}
                    <strong> backlog </strong>. The{" "}
                    <strong>backlog serves as a holding area </strong> for all{" "}
                    <strong>upcoming or unplanned tasks </strong> that are yet
                    to be scheduled into a sprint. Additionally, the backlog
                    also{" "}
                    <strong>
                      displays all the sprints created within the project{" "}
                    </strong>
                    , allowing users to view and manage them easily. In the
                    backlog,{" "}
                    <strong>
                      tasks are displayed according to their assigned sprints
                    </strong>
                    , while on the board, tasks are shown based on their current
                    status.
                  </Paragraph>
                  <Card
                    id="board&backlog-filter"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-backlog.png" />
                  </Card>

                  <Paragraph
                    id="view-all"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <Title level={3} id="assignee-reports">
                      3. Board & Backlog Filter Details
                    </Title>

                    <ul style={{ marginLeft: 20, marginTop: 5 }}>
                      <li>
                        <span style={{ color: "#007bff" }}>
                          Select project (project-wise tasks)
                        </span>{" "}
                        → Choose a project from the project dropdown. After
                        selecting, the board displays only tasks that belong to
                        that project (all statuses, assignees and metadata for
                        that project).
                      </li>
                      <li>
                        <span style={{ color: "#007bff" }}>Search Input</span> →
                        The search input searches across key fields:
                        <br />
                        1. <strong>Ukey</strong>(unique task code) <br />
                        2. <strong>Title</strong> <br />
                      </li>

                      <li>
                        <span style={{ color: "#1976d2" }}>
                          Filters (filter in all)
                        </span>{" "}
                        → Shows the total number of tasks within the project,
                        categorized by:
                        <br /> 1. Available filter options (check/select
                        according to need): <br />
                        2. Priority (Low, Medium, High) <br />
                        3. Assignee (one or multiple users) Reporter / Assigned
                        By <br />
                        4. Date range <br />
                        5. “Clear filters” returns to project-wide view.
                      </li>

                      <Card
                        id="task-closure"
                        style={{
                          background: "#f3f3ffff",
                          borderRadius: 8,
                          margin: "10px 18px",
                        }}
                      >
                        <Image src="/docs-board-filter.png" />
                      </Card>

                      <li>
                        <span style={{ color: "#1976d2" }}>
                          Kanban (Grid) view
                        </span>{" "}
                        → Grid view is best for visual workflow management and
                        daily standups.
                      </li>

                      <Card
                        id="task-closure"
                        style={{
                          background: "#f3f3ffff",
                          borderRadius: 8,
                          margin: "10px 18px",
                        }}
                      >
                        <Image src="/docs-toggel.png" />
                      </Card>
                      <li>
                        <span style={{ color: "#1976d2" }}>
                          Project timeline & assignee-based logs
                        </span>{" "}
                        → Timeline view displays chronological activity for the
                        selected project.
                        <br />
                        When you select an assignee filter or click an assignee,
                        the timeline shows logs related to that person:
                      </li>
                      <Card
                        id="board&backlog-task-details"
                        style={{
                          background: "#f3f3ffff",
                          borderRadius: 8,
                          margin: "10px 18px",
                        }}
                      >
                        <Image src="/docs-project-timeline.png" />
                      </Card>
                    </ul>

                    <Title level={3} id="board&backlog-task-details">
                      4. Board & Backlog Task Details
                    </Title>
                    <ul style={{ marginLeft: 20, marginTop: 5 }}>
                      <li>
                        <span style={{ color: "#007bff" }}>
                          Bulk Task Status Update (Modal View Explanation)
                        </span>{" "}
                        <ol>
                          <li>
                            Open Modal
                            <ul>
                              <li>
                                Click on the expand icon (shown in the top-right
                                corner of the task board).
                              </li>

                              <li>
                                This opens a modal window showing all tasks in a
                                table view.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Task List in Modal
                            <ul>
                              <li>
                                The modal displays tasks in a detailed table
                                format.
                              </li>

                              <li>Each row represents a single task with</li>
                            </ul>
                          </li>
                          <li>
                            Selecting Tasks for Bulk Update
                            <ul>
                              <li>
                                Use the checkboxes on the left to select
                                multiple tasks at once.
                              </li>

                              <li>
                                You can scroll and select across multiple pages
                                if needed.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Update Status in Bulk
                            <ul>
                              <li>
                                After selecting tasks, choose a new status
                                (e.g., In Progress, Done, Testing).
                              </li>

                              <li>
                                Click Update Status to apply the change to all
                                selected tasks at once.
                              </li>
                              <li>
                                The status of each selected task is updated
                                simultaneously.
                              </li>
                            </ul>
                          </li>

                          <li>
                            Usage Example
                            <ul>
                              <li>
                                If you have 10 tasks in “Todo” and want to move
                                them all to “In Progress”:
                                <ul>
                                  <li>Select all 10 checkboxes.</li>
                                  <li>Choose “In Progress.”</li>
                                  <li>Click Update Status.</li>
                                  <li>
                                    All 10 tasks are now marked as “In
                                    Progress.”
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ol>
                      </li>
                    </ul>
                    <Card
                   
                      style={{
                        background: "#f3f3ffff",
                        borderRadius: 8,
                        margin: "10px 18px",
                      }}
                    >
                      <Image src="/docs-board-zoom.png" />
                    </Card>

                    <ul style={{ marginLeft: 20, marginTop: 5 }}>
                      <li>
                        <span style={{ color: "#007bff" }}>
                          Task Actions Overview
                        </span>{" "}
                        <ol>
                          <li>
                            Ukey Click:
                            <ul style={{ marginBottom: 3 }}>
                              <li>
                                Clicking on the Ukey redirects you to the{" "}
                                <strong> Task Details page</strong> where you
                                can view complete task information.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Title Click:
                            <ul style={{ marginBottom: 3 }}>
                              <li>
                                Clicking on the Title opens the{" "}
                                <strong>Edit Task Drawer </strong>
                                to update task details quickly.
                              </li>
                            </ul>
                          </li>

                          <li>
                            Status Click:
                            <ul style={{ marginBottom: 3 }}>
                              <li>
                                Clicking on the Status opens a{" "}
                                <strong>dropdown menu</strong> to change the
                                task’s current status.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Assignee Click:
                            <ul style={{ marginBottom: 3 }}>
                              <li>
                                Clicking on the Assignee opens a{" "}
                                <strong>modal window</strong> where you can{" "}
                                <strong>view assigned team members</strong>
                              </li>
                            </ul>
                          </li>
                          <li>
                            Deadline Click:
                            <ul style={{ marginBottom: 3 }}>
                              <li>
                                Clicking on the Deadline opens a{" "}
                                <strong>Date Picker</strong> to select and
                                update the task’s due date.
                              </li>
                            </ul>
                          </li>
                        </ol>
                      </li>
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
                    href: "#board&backlog",
                    title: "Board & Backlog Section",
                    key: "board&backlog",
                    children: [
                      {
                        href: "#board&backlog-filter",
                        key: "board&backlog-filter",
                        title: "Board & Backlog Filter",
                      },
                      {
                        href: "#board&backlog-task-details",
                        key: "board&backlog-task-details",
                        title: "Board & Backlog Task Details",
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

export default Board;
