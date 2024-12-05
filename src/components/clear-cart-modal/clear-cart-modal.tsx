import { FC } from "react";

import { Button, Container, Overlay } from "./styles";

interface ModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const ClearCartModal: FC<ModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <>
      <Overlay onClick={onCancel} />
      <Container>
        <p style={{ textAlign: "center", fontSize: "25px" }}>Are you sure?</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <Button onClick={onConfirm}>Yes</Button>
          <Button onClick={onCancel}>No</Button>
        </div>
      </Container>
    </>
  );
};
