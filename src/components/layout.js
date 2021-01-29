import React, { useState } from 'react';

import '/Users/camilapv/Desktop/ACADEMLO/REACT/#3ej/exercise/functional/node_modules/bootstrap/dist/css/bootstrap.css';
import Input from './input.js';

function Layout() {
    const [currentDegrees, setDegrees] = useState('');
    const [currentRadians, setRadians] = useState('');

    const toRadians = (degrees) => {
        return degrees * 0.01745;
    };
    const toDegrees = (radians) => {
        return radians * 57.296;
    };
    const handleChangeRadians = (event) => {
        const value = event.target.value;
        setRadians(value);
        setDegrees(toDegrees(value));
    };
    const handleChangeDegrees = (event) => {
        const value = event.target.value;
        setDegrees(value);
        setRadians(toRadians(value));
    };
    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="bg-dark p-4">
                        <Input onChange={handleChangeRadians} title="Radians:" value={currentRadians}/>
                        <Input onChange={handleChangeDegrees} title="Degrees:" value={currentDegrees}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;