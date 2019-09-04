import React from 'react';

const Passcode = (props: { history: string[]; }) => {
    return (
        <div className="login page">
            <div className="form">
                <form className="passcode-form">
                    <input type="text" placeholder="passcode" />
                    <button id="submit-passcode">Submit passcode</button>
                </form>
            </div>
        </div>
    )
};

export default Passcode;