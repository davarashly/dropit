import styled from "styled-components";

const StyledCatalogView = styled.div`
  .CatalogView__header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #c9c9c9;
    margin-block: 16px;
    padding-bottom: 16px;

    .CatalogView__header_text {
      font-size: 30px;
      font-weight: bold;
      color: #565c70;
    }
  }

  .CatalogView__search {
    padding-left: 18px;
    padding-right: 2px;
    overflow: hidden;
    border: 1px solid #c9c9c9;
    background-color: #fff;
    border-radius: 4px;
    height: 37px;
    display: inline-flex;
    align-items: center;
    width: 100%;

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
    margin-block: 24px;
    line-height: 150%;

    & > div {
      padding: 0.35rem 1rem 0;
      border: 1px solid #c9c9c9;
      border-radius: 4px;
      box-shadow: none;

      @media screen and  (min-width: 905px) {
        padding: 0.35rem 1.4rem 0;
      }
    }

    .mobile-catalog {
      padding: 0 !important;
      border: 0 !important;
      border-radius: 0 !important;


      .single-product {
        &:not(:first-child) {
          margin-top: 0.5rem;
        }

        display: flex;
        padding: 1rem;
        background-color: #fff;
        border: 1px solid #c9c9c9;
        border-radius: 4px;
        align-items: start;

        img {
          width: 35px;
          object-fit: contain;
        }

        p:not(:first-child) {
          margin-top: 0.2rem;
        }
      }
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
