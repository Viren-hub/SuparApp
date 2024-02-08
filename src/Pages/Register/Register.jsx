import React, { useState } from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();
    let [userDetails, setUserDetails] = useState({
        name: '',
        userName: '',
        email: '',
        mobile: '',
        registerChecked: false
    });
    let [error, setError] = useState({
        name: null,
        userName: null,
        email: null,
        mobile: null,
        registerChecked: null
    })
    let submitHandler = () => {
        let isError = false
        if (userDetails.name.trim().length === 0) {
            setError((pre) => {
                return { ...pre, name: "Name is required" }
            })   
            isError = true;
        }
        else {
            setError((pre) => {
                return { ...pre, name: null }
            })

        }
        if (userDetails.userName.trim().length === 0) {
            setError((pre) => {
                return { ...pre, userName: "userName is required" }
            })
            isError = true;
        }
        else {
            setError((pre) => {
                return { ...pre, userName: null }
            })
        }
        if (userDetails.email.trim().length === 0) {
            setError((pre) => {
                return { ...pre, email: "Email is required" }
            })
            isError = true;
        }
        else {
            setError((pre) => {
                return { ...pre, email: null }
            })
        }
        if (userDetails.mobile.trim().length === 0) {
            setError((pre) => {
                return { ...pre, mobile: "mobile is required" }
            })
            isError = true;
        }
        else {
            setError((pre) => {
                return { ...pre, mobile: null }
            })
        }
        if( isError){
            return;
        }
        else{
            navigate('/Info')
        }
    }


    return (
        <div className='register'>
            <div className="register-image">
                <h1>Discover new things on <br /> Superapp</h1>
            </div>
            <div className="register-box">
                <div className="register-heading">
                    <h1>Super app</h1>
                    <p>Create your new account</p>
                </div>
                <div className="registration-details">
                    <input type="text" placeholder='Name' value={userDetails.name}
                        onChange={(e) => setUserDetails((pre) => {
                            return { ...pre, name: e.target.value }
                        })}
                    />
                    <p className='error'>{error.name}</p>
                    <input type="text" placeholder='UserName' value={userDetails.userName}
                        onChange={(e) => setUserDetails((pre) => {
                            return { ...pre, userName: e.target.value }
                        })}
                    />
                    <p className='error'>{error.userName}</p>
                    <input type="text" placeholder='Email' value={userDetails.email}
                        onChange={(e) => setUserDetails((pre) => {
                            return { ...pre, email: e.target.value }
                        })}
                    />
                    <p className='error'>{error.email}</p>
                    <input type="text" placeholder='Mobile' value={userDetails.mobile}
                        onChange={(e) => setUserDetails((pre) => {
                            return { ...pre, mobile: e.target.value }
                        })}
                    />
                    <p className='error'>{error.mobile}</p>
                </div>
                <div className="checkbox-btn">
                    <span>
                        <input type="checkbox"
                            onChange={(e) => setUserDetails((pre) => {
                                return { ...pre, registerChecked: e.target.checked }
                            })}
                            value={setUserDetails.registerChecked}
                        />
                    </span> <span><p>Share my registration data with Superapp</p></span>
                </div>
                <button onClick={submitHandler}>SIGN UP</button>
                <div className="terms-conditions">
                    <p>By clicking on Sign up. you agree to Superapp <strong>Terms and Conditions of Use</strong></p>
                    <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <strong>Privacy Policy</strong></p>
                </div>
            </div>
        </div>
    );
}

export default Register;
