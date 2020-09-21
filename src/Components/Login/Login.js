import React, { useContext, useState } from 'react';
import "firebase/auth";
import { UserContext } from '../../App';
import logo from '../../website-designer/Logo.png';
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';
import googleLogo from '../../website-designer/Icon/google.png';
import facebookLogo from '../../website-designer/Icon/fb.png';


const Login = () => {



    const [newUser, setNewUser] = useState(false)

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })

    initializeLoginFramework()



    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };



    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleResponse = (res, redirect) => {
        console.log(res, from)
        setUser(res);
        setLoggedInUser(res);

        if (redirect) {
            history.replace(from)

        }
        if (!user.error) {
            redirect = true
        }
    }

    const handleBlur = (event) => {

        let isFieldValid = true;

        // console.log(event.target.name,event.target.value )

        if (event.target.name === 'email') {

            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)

            console.log(isFieldValid)

        }
        if (event.target.name === 'password') {

            const isPasswordValid = event.target.value.length > 6;

            const passwordHasNumber = /\d{1}/.test(event.target.value)

            isFieldValid = (isPasswordValid && passwordHasNumber)

        }
        if (isFieldValid) {

            const newUserInfo = { ...user };

            newUserInfo[event.target.name] = event.target.value;

            setUser(newUserInfo)

        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user, newUser)

        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    console.log(res);
                    handleResponse(res, true)

                })
        }
        if (!newUser && user.email && user.password) {
            console.log("old user")
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true)
                })
        }
    }



    return (

        <section className="loginPage">
            <Container>

                <Row>
                    <Col lg={6}><Navbar.Brand to="/"><img className="logoLogin" src={logo} alt="" /></Navbar.Brand>
                    </Col>
                    <Col lg={6}>
                        <Navbar variant="dark">
                            <Navbar.Collapse id="basic-navbar-nav">

                                <Link className='navBar2 ml-5' to="home">News</Link>
                                <Link className='navBar2 ml-5' to="destination">Destination</Link>
                                <Link className='navBar2 ml-5' to="blog">Blog</Link>
                                <Link className='navBar2 ml-5' to="contact">Contact</Link>
                                <Link to='/login' className='navBar2 ml-5'><Button className='button'>Login</Button></Link>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Row>
                <Col></Col>
                 <Col>
                    <div className='form-style'>
                        <div className='logInForm'>
                            <h3 className="logInText">{newUser ? 'Create an account' : 'Log In'}</h3>
                            <form className='formBoth' onSubmit={handleSubmit}>

                                {newUser &&

                                    <input className="inputText" type="text" onBlur={handleBlur} placeholder="Your First Name" required />

                                }
                                <br />
                                {newUser &&
                                    <input className="inputText" type="text" onBlur={handleBlur} placeholder="Your Last Name" required />

                                }
                                <br />
                                <input className="inputText" type="email" onBlur={handleBlur} placeholder="Your Email Address" name="email" id="" required />
                                <br />
                                <input className="inputText" type="password" onBlur={handleBlur} placeholder='Your Password' name="password" id="" required />


                                {
                                    newUser && <input className="inputText" type="password" onBlur={handleBlur} placeholder='Confirm Your password' name="password" id="" required />
                                 }
                                <p style={{ marginLeft: '20%' }}>

                                    {(!newUser) &&

                                        <input type="checkbox" name="Remember Me" id="" />
                                    } Remember Me
                                </p>
                                <button className='btn btn-block' style={{ backgroundColor: 'goldenrod', width: '80%', borderRadius: '20px', fontSize: '20px', marginLeft: '9%' }} type="submit">


                                    {
                                        newUser ? 'Create an Account' : "Login"
                                    }
                                </button>
                            </form>
                            <p style={{ marginLeft: '18%' }}>
                                {newUser

                                    ? "Already have an account?Login"
                                    : "Do not have an account ?? Create a new account"
                                }

                                <input type='checkbox' onChange={() => setNewUser(!newUser)} name='' id="" />
                                 </p>
                        </div>
                        <p style={{ color: 'red' }}>{user.error}</p>
                        {user.success && <p style={{ color: 'green' }}>User {newUser ? "created" : "Logged in successfully"}</p>}
                        {
                            user.isSignedIn

                                ? <button onClick={signOut}></button>
                                : <button style={{ marginBottom: '2%', height: '40px', backgroundColor: 'white', borderRadius: '20px', width: '300px', lineHeight: '30px', marginLeft: '25%' }} onClick={googleSignIn}> <img src={googleLogo} alt="" width='30px' />  Continue With Google</button>
                        }
                        <button style={{ height: '40px', marginLeft: '25%', backgroundColor: 'white', borderRadius: '20px', width: '300px', lineHeight: '30px' }} onClick={fbSignIn}> <img src={facebookLogo} alt="" width='30px' /> Continue With Facebook</button>

                    </div>


                </Col>
                <Col></Col>
            </Row>
        </section>
    );
};

export default Login;