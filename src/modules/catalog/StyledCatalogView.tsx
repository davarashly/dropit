import styled from "styled-components";

const StyledCatalogView = styled.div`
  display: flex;
  overflow: hidden;

  .CatalogView__header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--grey2);
    margin-top: 34px;
    padding-bottom: 16px;
    width: 100%;

    .CatalogView__header_text {
      font-size: 30px;
      font-weight: bold;
      color: var(--grey-blue);
    }
  }

  .CatalogView__search {
    padding-left: 18px;
    padding-right: 2px;
    overflow: hidden;
    border: 1px solid var(--grey2);
    background-color: #fff;
    border-radius: 4px;
    min-height: 37px;
    display: inline-flex;
    align-items: center;
    width: 100%;
    margin-top: 24px;
    transition: border 0.4s;

    &:focus-within {
      border-color: var(--grey1);
    }

    @media screen and (min-width: 905px) {
      width: initial;
    }

    input {
      margin-left: 0.3rem;
      outline: none;
      height: 100%;
      border: none;
      font-size: 14px;
      display: flex;
      width: calc(100% - 2px);

      @media screen and (min-width: 905px) {
        transition: width 0.4s;
        width: 450px;
        min-width: 450px;

        &:focus,
        &.notEmpty {
          width: 622px;
        }
      }
    }
  }

  .CatalogView__grid {
    width: 100%;

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

    @media screen and  (min-width: 905px) {
      padding: 0.35rem 1.4rem 0;
      border: 1px solid var(--grey2);
      border-radius: 4px;
      background-color: #fff;
    }

    .CatalogView__grid_productImage {
      max-width: 35px;
      object-fit: contain;
    }

    .CatalogView__grid_addToCart {
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

export default StyledCatalogView;
