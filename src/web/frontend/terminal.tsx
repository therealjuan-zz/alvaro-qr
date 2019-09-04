import React from 'react';

import './terminal.css';

const Terminal = () => {
    return (
        <div className="terminal-selector page">
            <input type="radio" name="tab" id="tab-1" defaultChecked={true} />
            <input type="radio" name="tab" id="tab-2" />
            <input type="radio" name="tab" id="tab-3" />

            <div className="tabs-wrapper">
                <label htmlFor="tab-1" className="label-tab-1">Terminal 1</label>
                <label htmlFor="tab-2" className="label-tab-2">Terminal 2</label>
                <label htmlFor="tab-3" className="label-tab-3">Terminal 3</label>
            </div>
            <div className="terminal">
                Terminal window goes here
            </div>
        </div>
    )
};

export default Terminal;