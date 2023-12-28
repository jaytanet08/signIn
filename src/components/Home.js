import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import { Button } from 'react-bootstrap';
function Home() {
    const { logOut, user } = useUserAuth();

    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <div className="col-md-6 mx-auto">
            <h2>Welcome to home page</h2>
            <p>{user ? user.email : ""}</p>
            <Button onClick={handleLogout} variant='danger'>Logout</Button>
        </div>
    )
}

export default Home