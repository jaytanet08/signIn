import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useUserAuth } from '../context/UserAuthContext'

function Login() {
    const [email, setEamil] = useState("");

    const { resetPassword } = useUserAuth();
    let navigate = useNavigate();
    const handleSubmit = async () => {
        try {
            await resetPassword(email)
            navigate("/Login");
        } catch (err) {
            console.log(err.message)

        }
    }
   
    return (
        <div>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h2 className='mb-3 '>forget password</h2>
              
                    <Form >
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Control
                                type='email'
                                placeholder='Email address'
                                onChange={(e) => setEamil(e.target.value)}
                            />
                        </Form.Group>

               
                        <div className='d-grid gap-2'>
                            <Button variant='success' type='button' onClick={handleSubmit}>OK</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login