import React, { useEffect } from 'react';
import M from 'materialize-css';
import forest from '../../assets/backgrounds/pet-backgrounds/forest.jpg'
import desert from '../../assets/backgrounds/pet-backgrounds/desert.jpg'
import clouds from '../../assets/backgrounds/pet-backgrounds/clouds.jpg'
import underwater from '../../assets/backgrounds/pet-backgrounds/underwater.jpg'

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
                                <option value="Forest" data-icon={forest}>Forest</option>
                                <option value="Underwater" data-icon={underwater}>Underwater</option>
                                <option value="Desert" data-icon={desert}>Desert</option>
                                <option value="Clouds" data-icon={clouds}>Clouds</option>
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