import React, { FC, useState } from "react";

import { LoadingSpinner, Table } from "../../tools/ui_components";

import useCatalog from "./useCatalog";
import StyledCatalogView from "./StyledCatalogView";
import { SearchIcon } from "../../tools/icons";

const CatalogView: FC = () => {
  const { isLoading, products, columns, getKeyRow } = useCatalog();

  const [search, setSearch] = useState<string>("");

  const renderedProducts = search.length
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase().trim()) ||
          p.id.toString().includes(search)
      )
    : products;

  return (
    <StyledCatalogView>
      <div
        className="container"
        style={{
          display: products.length ? "flex" : "none",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div className="CatalogView__header">
          <div className="CatalogView__header_text">Catalog Page</div>
        </div>

        <div className="CatalogView__search">
          <SearchIcon color={"var(--grey1)"} />
          <input
            type="text"
            placeholder="Search item"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={search.length ? "notEmpty" : ""}
          />
        </div>
        <div className="CatalogView__grid">
          <Table
            columns={columns}
            data={renderedProducts}
            getKeyRow={getKeyRow}
          />
        </div>
      </div>
      <LoadingSpinner isVisible={isLoading} />
    </StyledCatalogView>
  );
};

export default CatalogView;
