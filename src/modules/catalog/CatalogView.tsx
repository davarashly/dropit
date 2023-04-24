import React, { useState } from "react";

import { LoadingSpinner, Table } from "../../tools/ui_components";

import useCatalog from "./useCatalog";
import StyledCatalogView from "./StyledCatalogView";
import { SearchIcon } from "../../tools/icons";
import useWindow from "../../tools/hooks/useWindow";
import MobileTable from "../../tools/ui_components/MobileTable";

const CatalogView = () => {
  const { isLoading, products, columns, getKeyRow } = useCatalog();
  const { windowWidth } = useWindow();

  const [search, setSearch] = useState<string>("");

  const renderedProducts = search.length
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(search) ||
          p.id.toString().includes(search)
      )
    : products;

  return (
    <div className="container">
      <StyledCatalogView>
        <div className="CatalogView__header">
          <div className="CatalogView__header_text">Catalog Page</div>
        </div>

        <div className="CatalogView__search">
          <SearchIcon color={"#909090"} />
          <input
            type="text"
            placeholder="Search item"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={search.length ? "notEmpty" : ""}
          />
        </div>
        <div className="CatalogView__grid">
          {windowWidth >= 905 ? (
            <Table
              columns={columns}
              data={renderedProducts}
              getKeyRow={getKeyRow}
            />
          ) : (
            <MobileTable data={renderedProducts} />
          )}
        </div>

        <LoadingSpinner isVisible={isLoading} />
      </StyledCatalogView>
    </div>
  );
};

export default CatalogView;
