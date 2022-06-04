import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { useForm } from 'react-hook-form';
import {useState} from 'react';

function Form() {
    const [userInfo,setuserInfo] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) =>{
        setuserInfo(data);
    } 
    

    return (
        <>
            <div className='container'>
                <pre>{JSON.stringify(userInfo,undefined,2)}</pre>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Registration Form</h1>
                    <div className="form-label">
                        <label>User Name</label>
                        <input type="text" name="username"
                          className="form-control"  
                          placeholder="Username" 
                          {...register('username',{ required: "Username is required" })} />
                          <p>{errors.username?.message}</p>
                    </div>
                    <div className="form-label">
                        <label>Email</label>
                        <input type="email" 
                        name="email"  
                        className="form-control"  
                        placeholder="Email" 
                        {...register('email',{ required: "Email is required", pattern: {value: /^\S+@\S+$/i, message: 'This is not a valid email'} })} />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className='form-label'>
                        <label>Age</label>
                        <input type="number" 
                        name="age" 
                        className='form-control' 
                        placeholder='Age' 
                        {...register('age', {required: "Age is required", pattern: /\d+/ })}/>
                        <p>{errors.age?.message}</p>
                    </div>
                    <div className='form-label'>
                        <label>Password</label>
                        <input type="password" 
                        name="password" 
                        className='form-control' 
                        placeholder='Password' 
                        {...register('password',{ required: "Password is required",
                         minLength:{value:4, message: 'password must be more than 4 characters'},
                         maxLength:{value:10, message: 'Password cannot exceed more than 10 characters' }
                         })}/>
                        <p>{errors.password?.message}</p>
                    </div>
                    <input type="submit" /> 
                </form>
            </div>

        </>

    );
}

export default Form;