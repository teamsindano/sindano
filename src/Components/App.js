
import Unfold from './Unfold/Unfold';
import React from 'react';
import Theme from "./Theme";
import "./App.css";
import { data } from '../utils/data';


// const data = [1,2,3,4];



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
        <div className='page'>

        {data.whatWeDoCard.map((item) => 
          <Unfold key={item.id} id={item.id} cardTitle={item.cardTitle} text={item.text} openedItem={openedItem} toggleComponent={toggleComponent}/>
        )}

        </div>
      </Theme>
   
  );
}

export default App;
