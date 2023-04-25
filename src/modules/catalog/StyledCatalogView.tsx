import styled from "styled-components";

const StyledCatalogView = styled.div`
  display: flex;
  overflow: hidden;

  .CatalogView__header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #c9c9c9;
    margin-top: 34px;
    padding-bottom: 16px;
    width: 100%;

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
    margin-top: 24px;

    @media screen and (min-width: 905px) {
      width: initial;
      flex: 33%;
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
    margin-top: 24px;
    line-height: 150%;
    overflow: auto;

    @media screen and  (min-width: 905px) {
      padding: 0.35rem 1.4rem 0;
      border: 1px solid #c9c9c9;
      border-radius: 4px;
      background-color: #fff;
    }

    .table {
      .table-row {
        align-items: flex-start;
        padding: 1rem;
        border: 1px solid #c9c9c9;
        border-radius: 4px;
        background-color: #fff;

        &:not(:last-child) {
          margin-bottom: .5rem;
        }

        @media screen and  (min-width: 905px) {
          border: none;
          border-bottom: 1px solid #f5f5f5;
          margin-top: 0;

          &.header {
            position: sticky;
            z-index: 9999;
            top: 0;

            &::before {
              content: '';
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 1rem;
              background: #fff;
              transform: translateY(-50%);
            }
          }

          &:nth-child(2n) {
            background-color: #fcfcfc;
          }
        }

        &, .wrap {
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
            flex: 1 1 66%;
            width: initial;

            .table-cell {
              max-width: calc(100% / 3);
            }
          }
        }
      }

      .table-cell {
        display: flex;
        align-items: center;
        flex: 0;
        max-width: 22%;
        letter-spacing: 0.5;
        padding: 4px 10px;

        @media screen and (min-width: 905px) {
          flex: 1 1 22%;
          padding: 16px 10px;
        }

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          flex: 0;
          padding-right: 0;

          @media screen and (min-width: 905px) {
            flex: 1 1 12%;
          }
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
