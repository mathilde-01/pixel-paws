import React, { useEffect } from 'react';
import M from 'materialize-css';

export default function ChoosePetForm({ submitHandler, changeHandler, nameState, locationState }) {
    useEffect(() => {
        // Initialize Materialize CSS select dropdown
        const selectElement = document.querySelectorAll('select');
        M.FormSelect.init(selectElement, {});
    }, []);

    const handleLocationChange = (event) => {
        changeHandler(event); 
    };

    return (
        <div className="formContainer">
            <h5>Adopt a creature?</h5>
            <div className="row center">
                <form onSubmit={submitHandler}>    
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="name" id="formname" type="text" className="validate" onChange={changeHandler} value={nameState}></input>
                            <label htmlFor="formname">Name</label>
                        </div>
                        <div className="input-field col s12">
                            <select name="location" value={locationState} onChange={handleLocationChange}>
                                <option value="" disabled> Pet's location</option>
                                <option value="Forest">Forest</option>
                                <option value="Underwater">Underwater</option>
                                <option value="Desert">Desert</option>
                                <option value="Clouds">Clouds</option>
                            </select>
                            <label>Home</label>
                        </div>
                    </div>
                    <button className="btn" name="action">CREATE PET</button>
                </form>
            </div>
        </div>
    );
}