import {
  Paper,
  Table as MaterialTable,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import React from "react";

import TableCell from "./components/TableCell";
import TableRow from "./components/TableRow";

import { GetKeyRow, TableColumn } from "./types";

interface Props<Item> {
  columns: TableColumn<Item>[];
  data: Item[];
  getKeyRow: GetKeyRow<Item>;
}

function Table<Item>({ data, columns, getKeyRow }: Props<Item>) {
  return (
    <div className="table">
      <TableRow className="only-desktop header">
        {columns.map(({ key, title, width }) => (
          <TableCell key={key.toString()} width={width} isHeader={true}>
            <b>{title}</b>
          </TableCell>
        ))}
      </TableRow>

      {data.map((item, rowIdx) => (
        <TableRow key={getKeyRow(item)}>
          {columns.map(({ key, width, renderCell }, index) => {
            if (index === 1) {
              return (
                <div className="wrap" key={index}>
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
            } else if (index === 0 || index === 4) {
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
  );
}

export default Table;
