import styled from "styled-components";

const StyledCheckout = styled.div`
  .info-box {
    padding: 24px;

    &:not(:last-child) {
      border-bottom: 1px solid var(--grey2);
    }
  }

  .title {
    font-size: 16px;
    margin-bottom: 22.5px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;

    &.border {
      border-bottom: 1px solid var(--grey3);
      padding-bottom: 22.5px;
    }
  }

  .sub-info-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 14px;
  }

  button {
    margin-top: 16px;
    display: block;
    color: #fff;
    background-color: var(--green);
    border-radius: 4px;
    outline: none;
    border: none;
    padding-block: 10px;
    font-size: 14px;
    width: 100%;
    transition: background-color 0.18s;

    &:hover {
      background-color: #03a57c;

      &:not(:disabled) {
        cursor: pointer;
      }
    }

    &:disabled {
      background-color: var(--green-disabled);
    }
  }
`;

export default StyledCheckout;
