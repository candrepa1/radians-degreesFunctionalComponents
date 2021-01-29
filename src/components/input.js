import React from 'react';

const Input = (props) => {
    return(
        <div className="form-group">
            <label className="form-label text-light">{props.title}</label>
            <input type="number" className="form-control rounded-pill" name="radians" value={props.value} onChange={props.onChange}/>
        </div>
    );
}

export default Input;