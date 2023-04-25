import React, { FC } from "react";

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
