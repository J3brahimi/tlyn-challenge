import { Col, Row, Skeleton, Spin } from "antd";
import Container from "../Container";
import styled from "styled-components";

const PageLoadingWrapper = styled.div`
  margin: auto;
  width: 90%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const Loading = ({
  type,
}: {
  type?: "dashboard" | "layout-box" | "chat-layout";
}) => {
  if (type === "layout-box")
    return (
      <Row gutter={[24, 24]}>
        {[...Array(8).keys()].map((item) => (
          <Col key={item} sm={{ span: 24 }} md={{ span: 6 }}>
            <Skeleton.Button active block style={{ height: "200px" }} />
          </Col>
        ))}
      </Row>
    );

  if (type === "dashboard")
    return (
      <PageLoadingWrapper>
        <Skeleton.Button active block />
        <Skeleton.Button active block style={{ height: "80vh" }} />
      </PageLoadingWrapper>
    );

  if (type === "chat-layout")
    return (
      <Container style={{ margin: "24px auto" }}>
        <Skeleton active paragraph={{ rows: 1, width: "100%" }} />
        <Skeleton
          active
          avatar
          paragraph={{ rows: 1, width: "100%" }}
          style={{ marginTop: "10vh" }}
        />
        <Skeleton
          active
          avatar
          paragraph={{ rows: 1, width: "100%" }}
          style={{ marginTop: "4vh" }}
        />
        <Skeleton
          active
          avatar
          paragraph={{ rows: 1, width: "100%" }}
          style={{ marginTop: "4vh" }}
        />
      </Container>
    );

  return (
    <PageLoadingWrapper>
      <Spin />
    </PageLoadingWrapper>
  );
};

export default Loading;
