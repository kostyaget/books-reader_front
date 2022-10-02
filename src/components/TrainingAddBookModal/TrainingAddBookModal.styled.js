import styled from "styled-components";

export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  padding-right: 25px;
  padding-left: 25px;

  background-color: #f6f7fb;
  z-index: 20;
`;
export const ModalWrapper = styled.div`
  padding: 25px 0;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 25px;
`;
