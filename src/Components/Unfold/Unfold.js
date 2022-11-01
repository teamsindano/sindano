import './Unfold.css';
import { ReactComponent as Arrow } from '../../Images/downward-arrow.svg';
import React from 'react';

function Unfold()  {

    const [open, setOpen] = React.useState(false);

    const toggleComponent = (event) => {
        event.preventDefault();
        setOpen(!open);
    }

    return (
        <div className="unfold" onClick={toggleComponent}>
            <div className="unfold__header">
                <h3 className="unfold__header-text">For healthcare system</h3>
                <button className={`unfold__header-button ${open ? 'unfold__header-button-down': ''}`}><Arrow/></button>
            </div>
            <div className={`unfold__content ${open ? 'unfold__content-open' : ''}`}>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <button>Press</button>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>
        </div>
    );
}

export default Unfold;