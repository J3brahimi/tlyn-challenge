import { styled } from "styled-components";
import { Flex, Typography } from "antd";
import { HEADER_HEIGHT } from "src/constants/style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  DEFAULT_GOLD_BALANCE,
  DEFAULT_RIAL_BALANCE,
} from "src/constants/balance";
import { useTranslation } from "react-i18next";
import { formatPrice } from "src/utils/formater";
import { GrMoney } from "react-icons/gr";
import { FaMoneyBillWaveAlt } from "react-icons/fa";

const HeaderWrapper = styled.header`
  padding: 0 32px;
  border-bottom: 1px solid #eceff1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${HEADER_HEIGHT}px;
  width: 100%;
  overflow: hidden;
`;

const EndSide = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Header = () => {
  const { t } = useTranslation();
  const [goldBalance, setGoldBalance] = useState(
    localStorage.getItem("goldBalance")
  );
  const [rialBalance, setRialBalance] = useState(
    localStorage.getItem("rialBalance")
  );

  useEffect(() => {
    if (!goldBalance) localStorage.setItem("goldBalance", DEFAULT_GOLD_BALANCE);

    if (!rialBalance) localStorage.setItem("rialBalance", DEFAULT_RIAL_BALANCE);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setGoldBalance(localStorage.getItem("goldBalance"));
      setRialBalance(localStorage.getItem("rialBalance"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <HeaderWrapper>
      <Link to="/">
        <Typography.Title level={4}>طلاین</Typography.Title>
      </Link>

      <EndSide>
        <Flex gap={6} vertical>
          <Flex align="center" gap={6}>
            <GrMoney size={16} />
            <Typography.Text>
              {Number(goldBalance).toFixed(2)} {t("common.goldBalance")}
            </Typography.Text>
          </Flex>
          <Flex align="center" gap={6}>
            <FaMoneyBillWaveAlt size={16} />
            <Typography.Text>
              {formatPrice(rialBalance)} {t("common.rial")}
            </Typography.Text>
          </Flex>
        </Flex>
      </EndSide>
    </HeaderWrapper>
  );
};

export default Header;
