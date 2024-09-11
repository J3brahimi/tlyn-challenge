import { Table, TableColumnsType, Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { formatDate, formatPrice } from "src/utils/formater";

const BuyGoldTable = () => {
  const { t } = useTranslation();

  const [transactions, setTransactions] = useState<TTransaction[]>([]);

  // Load the initial value from localStorage
  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(
        JSON.parse(savedTransactions).map((transaction: TTransaction) => ({
          ...transaction,
          createAt: new Date(transaction.createAt), // Ensure Date objects are restored
        }))
      );
    }
  }, []);

  const columns: TableColumnsType<TTransaction> = [
    {
      title: t("common.dateAndTime"),
      key: "dateAndTime",
      responsive: ["md"],
      render: (_text, record) => formatDate(record.createAt),
    },
    {
      title: t("common.amount"),
      key: "amount",
      responsive: ["md"],
      render: (_text, record) =>
        `${formatPrice(record.amount)} ${t("common.rial")}`,
    },
    {
      title: t("common.goldAmount"),
      key: "goldAmount",
      responsive: ["md"],
      render: (_text, record) =>
        `${formatPrice(record.goldPrice)} ${t("common.rial")}`,
    },
    {
      title: t("common.goldWeight"),
      key: "goldWeight",
      render: (_text, record) => `${record.goldWeight} ${t("common.gram")}`,
    },
  ];

  return (
    <>
      <Typography.Title level={3}>{t("common.buyHistory")}</Typography.Title>
      <Table
        columns={columns}
        dataSource={transactions}
        rowKey="id"
        pagination={false}
      />
    </>
  );
};

export default BuyGoldTable;
