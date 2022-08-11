import React from 'react';
import { Form, Button} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const { register, handleSubmit, reset} = useForm()
    const navigate = useNavigate()
    const submit=data=>{
        
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
            .then(res=>{
                navigate('/')
                localStorage.setItem('token', res.data.data.token)
            })
            .catch(error=>{
                if(error.response.status!==200){
                    alert('Credenciales invalidas')
                }
                console.log(error.response)
            })
        reset({
            email:'',
            password:''
        })
    }

    return (
        <div className='container my-5'>
            <h1>Login</h1>
            <Form className='container my-5' onSubmit={handleSubmit(submit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register('email')}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register('password')}/>
                </Form.Group>
                <div style={{display:'flex', gap:'1rem', alignItems:'center'}}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <span>Don't have an account?</span>
                    <span onClick={()=>navigate('/createUser')} style={{color:'#216dc1', cursor:'pointer'}}>Sing up</span>
                </div>
            </Form>
        </div>
    );
};

export default Login;