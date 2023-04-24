import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 0.8rem 2rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .badge {
    display: flex;
    height: 14px;
    font-size: 9px;
    color: #FFFFFF;
    background: #00B588;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    line-height: 0;
    margin: 0;
    padding: 0 .285rem;
    position: absolute;
    top: -6.5px;
    left: .7rem;
  }
`;

export default StyledHeader;