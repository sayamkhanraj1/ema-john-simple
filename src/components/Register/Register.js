import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
         return (
                  <div className="register-form">
                          <div>
                                   <h2>Create Accout</h2>
                                   <form onSubmit="">
                                    <input type="email" placeholder="Your Email"/><br />
                                    <input type="password" placeholder="Your Password" /><br />
                                    <input type="password" placeholder="Re-enter password" /><br />
                                    <input type="submit" value="Submit" />
                                   </form>
                                   <p>Already have an accout <Link to="/login">LogIn</Link></p>
                                   <div>-----------------Or-------------</div>
                                   <button className="btn-regular">Google Sing In</button>
                          </div>
                  </div>
         );
};

export default Register;