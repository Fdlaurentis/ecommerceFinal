import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from '../store/slice/login.slice';

const CreateUser = () => {

    const navigate=useNavigate()

    const { register, handleSubmit } = useForm()

    const login=useSelector(state=>state.login)

    const dispatch = useDispatch()

    const submit = data => {

        console.log(data);
        const userLogin={
            email:data.email,
            password:data.password
        } 
        console.log(userLogin);   
        console.log(userLogin)
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users', data)
            .then(()=>dispatch(loginThunk(userLogin)))
            .then(()=>navigate('/'))
            .catch(error => console.log(error.response))


        
    }
    
    return (
        <div className='container my-5'>
            <form onSubmit={handleSubmit(submit)}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="First Name"
                            {...register('firstName')}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="Last Name"
                            {...register('lastName')}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                            {...register('email')}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Password"
                            {...register('password')}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="number"
                            className="form-control"
                            id="phone"
                            placeholder="Phone"
                            {...register('phone')}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default CreateUser;