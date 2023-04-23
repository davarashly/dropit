import React, { useState } from "react";

import { LoadingSpinner, Table } from "../../tools/ui_components";

import useCatalog from "./useCatalog";
import StyledCatalogView from "./StyledCatalogView";

import SearchIcon from "../../tools/assets/search.svg";

const CatalogView = () => {
  const { isLoading, products, columns, getKeyRow } = useCatalog();

  const [search, setSearch] = useState<string>("");

  const renderedProducts = search.length
    ? products.filter(
        (p) => p.title.toLowerCase().includes(search) || p.id.toString().includes(search)
      )
    : products;

  return (
    <div className="container">
      <StyledCatalogView>
        <div className="CatalogView__header">
          <div className="CatalogView__header_text">Catalog Page</div>
        </div>

        <div className="CatalogView__search">
          <img src={SearchIcon} alt="" />
          <input
            type="text"
            placeholder="Search item"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={search.length ? "notEmpty" : ""}
          />
        </div>

        <div className="CatalogView__grid">
          <Table columns={columns} data={renderedProducts} getKeyRow={getKeyRow} />
        </div>

        <LoadingSpinner isVisible={isLoading} />
      </StyledCatalogView>
    </div>
  );
};

export default CatalogView;
