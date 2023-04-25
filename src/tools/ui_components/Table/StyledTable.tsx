import styled from "styled-components";

const StyledTable = styled.div`
  .table-row {
    align-items: flex-start;
    padding: 16px;
    border: 1px solid var(--grey2);
    border-radius: 4px;
    background-color: #fff;

    &:not(:last-child) {
      margin-bottom: 8px;
    }

    @media screen and (min-width: 905px) {
      border: none;
      border-bottom: 1px solid var(--grey3);
      margin-top: 0;

      &.header {
        position: sticky;
        z-index: 9;
        top: 0;

        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 16px;
          background: #fff;
          transform: translateY(-50%);
        }
      }

      &:nth-child(2n) {
        background-color: var(--grey4);
      }
    }

    &,
    .wrap {
      display: flex;
    }

    .wrap {
      flex-direction: column;
      flex: 1;
      width: 80%;

      .table-cell {
        max-width: 100%;
      }
    }

    @media screen and (min-width: 905px) {
      align-items: center;
      padding-block: 0;

      .wrap {
        flex-direction: row;
        flex: 1 1 calc(100% / 1.5);
        width: 100%;

        .table-cell {
          max-width: calc((100% / (var(--columns) - 1)) + 7px);
        }
      }
    }

    .table-cell {
      display: flex;
      align-items: center;
      flex: 0;
      letter-spacing: 0.5;
      padding: 4px 10px;
      font-size: 14px;
      //overflow-wrap: anywhere;

      @media screen and (min-width: 905px) {
        flex: 1 1 calc(95% / var(--columns));
        padding: 16px 10px;
        max-width: calc(95% / var(--columns));
      }

      &:first-child:not(.wrap .table-cell) {
        padding-left: 0;
      }

      &:last-child:not(.wrap .table-cell) {
        padding-right: 0;
      }

      &:last-child {
        flex: 0;

        @media screen and (min-width: 905px) {
          flex: 1 1 5%;
        }
      }
    }
  }

  &.cart {
    .table-row {
      .table-cell:not(.wrap .table-cell) {
        @media screen and (min-width: 905px) {
          flex: 1 1 calc(95% / var(--columns));

          &:last-child {
            flex: 1 1 5%;
            display: flex;
            justify-content: flex-end;
          }
        }
      }
    }
`;

export default StyledTable;
