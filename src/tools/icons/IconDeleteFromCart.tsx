import React, { FC } from "react";

import IconComponent from "./components/IconComponent";

const DeleteFromCartIcon: FC = () => {
  return (
    <IconComponent
      d={
        "M7.95802 7L13.8016 12.8436C14.0661 13.1081 14.0661 13.537 13.8016 13.8016C13.537 14.0661 13.1081 14.0661 12.8436 13.8016L7 7.95802L1.15643 13.8016C0.891878 14.0661 0.46296 14.0661 0.198412 13.8016C-0.0661372 13.537 -0.0661372 13.1081 0.198412 12.8436L6.04198 7L0.198412 1.15643C-0.0661372 0.891878 -0.0661372 0.46296 0.198412 0.198412C0.46296 -0.0661372 0.891878 -0.0661372 1.15643 0.198412L7 6.04198L12.8436 0.198412C13.1081 -0.0661372 13.537 -0.0661372 13.8016 0.198412C14.0661 0.46296 14.0661 0.891878 13.8016 1.15643L7.95802 7Z"
      }
    />
  );
};

const DeleteFromCartIconForwarded = React.forwardRef((props) => (
  <DeleteFromCartIcon {...props} />
));

export { DeleteFromCartIcon, DeleteFromCartIconForwarded };
