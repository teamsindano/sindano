import React, { createContext, useState } from "react";
import UnfoldHeader from "./UnfoldHeader";
import UnfoldContent from "./UnfoldContent";
import UnfoldWrapper from "./UnfoldWrapper";

/**
 * Unfold Component
 * @author [Peter Staal](https://github.com/pstaal)
 */


export const UnfoldContext = createContext();

function Unfold({ children }) {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (itemId) => {
    if (itemId === activeItem) {
      setActiveItem(null)
      return;
    }
    setActiveItem(itemId);
  };

  return (
    <UnfoldContext.Provider value={{ activeItem, handleClick }}>
      {children}
    </UnfoldContext.Provider>
  );
}

Unfold.Wrapper = UnfoldWrapper;
Unfold.Header = UnfoldHeader;
Unfold.Content = UnfoldContent;

export default Unfold;
