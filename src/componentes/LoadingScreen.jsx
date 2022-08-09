import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../styles/loadingScreen.css'


const LoadingScreen = () => {
    return (
        <div>
            <div className='loading'>
                <Spinner animation="grow" variant="primary" />
            </div>
        </div>
    );
};

export default LoadingScreen;