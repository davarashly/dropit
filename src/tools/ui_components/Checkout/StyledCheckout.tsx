import styled from "styled-components";

const StyledCheckout = styled.div`
  .info-box {
    padding: 24px;

    &:not(:last-child) {
      border-bottom: 1px solid #C9C9C9;
    }
  }

  .title {
    font-size: 16px;
    margin-bottom: 22.5px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;

    &.border {
      border-bottom: 1px solid #F5F5F5;
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
    margin-top: 1rem;
    display: block;
    color: #fff;
    background-color: #00B588;
    border-radius: 4px;
    outline: none;
    border: none;
    padding-block: 10px;
    font-size: 14px;
    width: 100%;
    transition: background-color .18s;

    &:hover {
      background-color: #03A57C;

      &:not(:disabled) {
        cursor: pointer;
      }
    }

    &:disabled {
      background-color: #3ACEA9;
    }
  }
`;

export default StyledCheckout;