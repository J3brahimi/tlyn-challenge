import { Col, Row } from "antd";
import Container from "src/components/Common/Container";
import BuyGoldForm from "src/components/Dashboard/BuyGoldForm";
import BuyGoldTable from "src/components/Dashboard/BuyGoldTable";

const Dashboard = () => {
  return (
    <Container>
      <Row gutter={24}>
        <Col sm={24} md={12}>
          <BuyGoldForm />
        </Col>
        <Col sm={24} md={12}>
          <BuyGoldTable />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
