import React, { FC } from "react";
import styled from "styled-components";

import { Tooltip } from "@mui/material";
import { DeleteFromCartIconForwarded } from "../icons/IconDeleteFromCart";

interface Props {
  isVisible: boolean;
  hideModal: () => void;
  title: string;
  description: string;
  buttonText: string;
}

const ModalWindow: FC<Props> = ({
  isVisible,
  hideModal,
  title,
  description,
  buttonText,
}) => {
  const closeModal = () => {
    hideModal();
  };

  return isVisible ? (
    <StyledModal>
      <div className="Modal__overlay" />
      <div className="Modal__wrapper">
        <div className="Modal__window">
          <Tooltip title={"Close"} className="close" onClick={closeModal}>
            <div>
              <DeleteFromCartIconForwarded />
            </div>
          </Tooltip>
          <div>
            <div className="title">{title}</div>
            <p>{description}</p>
          </div>
          <button onClick={closeModal}>{buttonText}</button>
        </div>
      </div>
    </StyledModal>
  ) : (
    <div />
  );
};

const StyledModal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;

  .Modal__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 11;
    overflow: hidden;
  }

  .title {
    font-weight: 700;
    font-size: 16px;
    color: var(--grey-blue);
    margin-bottom: 30px;
  }

  p {
    color: var(--grey-blue);
    font-size: 14px;
  }

  button {
    cursor: pointer;
    letter-spacing: 3px;
    color: var(--green);
    text-transform: uppercase;
    font-size: 14px;
    outline: none;
    width: 100%;
    border: none;
    border-top: 1px solid var(--grey3);
    background-color: #fff;
  }

  .Modal__window {
    width: 268px;
    text-align: center;
    letter-spacing: 0.5px;
    position: relative;

    @media screen and (min-width: 600px) {
      width: 397px;
    }

    .close {
      position: absolute;
      padding: 16px;
      right: 0;
      cursor: pointer;
    }

    & > * {
      padding: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  .Modal__overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    background-color: #000000;

    opacity: 0.4;
  }
`;

export default ModalWindow;
