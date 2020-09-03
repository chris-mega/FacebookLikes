import React, { useState } from "react";
import { connect } from 'react-redux'
import { changeUser } from '../redux/actions/authActions'
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';
const Login = ({ dispatch }) => {
  const [logged, setLogged] = useState(false);
  const responseFacebook = (event) => {
    if(event && event.email){
      const user = {
        accessToken: event.accessToken,
        email: event.email,
        id: event.id,
        name: event.name
      };
      console.log("dispatching user", user)
      dispatch(changeUser(user));
      setLogged(true);
    }
  }

  return(
    <React.Fragment>
      {
        logged ? (
          <Redirect to="/" />
        ) : (
          <div className="main-login">
            <FacebookLogin
              appId="968575366675332"
              autoLoad={true}
              fields="name,email,picture"
              icon="fa-facebook"
              callback={responseFacebook} />
          </div>
        )
      }
    </React.Fragment>
  );
}
export default connect()(Login);