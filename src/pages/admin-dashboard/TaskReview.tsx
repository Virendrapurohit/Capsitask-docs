import React from "react";
import { Layout, Row, Col, Typography, Image, Anchor, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const TaskReview: React.FC = () => {
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
              <Row justify="center" id="task-review">
                <Col xs={24} md={20} lg={15}>
                  <Row>
                    <Col>
                      <Title level={1} style={{ margin: 0, fontWeight: 500 }}>
                        Task Review Section
                      </Title>
                    </Col>
                  </Row>

                  {/* <div id="sidebar"> */}
                  <Title level={3} id="task-review">
                    1. Task Review
                  </Title>
                  <Paragraph
                    id="task-review"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    Review Reports Module Explanation The Review Reports module
                    is used by project managers or administrators to track,
                    review, and manage task progress and team performance. This
                    section is divided into two main tabs
                  </Paragraph>
                  <Card
                    id="task-closure"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-review.png" />
                  </Card>

                  <Title level={3} id="task-closure">
                    A. Task Closure
                  </Title>

                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    Used to manage and review individual tasks.
                  </Paragraph>

                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    <ul>
                      <li>
                        <strong>Main Functions : </strong>
                        View all project tasks with status, assignee, and
                        priority. Track task deadlines and completion.
                      </li>
                    </ul>
                  </Paragraph>

                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    <ul>
                      <li>
                        <strong>Fill Review : </strong>
                        Add feedback or review comments after task completion.
                      </li>
                    </ul>
                  </Paragraph>

                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    <ul>
                      <li>
                        <strong>Revert Task : </strong>
                        Send task back for rework or corrections.
                      </li>
                    </ul>
                  </Paragraph>

                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    <ul>
                      <li>
                        <strong>Done Task : </strong>
                        Send task back for rework or corrections.
                      </li>
                    </ul>
                  </Paragraph>

                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    <ul>
                      <li>
                        <strong>Purpose : </strong>
                        Helps in ensuring every assigned task is completed
                        correctly and on time.
                      </li>
                    </ul>
                  </Paragraph>

                  <Card
                    id="assignee-reports"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="/docs-task-review.png" />
                  </Card>

                  <Title level={3} id="assignee-reports">
                    B. Assignee Reports
                  </Title>

                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    Used to evaluate the performance of team members.
                  </Paragraph>

                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    <ul>
                      <li>
                        <strong>Main Functions : </strong>
                        View all project tasks with status, assignee, and
                        priority. Track task deadlines and completion. <br />
                        Displays list of team members with ratings. <br />
                        Shows task difficulty level (Easy, Medium, Hard). <br />
                        Displays task type distribution (Front-End, Back-End,
                        Full-Stack, Design, Other). <br />
                        Helps analyze workload and efficiency of each user.{" "}
                        <br />
                      </li>
                    </ul>
                  </Paragraph>
                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    <ul>
                      <li>
                        <strong>Purpose : </strong>
                        Provides insight into individual performance and helps
                        in workload balancing.
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
                    <Image src="/docs-assignee-reports.png" />
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
                    href: "#task-review",
                    title: "Task Review",
                    key: "task-review",
                    children: [
                      {
                        href: "#task-closure",
                        key: "task-closure",
                        title: "Task Closure",
                      },
                      {
                        href: "#assignee-reports",
                        key: "assignee-reports",
                        title: "Assignee Reports",
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

export default TaskReview;
