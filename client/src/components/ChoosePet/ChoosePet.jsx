import ChoosePetForm from "./ChoosePetForm";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PET } from "../../utils/mutations";
import decode from 'jwt-decode';
import Login from "../Login";

export default function ChoosePet() {
    const token = localStorage.getItem('id_token');
    if (!token) {
        return (
            < Login />
        )
    }
    ;
    const decoded = decode(token);

    const [formState, setFormState] = useState({ name: '', location: ''});
    const [addPet, { error, data }] = useMutation(ADD_PET);
    
    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            console.log(decoded.data._id)
            // Send pet creation data to backend
            const { data } = await addPet({
                variables: { 
                    name: formState.name,
                    location: formState.location,
                    userId: decoded.data._id
                }
            });

            console.log(data);

            // Clear out pet creation form
            setFormState({ name: '', location: '' });
            window.location.assign('/display');
        } catch (err) {
            console.log(err); 
        }
    };
    
    const changeHandler = (event) => {
        console.log(event.target);
        const name = event.target.name;
        const value = event.target.value;
        setFormState({
            ...formState,
            [name] : value
        });
    };

    return (
        <div className="formPage">
            <ChoosePetForm
                submitHandler={submitHandler}
                changeHandler={changeHandler}
                nameState={formState.name}
                locationState={formState.location}
            />
        </div>
    );
}
