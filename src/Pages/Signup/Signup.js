import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../Api/auth';
import img from '../../assets/register.jpg'
import { AuthContext } from '../../Contexts/AuthProvider';





const Signup = () => {
    const { createUser, updateUserProfile, setLoading } = useContext(AuthContext);

    const navigate = useNavigate()
    const [error, setError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const role = form.role.value;
        const password = form.password.value
        const photoURL = form.photoURL.value;
        const status = '0';


        // console.log(user);

        // // Create User

        createUser(email, password)
            .then(result => {
                console.log(result);
                const user = {
                    name, email, role, photoURL, status
                }
                setAuthToken(user);
                setRegisterSuccess("Successfully Registered! ")

                updateUserProfile(name, photoURL)
                    .then(() => {
                        setLoading(false)
                    })
                    .catch(err => console.log(err))
                form.reset();
                navigate('/home')
            })

            .catch(err => {
                console.log(err)
                setError(err)
                setLoading(false)
            })
    }


    return (
        <div className="hero w-full my-20">
            <div className="hero-content ml-20 grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold clr">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Initial Role</span>
                            </label>
                            <select name="role" className="select select-bordered w-full">
                                <option value='buyer' seleted>Buyer</option>
                                <option value='seller'>Seller</option>
                                <option value='admin'>Admin</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className='text-danger'>
                            <strong className='fs-5'>{error}</strong>
                        </div>
                        <div className='text-danger'>
                            <strong className='fs-5'>{registerSuccess}</strong>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;