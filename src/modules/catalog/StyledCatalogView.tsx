import styled from "styled-components";

const StyledCatalogView = styled.div`
  .CatalogView__header {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #C9C9C9;
    margin-block: 16px;
    padding-bottom: 16px;

    .CatalogView__header_text {
      font-size: 30px;
      font-weight: bold;
      color: #565C70;
    }
  }

  .CatalogView__search {
    padding-left: 18px;
    padding-right: 2px;
    overflow: hidden;
    border: 1px solid #C9C9C9;
    background-color: #fff;
    border-radius: 4px;
    height: 37px;
    display: inline-flex;
    align-items: center;

    input {
      margin-left: .3rem;
      outline: none;
      height: 100%;
      border: none;
      font-size: 14px;
      display: block;
      width: 100%;
      transition: width .4s;

      @media (min-width: 905px) {
        width: 450px;

        &:focus, &.notEmpty {
          width: 622px;
        }
      }
    }
  }

  .CatalogView__grid {
    margin-block: 24px;

    .CatalogView__grid_productImage {
      width: 60px;
      object-fit: contain;
    }

    .CatalogView__grid_addToCart {
      cursor: pointer;
    }
  }
`;

export default StyledCatalogView;
