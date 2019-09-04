import React from 'react';
import OTP from './otp'

const Twofactor = (props: { history: string[]; }) => {

    return (
        <div className="login page">
            <div className="form">
                <form className="otp-form">
                    <img src="https://store-images.s-microsoft.com/image/apps.33967.13510798887182917.246b0a3d-c3cc-46fc-9cea-021069d15c09.392bf5f5-ade4-4b36-aa63-bb15d5c3817a" width="100%"/>
                    <input type="text" placeholder="otp" />
                    <button id="otp-code" onClick={() => OTP.login(() => {
                        props.history.push('/terminal')
                    })}>Enter OTP code</button>
                </form>
            </div>
        </div>
    )
};

export default Twofactor;