import React from "react";
import { Layout, Row, Col, Typography, Image, Anchor, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Feedback: React.FC = () => {
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
              <Row justify="center" id="view-all">
                <Col xs={24} md={20} lg={15}>
                  <Row>
                    <Col>
                      <Title
                        level={1}
                        style={{ margin: 0, fontWeight: 500 }}
                        id="review"
                      >
                        Feedback / Review Module
                      </Title>
                    </Col>
                  </Row>

                  <Title level={3}>1. Review</Title>
                  <Paragraph
                    id="review"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    The Feedback page allows Team Leaders and Admins to review
                    the performance of team members based on their project work.
                  </Paragraph>
                  <Card
                    id="add-review"
                    style={{
                      background: "#f3f3ffff",
                      borderRadius: 8,
                      margin: "10px 18px",
                    }}
                  >
                    <Image src="\docs-feedback.png" />
                  </Card>

                  <Title level={3} id="add-review">
                    2. Add Review
                  </Title>
                  <Paragraph style={{ fontSize: 16, margin: "0px 22px" }}>
                    <ul style={{ marginLeft: 20, marginTop: 5 }}>
                      <li>Only Team Leaders and Admins can add feedback.</li>
                      <li>
                        Click <strong> “+ Add Review” </strong> to open the
                        feedback form.
                      </li>
                      <li>
                        Fill in:
                        <ul style={{ marginBottom: 0 }}>
                          <li>Project Name</li>
                          <li>Rating (1-5 stars)</li>
                          <li>Review Type</li>
                          <li>Remarks / Comments</li>
                          <li>Overall Remarks</li>
                        </ul>
                      </li>
                      <li id="view-review-details">
                        Reviewer name and date are auto-filled.
                      </li>
                      <li>Click Submit to save the feedback.</li>
                    </ul>
                  </Paragraph>
                  <Title level={3} id="view-review-details">
                    3. View Review Details
                  </Title>
                  <Paragraph
                    id="bulk-tasks"
                    style={{ fontSize: 16, margin: "0px 22px" }}
                  >
                    <ul style={{ marginLeft: 20, marginTop: 5 }}>
                      <li>
                        Click the <strong> “View” </strong> button in the
                        feedback table.
                      </li>
                      <li>
                        A detailed popup/page appears showing:
                        <ul style={{ marginBottom: 0 }}>
                          <li>Project Name</li>
                          <li>Reviewer Name</li>
                          <li>Rating</li>
                          <li>Remarks</li>
                          <li>Review Date</li>
                        </ul>
                      </li>
                      <li>
                        This helps users and admins see the complete review
                        history.
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
                    <Image src="\docs-feedback-review.png" />
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
                    href: "#review",
                    key: "review",
                    title: "Review",
                    children: [
                      {
                        href: "#add-review",
                        title: "Add Review",
                        key: "add-review",
                      },

                      {
                        href: "#view-review-details",
                        title: "View Review Details",
                        key: "view-review-details",
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

export default Feedback;
