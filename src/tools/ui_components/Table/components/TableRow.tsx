import React, { FC } from "react";

import { TableRow as MaterialTableRow } from "@mui/material";

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

const TableRow: FC<Props> = ({ style, className, children }) => {
  return (
    <div className={`${className || ""} table-row`} style={style}>
      {children}
    </div>
  );
};

export default TableRow;
