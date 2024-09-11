import styled from "styled-components";
import { theme } from "antd";

export const DropdownWrapper = styled.div(() => {
  const { token } = theme.useToken();
  return {
    borderRadius: "32px",
    border: `1px dashed ${token.colorBorderSecondary}`,
    padding: "12px",
    color: token.colorText,
    fontSize: "14px",
    cursor: "pointer",
  };
});
