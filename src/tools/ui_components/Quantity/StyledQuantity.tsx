import styled from "styled-components";

const StyledQuantity = styled.div`
  background-color: var(--grey3);
  max-width: 85px;
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;

  input {
    width: 28px;
    text-align: center;
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 14px;
  }

  .btn {
    font-weight: normal;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    //border: 1px solid red;
    padding-inline: 5px;
    cursor: pointer;
    user-select: none;

    &:first-child {
      margin-bottom: 1.5px;
      padding-bottom: 3px;
    }

    &:last-child {
      padding-bottom: 3px;
    }

    &:hover {
      font-weight: bold;
    }
  }
`;

export default StyledQuantity;