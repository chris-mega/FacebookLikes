import React from 'react';
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    logged: state.authReducer.logged
  }
}

const PrivateRoute = ({ logged, component: Component, path, ...rest }) => {
   return (
     <Route
       path={path}
       {...rest}
       render={props =>
         logged ? (
           <Component {...props} />
         ) : (
           <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
         )
       }
     />
   )
 }
 
export default connect(
  mapStateToProps
)(PrivateRoute);