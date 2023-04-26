import React, { FC } from "react";

import TableCell from "./components/TableCell";
import TableRow from "./components/TableRow";

import { GetKeyRow, TableColumn } from "./types";
import StyledTable from "./StyledTable";

interface Props<Item = any> {
  columns: TableColumn<Item>[];
  data: Item[];
  getKeyRow: GetKeyRow<Item>;
  className?: string;
}

const Table: FC<Props> = ({ data, columns, getKeyRow, className }) => {
  return (
    <StyledTable
      className={className}
      style={{ "--columns": columns.length - 1 } as React.CSSProperties}
    >
      <TableRow className="only-desktop header">
        {columns.map(({ key, title, width }) => (
          <TableCell key={key.toString()} width={width} isHeader={true}>
            <b>{title}</b>
          </TableCell>
        ))}
      </TableRow>

      <div className="body">
        <div>
          {data.map((item, rowIdx) => (
            <TableRow key={getKeyRow(item)}>
              {columns.map(({ key, width, renderCell }, index) => {
                if (index === 1) {
                  return (
                    <div className="wrap" key={index + rowIdx}>
                      {columns
                        .slice(1, columns.length - 1)
                        .map((innerElement, innerIndex) => (
                          <TableCell
                            key={innerElement.key.toString()}
                            width={width}
                          >
                            {innerElement.renderCell(item)}
                          </TableCell>
                        ))}
                    </div>
                  );
                } else if (index === 0 || index === columns.length - 1) {
                  return (
                    <TableCell key={key.toString()} width={width}>
                      {renderCell(item)}
                    </TableCell>
                  );
                } else {
                  return null;
                }
              })}
            </TableRow>
          ))}
        </div>
      </div>
    </StyledTable>
  );
};

export default Table;
