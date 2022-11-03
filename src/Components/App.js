import './App.css';
import Unfold from './Unfold/Unfold';
import React from 'react';

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
    <div className='page'>

      {data.map((item) => 
        <Unfold key={item} id={item} openedItem={openedItem} toggleComponent={toggleComponent}/>
      )}

    </div>
  );
}

export default App;
