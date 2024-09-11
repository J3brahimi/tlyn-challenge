import React from "react";
import { Modal as AntModal } from "antd";
import type { ModalProps } from "antd";

const Modal: React.FC<ModalProps> = ({ children, footer = null, ...props }) => {
  return (
    <AntModal footer={footer} {...props}>
      {children}
    </AntModal>
  );
};

export default Modal;
