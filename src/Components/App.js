
import Unfold from './Unfold/Unfold';
import React from 'react';
import Theme from "./Theme";
import "./App.css";


const data = [1,2,3,4];



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

        {data.map((item) => 
          <Unfold key={item} id={item} openedItem={openedItem} toggleComponent={toggleComponent}/>
        )}

        </div>
      </Theme>
   
  );
}

export default App;
