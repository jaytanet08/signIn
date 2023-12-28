import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Alert, Button } from 'react-bootstrap'
import { useUserAuth } from '../context/UserAuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
function Login() {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    signInWithGitHub } = useUserAuth();
  let navigate = useNavigate();
  const handleSubmit = async () => {
    setError("");
    try {
      await logIn(email, password)
      navigate("/Home");
    } catch (err) {
      setError(err.message)
    }
  }
  const logInByGoogle = async () => {
    try {
      await signInWithGoogle()
      navigate("/Home");
    } catch (err) {
      console.log(err.message)
    }
  }
  const logInByFacebook = async () => {
    try {
      await signInWithFacebook()
      navigate("/Home");
    } catch (err) {
      console.log(err.message)
    }
  }
  const logInByTwitter = async () => {
    try {
      await signInWithTwitter()
      navigate("/Home");
    } catch (err) {
      console.log(err.message)
    }
  }
  const logInByGitHub = async () => {
    try {
      await signInWithGitHub()
      navigate("/Home");
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2 className='mb-3'>Login</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control
                type='email'
                placeholder='Email address'
                onChange={(e) => setEamil(e.target.value)}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className='d-grid gap-2'>
              <Button variant='warning' type='button' onClick={handleSubmit}>Sign in</Button>
            </div>
            <div className='d-grid gap-2' style={{ marginTop: "10px" }}>
              <Button variant="danger" type="button" className="google-login-button" onClick={logInByGoogle} >
                <FontAwesomeIcon icon={faGoogle} className="google-icon" style={{ marginRight: "10px" }} />
                Login with Google
              </Button>
            </div>
            <div className='d-grid gap-2' style={{ marginTop: "10px" }}>
              <Button variant="primary" type="button" className="facebook-login-button" onClick={logInByFacebook}>
                <FontAwesomeIcon icon={faFacebook} className="facebook-icon" style={{ marginRight: "10px" }} />
                Login with Facebook
              </Button>
            </div>
            <div className='d-grid gap-2' style={{ marginTop: "10px" }}>
              <Button variant="info" type="button" className="faTwitter-login-button" onClick={logInByTwitter}>
                <FontAwesomeIcon icon={faTwitter} className="faTwitter-icon" style={{ marginRight: "10px" }} />
                Login with twiter
              </Button>
            </div>
            <div className='d-grid gap-2' style={{ marginTop: "10px" }}>
              <Button variant="dark" type="button" className="faGithub-login-button" onClick={logInByGitHub}>
                <FontAwesomeIcon icon={faGithub} className="faGithub-icon" style={{ marginRight: "10px" }} />
                Login with Github
              </Button>
            </div>
          </Form>
          <div className='p-4 box mt-3 text-center'>
            forget password?<Link to="/resetpassword"> ResetPassword</Link><br />
            Don't have an accout?<Link to="/register"> Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login