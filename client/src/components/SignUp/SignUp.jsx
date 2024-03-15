import SignUpForm from "./SignUpForm";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import auth from "../../utils/auth";
import { SIGNUP_MUTATION } from "../../utils/mutations";

export default function SignUp(){
    const [formState, setFormState] = useState({ email: '', password: '', "confirm-password": ''});
    const [signup, { error, data }] = useMutation(SIGNUP_MUTATION);
    const submitHandler = async (event) => {
        event.preventDefault();
        console.log(formState);
    // add validation for form fields
        try{
          // send login data to backend
          const { data } = await signup({
            variables: { 
                email: formState.email,
                password: formState.password,
                confirmPassword: formState["confirm-password"]
            }
          })
    
          console.log(data);
    
          const token = data?.signUp.token || '';
    
          // save token data on frontend
          auth.login(token);
    
          // clear out login form
          setFormState({
            email: '',
            password: '',
            "confirm-password": ''
          })
        }
        catch (err){
          console.log(err); // add password hashing/modal 
        }
      }
    
      const changeHandler = (event) => {
        console.log(event.target);
        const name = event.target.name;
        const value = event.target.value;
        setFormState({
          ...formState,
          [name] : value
        })
      }
    return(
        <div className="formPage">
            <SignUpForm
               submitHandler={submitHandler}
               changeHandler={changeHandler}
               emailState={formState.email}
               passwordState={formState.password}
               confirmPasswordState={formState["confirm-password"]}
            />
        </div>
    )
}