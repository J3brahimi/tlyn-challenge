import React from "react";
import { Button as AntButton } from "antd";
import { ButtonProps } from "antd/lib/button/button";
import styled from "styled-components";

const Button: React.FunctionComponent<ButtonProps> = styled(AntButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
`;

export default Button;
