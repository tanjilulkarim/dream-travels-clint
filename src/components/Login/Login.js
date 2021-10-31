import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from 'react-router';




const Login = () => {


    const { signInWithGoogle, error, getEmail, getPassWord, SignInWithEmail, setIsLoading, setUser, setError } = useAuth();

    const history = useHistory();

    const location = useLocation();
    const redirect = location?.state?.from || "/home";
    return (
        <div className="container login-container">
            <div className="row mt-5 mb-3">
                <div className="col-lg-4"></div>

                <div className="col-lg-5">
                    <div className="login-div mb-3">
                        <h2 className="text-center">Login</h2>
                        <form onSubmit={SignInWithEmail} className="w-75 mx-auto">
                            <div className="mb-3">

                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={getEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text text-danger">{error}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input onBlur={getPassWord} type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div>
                                <Link className="link" to="/resetpassword">
                                    Forget Password?
                                </Link>
                            </div>
                            <div className="mb-3 ">
                                <Link className="link" to="/signup">
                                    Need an Account? Please Sign up!!
                                </Link>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                        <div className="text-center">
                            <h4 className="text-success m-3">Connect With</h4>
                            <button onClick={() => {
                                signInWithGoogle()
                                    .then(result => {
                                        setUser(result.user)
                                        history.push(redirect)
                                    })
                                    .catch(err => {
                                        setError(err.message)
                                    })
                                    .finally(() => {
                                        setIsLoading(false)
                                    })
                            }} className="btn mb-3">
                                <img width="50px" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />

                            </button>

                        </div>

                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    );
};

export default Login;