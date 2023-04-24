import { TableCell as MaterialTableCell } from "@mui/material";
import React, { FC } from "react";

interface Props {
  width?: string | number;
  isHeader?: boolean;
  style?: React.CSSProperties;
}

const TableCell: FC<Props> = ({ width, isHeader, children, style }) => {
  return (
    <MaterialTableCell
      style={{
        height: "100%",
        width,
        color: isHeader ? "#565C70" : "#909090",
        letterSpacing: 0.5,
        fontFamily: "var(--font-family)",
        borderColor: "#F5F5F5",
        padding: "16px 10px",
        ...style,
      }}
    >
      {children}
    </MaterialTableCell>
  );
};

export default TableCell;
