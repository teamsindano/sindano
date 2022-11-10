import React, { createContext, useState } from "react";
import UnfoldHeader from "./UnfoldHeader";
import UnfoldContent from "./UnfoldContent";
import styled from "styled-components";

/**
 * Unfold Component
 * @author [Peter Staal](https://github.com/pstaal)
 */


 const UnfoldWrapperDiv = styled.div`
 margin: 0;
 padding: 40px;
 background: #283592;
 border-radius: 20px;
 margin-bottom: 40px;
`;

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
      <UnfoldWrapperDiv>
      {children}
      </UnfoldWrapperDiv>
    </UnfoldContext.Provider>
  );
}


Unfold.Header = UnfoldHeader;
Unfold.Content = UnfoldContent;

export default Unfold;
