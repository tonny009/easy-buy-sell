import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../Api/auth';
import logImg from '../../assets/login.jpg'
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Loading from '../Shared/Loading';
// import useTitle from '../../hooks/useTitle'

const Login = () => {

    useTitle('Login')

    const [error, setError] = useState('');
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider()
    const { providerLogin, signIn, setLoading, loading } = useContext(AuthContext);
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                toast.success('Login Successful.....!')
                setLoading(false)
                const loginUserInfo = { email: result.user.email }
                setAuthToken(loginUserInfo)
                navigate(from, { replace: true });
            })
            .catch(err => {
                toast.error("Wrong Email/Password! ....")
                setError("Wrong email/password.. Please give valid email and password !")
                setLoading(false)
            })

    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                console.log(result.user);
                const googleSigninUser = {
                    email: result.user.email,
                    role: "buyer",
                    name: result.user.displayName
                }
                setAuthToken(googleSigninUser)
                setLoading(false)
                navigate('/')
                navigate(from, { replace: true })
                // console.log(user)
            })
            .catch(error => {
                console.error()
                setError("Something went wrong! ");
            })

    }
    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className="hero w-full my-20">
            <div className="hero-content ml-20 grid gap-5 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4 h-3/4' src={logImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold clr">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl"><strong>Email</strong> </span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl"><strong>Password</strong></span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <br></br>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover"><strong>Forgot password?</strong></a>
                            </label>
                            <p><strong className='fs-5 text-red-600'>{error}</strong></p>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-colors" type="submit" value="Login" />
                        </div>
                        <div className="form-control mt-6">

                            <Button className='login-others-btn loginbtn' onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle className='mr-4'></FaGoogle>  Log in With Google</Button>
                        </div>
                    </form>


                    <p className='text-center'><strong>New to Dream Studio? </strong><Link className='text-blue-600 font-bold' to="/register">Sign Up</Link> </p>

                </div>
            </div>
        </div>
    );
};

export default Login;