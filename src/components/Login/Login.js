import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
         const {singInUsingGoogle} = useAuth();
         const location = useLocation();
         const history = useHistory();
         const redirect_uri = location.state?.from || './shop';

         const handleGoogleLogin = () =>{
                  singInUsingGoogle()
                  .then(result =>{
                           history.push(redirect_uri);
                  })
         }

         return (
                  <div className="login-form">
                           <div>
                                    <h2>Login</h2>
                                    <form>
                                             <input type="email" placeholder="Your Email" /><br />
                                             <input type="password" placeholder="Your password" /><br />
                                             <input type="submit" value="Submit" />
                                    </form>
                                    <p>New to ema-john ? <Link to="/register">Create account</Link></p>
                                    <div>-----------------Or-----------------</div>
                                    <button 
                                    onClick={handleGoogleLogin}
                                    className="btn-regular">Google Sing In</button>
                           </div>
                  </div>
         );
};

export default Login;