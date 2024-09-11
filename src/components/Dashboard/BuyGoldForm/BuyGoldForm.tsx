import {
  Button,
  Card,
  Form,
  InputNumber,
  message,
  Tag,
  Typography,
} from "antd";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  convertToPersianCurrency,
  formatPrice,
  getGoldPrice,
  numberInputPersianNumberPriceFormatter,
  numberInputPersianNumberPriceParser,
} from "src/utils/formater";

type TBuyGoldForm = {
  rial: number;
  gram: number;
};

const BuyGoldForm = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const goldBalance = localStorage.getItem("goldBalance");
  const rialBalance = localStorage.getItem("rialBalance");
  const savedTransactions = localStorage.getItem("transactions");

  // Type-safe check and parsing
  let parsedTransactions: TTransaction[] = [];

  if (savedTransactions) {
    parsedTransactions = JSON.parse(savedTransactions).map(
      (transaction: TTransaction) => ({
        ...transaction,
        createAt: new Date(transaction.createAt), // Convert `createAt` back to Date object
      })
    );
  }

  const goldPrice = useMemo(() => getGoldPrice(), []);

  const rialValue = Form.useWatch("rial", form);

  // Synchronize the values of rial and gram based on user input
  const handleValuesChange = (changedValues: TBuyGoldForm) => {
    const { rial, gram } = changedValues;
    if (rial !== undefined) {
      form.setFieldsValue({
        gram: parseFloat((rial / goldPrice).toFixed(3)),
      });
    } else if (gram !== undefined) {
      form.setFieldsValue({
        rial: Math.floor(gram * goldPrice),
      });
    }
  };

  const buyGoldSubmit = (values: TBuyGoldForm) => {
    if (values?.rial && Number(rialBalance) < values.rial)
      return message.error(t("common.balanceError"));

    if (values.gram)
      localStorage.setItem(
        "goldBalance",
        `${Number(goldBalance) + values.gram}`
      );

    if (values.rial)
      localStorage.setItem(
        "rialBalance",
        `${Number(rialBalance) - values.rial}`
      );

    const transaction: TTransaction = {
      createAt: new Date(),
      amount: values.rial,
      goldPrice: goldPrice,
      goldWeight: values.gram,
    };

    const transactions = [...parsedTransactions, transaction];
    localStorage.setItem("transactions", JSON.stringify(transactions));

    message.success(t("common.buyGoldSuccess"));

    form.resetFields();
  };
  return (
    <>
      <Typography.Title level={3}>{t("common.buyGold")}</Typography.Title>
      <Card
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "18px",
          marginBottom: "24px",
        }}
      >
        {t("common.goldPrice")}:{" "}
        <Tag color="warning">
          {formatPrice(goldPrice)} {t("common.rial")}
        </Tag>
      </Card>
      <Form
        name="addProject"
        layout="vertical"
        onFinish={buyGoldSubmit}
        autoComplete="off"
        form={form}
        onValuesChange={handleValuesChange}
      >
        <Form.Item
          label={t("common.buyWithRial")}
          name="rial"
          style={{ marginBottom: rialValue ? "0" : "20px" }}
          rules={[{ required: true }]}
        >
          <InputNumber
            style={{ width: "100%" }}
            max={1000000000}
            formatter={numberInputPersianNumberPriceFormatter}
            parser={numberInputPersianNumberPriceParser}
          />
        </Form.Item>
        {rialValue && (
          <Tag style={{ marginBottom: "20px", marginTop: "8px" }}>
            {convertToPersianCurrency(Number(rialValue))} {t("common.toman")}
          </Tag>
        )}

        <Form.Item label={t("common.buyWithGram")} name="gram">
          <InputNumber style={{ width: "100%" }} step={0.001} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {t("common.buyGold")}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default BuyGoldForm;
