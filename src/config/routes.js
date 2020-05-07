import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components
import Home from '../components/Home'
import Profile from '../components/Profile'
import Login from '../components/Login'
import Register from '../components/Register'
import CreateRequest from '../components/CreateRequest'
import Offer from '../components/Offer'

export default (props) => (
  <Switch>
    <Route exact path="/" render={ (routeProps) => {
      // An example of adding props to a component rendered by react router
      return <Home
                { ...routeProps }
                requestList={props.requestList}
              
              /> 
    } } />

    <Route exact path="/request" render={ (routeProps) => {
      // An example of adding props to a component rendered by react router
      return <CreateRequest 
                { ...routeProps }
                show={true}
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
              /> 
    } } />
  
    <Route exact path="/profile" render={ (routeProps) => {
      // An example of adding props to a component rendered by react router
      return <Profile 
                { ...routeProps }
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
              /> 
    } } />

    <Route path="/profile/:id" render={ (routeProps) => {
      // An example of adding props to a component rendered by react router
      return <Profile 
                { ...routeProps }
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
              /> 
    } } />
    <Route path="/login" render={ (routeProps) => {
      // An example of adding props to a component rendered by react router
      return <Login 
                { ...routeProps }
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
              /> 
    } } />
    <Route path="/register" component={ Register } />
    <Route path ='/request/:id' component = {Offer} />
  </Switch>
)