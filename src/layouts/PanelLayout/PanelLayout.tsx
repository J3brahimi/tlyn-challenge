import { Layout, theme } from "antd";
import Header from "./components/Header/Header";
import { styled } from "styled-components";
import { HEADER_HEIGHT } from "src/constants/style";

const ContentWrapper = styled.div(() => {
  const { token } = theme.useToken();
  return {
    background: token.colorBgBase,
    width: "100%",
    height: "100vh",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  };
});

const Content = styled.div`
  height: calc(100vh - ${HEADER_HEIGHT}px);
  width: "100%";
`;

const PanelLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Layout>
      <ContentWrapper>
        <Header />
        <Content>{children}</Content>
      </ContentWrapper>
    </Layout>
  );
};

export default PanelLayout;
