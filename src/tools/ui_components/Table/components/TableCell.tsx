import React, { FC } from "react";

interface Props {
  width?: string | number;
  isHeader?: boolean;
  style?: React.CSSProperties;
}

const TableCell: FC<Props> = ({ width, isHeader, children, style }) => {
  return (
    <div
      className="table-cell"
      style={{
        width,
        color: isHeader ? "#565C70" : "#909090",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default TableCell;
