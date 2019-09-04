import React from 'react';
import Auth from './auth';

const Passcode = (props: { history: string[]; }) => {
    return (
        <div className="login page">
            <div className="form">
                <form className="passcode-form">
                    <input type="text" placeholder="passcode" />
                    <button id="submit-passcode" onClick={() => Auth.login(() => {
                        props.history.push('/two-factor')
                    })}>Submit passcode</button>
                </form>
            </div>
        </div>
    )
};

export default Passcode;