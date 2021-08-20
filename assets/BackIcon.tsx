import React from "react";

import type { Size } from "./type";

const BackIcon: React.FC<Size> = ({ width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 9 16">
      <path fill="#000" d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM2 7H1v2h1V7z"></path>
    </svg>
  );
};

BackIcon.defaultProps = {
  width: 9,
  height: 16,
};

export default BackIcon;
