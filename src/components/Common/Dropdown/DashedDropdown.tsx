import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { DropdownWrapper } from "./DashaedDropDown-Styles";
import { CSSProperties } from "react";

const DashedDropdown = ({
  children,
  items,
  onClick,
  style,
}: {
  children: JSX.Element | string;
  items?: MenuProps["items"];
  onClick?: (event: any) => void;
  style?: CSSProperties;
}) => {
  return (
    <DropdownWrapper style={style}>
      <Dropdown menu={{ items, onClick }} trigger={["click"]}>
        {children}
      </Dropdown>
    </DropdownWrapper>
  );
};

export default DashedDropdown;
