import React from "react";
import {
  Row,
  Col,
  Typography,
  Divider,
  Card,
  Layout,
  Anchor,
  Image,
} from "antd";
import { Content } from "antd/es/layout/layout";
import { MdOutlineEmail } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";
const { Title, Paragraph } = Typography;

const OverviewProject: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <Content>
        <Row justify="center" gutter={[24, 24]}>
          {/* Main Content */}
          <Col xs={24} md={18} lg={19} xl={19} xxl={20}>
            <div ref={scrollContainerRef}>
              <Row justify="center" id="sidebar">
                <Col xs={24} md={20} lg={14}>
                  <Title level={2}>Overview</Title>
                  <Paragraph style={{ fontSize: 16 }}>
                    <b>CapsiTask</b> is a next-generation{" "}
                    <b>task management platform</b> built to help teams plan,
                    track, and complete work efficiently. It transforms the
                    complex process of managing projects and tasks into a
                    seamless, automated workflow — reducing manual errors,
                    improving collaboration, and keeping your team aligned and
                    productive.
                  </Paragraph>
                  <Paragraph style={{ fontSize: 16 }}>
                    From creating and assigning tasks to tracking progress and
                    performance,
                    <b> CapsiTask</b> ensures every activity is transparent and
                    measurable. Its intelligent design empowers businesses to
                    stay organized, meet deadlines, and achieve goals faster —
                    keeping your focus where it matters most:{" "}
                    <b>Your Team and Your Success.</b>
                  </Paragraph>

                  {/* Overview Image */}
                  <Card
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                     boxShadow: "0 1px 0px rgba(0,0,0,0.1)",
                      marginTop: 30,
                    }}
                    bodyStyle={{ padding: 0 }}
                  >
                    <Image
                      preview={false}
                      src="/overview.png"
                      alt="CapsiTask Overview"
                    />
                  </Card>

                  <Divider />

                  {/* What is CapsiTask */}
                  <Title level={3}>What is CapsiTask?</Title>
                  <Paragraph style={{ fontSize: 16 }}>
                    <b>CapsiTask</b> is an intelligent task management and
                    collaboration platform designed to help businesses and teams
                    streamline their workflow. By bringing people, projects, and
                    processes together, it provides a{" "}
                    <b>clear and unified view</b> of your work.
                  </Paragraph>
                  <Paragraph style={{ fontSize: 16 }}>
                    Whether you're managing a small team or multiple
                    departments, CapsiTask equips you with tools to{" "}
                    <b>create, assign, track, and complete tasks</b> — all in
                    one place. Its intuitive design and automation features keep
                    your projects on track and your team connected every step of
                    the way.
                  </Paragraph>
                  {/* <Card
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                      marginTop: 30,
                    }}
                    bodyStyle={{ padding: 0 }}
                  >
                    <Image
                      preview={false}
                      src="/capsitask1.png"
                      alt="CapsiTask Overview"
                    />
                  </Card> */}

                  <Divider
                    style={{ color: "#ebeaf1", margin: "30px 0px 16px" }}
                  />
                  <Row justify="center" align="middle" gutter={[16, 16]}>
                    {/* Logo */}
                    <Col xs={24} sm={10} md={24} lg={24} xl={24} xxl={11}>
                      <Image
                        src="/CapsiTask.png"
                        preview={false}
                        className="pr-3 mr-3"
                       style={{objectFit:"contain"}}
                       width="150px"
                       height="auto"
                      />
                    </Col>

                    {/* Email */}
                    <Col xs={24} sm={8} md={24} lg={24} xl={12} xxl={7}>
                      <Row align="middle" wrap={false}>
                        <Image preview={false} width={22} />
                        <Typography.Text className="ml-2" style={{fontSize:"16px" }}>
                        <MdOutlineEmail style={{margin:"-3px 1px"}} />  info@capsitask.com
                        </Typography.Text>
                      </Row>
                    </Col>

                    {/* Phone */}
                    <Col xs={24} sm={6} md={24} lg={24} xl={12} xxl={6}>
                      <Row align="middle" wrap={false}>
                        <Image preview={false} width={22} />
                        <Typography.Text className="ml-2" style={{  fontSize:"16px"}}>
                        <MdPhoneEnabled /> +91 79769 15860
                        </Typography.Text>
                      </Row>
                    </Col>
                  </Row>

                  {/* Footer Section */}
                  <Row justify="center" align="middle">
                    <Col
                      span={24}
                      className="pt-2"
                      style={{ textAlign: "left" }}
                    >
                      <Typography.Text
                        style={{fontSize:"16px"  }}
                      >
                        © Copyright CapsiTask 2026 - All Rights Reserved
                      </Typography.Text>
                    </Col>
                  </Row>
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
                  if (target && scrollContainerRef?.current) {
                    scrollContainerRef?.current.scrollTo({
                      behavior: "smooth",
                    });
                  }
                }}
                items={[
                  {
                    href: "#sidebar",
                    key: "sidebar",
                    title: "What is CapsiTask ?",
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

export default OverviewProject;
