import { TableCell as MaterialTableCell } from "@mui/material";
import React, { FC } from "react";

interface Props {
  width?: number;
  isHeader?: boolean;
}

const TableCell: FC<Props> = ({ width, isHeader, children }) => {
  return (
    <MaterialTableCell
      style={{
        height: "100%",
        width,
        color: isHeader ? "#565C70" : "#909090",
        letterSpacing: 0.5,
        fontFamily: "var(--font-family)",
        borderColor: "#F5F5F5",
      }}
    >
      {children}
    </MaterialTableCell>
  );
};

export default TableCell;
