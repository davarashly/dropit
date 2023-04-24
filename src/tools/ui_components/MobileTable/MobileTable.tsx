import React from "react";
import SingleProduct from "./components/SingleProduct";
import { CatalogProduct } from "../../../modules/product/types";

interface Props {
  data: CatalogProduct[];
}

function MobileTable({ data }: Props) {
  return (
    <div className='mobile-catalog'>
      {data.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default MobileTable;
