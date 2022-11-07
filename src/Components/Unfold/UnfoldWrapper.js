import React, { useContext } from "react";
import { UnfoldContext } from "./Unfold";


function UnfoldWrapper({ id, children }) {
  const { handleClick } = useContext(UnfoldContext);

  return (
    <UnfoldWrapper onClick={() => handleClick(id)}>{children}</UnfoldWrapper>
  );
}

export default UnfoldWrapper;