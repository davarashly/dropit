import styled from "styled-components";

const StyledCartView = styled.div`
  display: flex;
  overflow: hidden;

  .CartView__header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--grey2);
    margin-top: 34px;
    padding-bottom: 16px;
    width: 100%;

    .CartView__header_text {
      font-size: 30px;
      font-weight: bold;
      color: var(--grey-blue);
    }
  }

  .wrapper {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    width: 100%;

    @media screen and (min-width: 905px) {
      flex-direction: row;
    }
  }

  .CartView__grid {
    &:not(.checkout) {
      @media screen and (min-width: 905px) {
        width: 65.5%;
        margin-right: 16px;
      }
    }

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-track {
      background: #fff;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: var(--grey1);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }


    margin-top: 24px;
    line-height: 150%;
    letter-spacing: 0.5px;
    overflow: auto;

    &.checkout {
      padding: 0.35rem 1.4rem 0;
      border: 1px solid var(--grey2);
      border-radius: 4px;
      background-color: #fff;
    }

    @media screen and  (min-width: 905px) {
      padding: 0.35rem 1.4rem 0;
      border: 1px solid var(--grey2);
      border-radius: 4px;
      background-color: #fff;
    }

    .CartView__grid_productImage {
      max-width: 65px;
      object-fit: contain;
    }

    .CartView__grid_addToCart {
      opacity: 1;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and  (min-width: 905px) {
        opacity: 0.75;
        transition: opacity 0.18s;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

export default StyledCartView;
