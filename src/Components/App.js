
import Unfold from './Unfold/Unfold';
import React from 'react';
import Theme from "./Theme";
import { data } from '../utils/data';
import styled from "styled-components";



const Page = styled.div`
  width: 1280px;
    margin: 0 auto;
    padding: 0 80px;
`;

function App() {

  const [openedItem, setOpenedItem] = React.useState(null);

    const toggleComponent = (id, openedItem) => {
        if (id === openedItem) {
          setOpenedItem(null);
        } else {
          setOpenedItem(id);
        } 
    }

  return (
   
    <Theme>
        <Page>

        {data.whatWeDoCard.map((item) => 
          <Unfold key={item.id} id={item.id} cardTitle={item.cardTitle} text={item.text} openedItem={openedItem} toggleComponent={toggleComponent}/>
        )}

        </Page>
      </Theme>
   
  );
}

export default App;
