import React, { FC } from "react";

interface Props {
  d: string | string[];
  width?: number;
  height?: number;
  color?: string;
}

const IconComponent: FC<Props> = ({
  d,
  width: widthProp,
  height: heightProp,
  color,
}) => {
  const width = typeof widthProp === "number" ? widthProp : 18;
  const height = typeof heightProp === "number" ? heightProp : 18;
  const paths = Array.isArray(d) ? d : [d];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color || "currentColor"}
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
};

export default IconComponent;
