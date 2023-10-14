import React from 'react';
import './auth.css'
import { register, Hanko } from "@teamhanko/hanko-elements";

const HankoApi = process.env.HANKO_API

const Auth = () => {

    useEffect(() => {
        register({});
    }, []);

    return(
        <div className='auth'>
            <Hanko-auth api={HankoApi} />
        </div>
    );
}


export default Auth;