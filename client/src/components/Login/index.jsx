import LoginForm from "../LoginForm";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import auth from "../../utils/auth";
import { LOGIN_MUTATION } from "../../utils/mutations";


function Login() {
  const [formState, setFormState ]= useState({
    email: "",
    password: "",
  })
  const [login, { error, data }] = useMutation(LOGIN_MUTATION);

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formState);

    try{
      // send login data to backend
      const { data } = await login({
        variables: { ...formState }
      })

      console.log(data);

      const token = data?.login.token || '';

      // save token data on frontend
      auth.login(token);

      // clear out login form
      setFormState({
        email: '',
        password: '',
      })
    }
    catch (err){
      console.log(err);
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
 
  return (
    

      <div className="formPage">
      <LoginForm 
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        emailState={formState.email}
        passwordState={formState.password}
      />
      </div>
    
  )
}

export default Login;