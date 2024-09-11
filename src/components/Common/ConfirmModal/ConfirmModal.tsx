import React from "react";
import { Modal as AntModal } from "antd";
import type { ModalProps } from "antd";
import { styled } from "styled-components";
import Button from "../Button";

const ContentText = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: #000c2f;
`;

const Footer = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

const ConfirmModal: React.FC<
  ModalProps & { onCancel: () => void; onConfirm: () => void; content: string }
> = ({ footer = null, onCancel, onConfirm, content, ...props }) => {
  return (
    <AntModal footer={footer} {...props}>
      <ContentText>{content}</ContentText>
      <Footer>
        <Button
          style={{
            background: "rgba(0, 12, 47, 0.04)",
            color: "rgba(0, 12, 47, 0.50)",
          }}
          onClick={onCancel}
        >
          انصراف
        </Button>
        <Button
          style={{ background: "#FF5252", color: "#ffffff" }}
          onClick={onConfirm}
        >
          بله حذف شود
        </Button>
      </Footer>
    </AntModal>
  );
};

export default ConfirmModal;
