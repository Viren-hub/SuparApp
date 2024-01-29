import React, { useState } from 'react';
import './Register.css'

function Register() {
    let [userDetails, setUserDetails] = useState({
        name:'',
        userName:'',
        email:'',
        mobile:'',
        registerChecked:false
    });

        let submitHandler =()=>{
            alert(JSON.stringify(userDetails, null, 2));
        }
    return (
        <div className='register'>
            <div className="register-image">
                <h1>Discover new things on <br/> Superapp</h1>
            </div>
            <div className="register-box">
                <div className="register-heading">
                    <h1>Super app</h1>
                    <p>Create your new account</p>
                </div>
                <div className="registration-details">
                    <input type="text" placeholder='Name' value={userDetails.name} 
                    onChange={(e) => setUserDetails((pre)=>{
                        return {...pre, name:e.target.value}
                    })} 
                    />
                    <input type="text" placeholder='UserName' value={userDetails.userName} 
                    onChange={(e) => setUserDetails((pre)=>{
                        return {...pre, userName:e.target.value}
                    })} 
                    />
                    <input type="text" placeholder='Email' value={userDetails.email} 
                    onChange={(e) => setUserDetails((pre)=>{
                        return {...pre, email:e.target.value}
                    })}
                    />
                    <input type="text" placeholder='Mobile' value={userDetails.mobile} 
                    onChange={(e) => setUserDetails((pre)=>{
                        return {...pre, mobile:e.target.value}
                    })} 
                    />
                </div>
                <div className="checkbox-btn">
                    <span>
                    <input type="checkbox" 
                    onChange={(e) => setUserDetails((pre)=>{
                        return {...pre, registerChecked:e.target.checked}
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
