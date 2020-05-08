import React, { Component } from 'react';
import ProfileModel from '../models/profile'
import Card from 'react-bootstrap/Card'
import logo from "../docs/profile.jpg"
import OfferShow from './OfferShow'
import RequestShow from './RequestShow'

class Profile extends Component {

  state = {
    user : null,
    
  }

  componentDidMount(){
    ProfileModel.getProfile(this.props.match.params.id)
     .then((res)=> {
       
       this.setState(
         {user : res.data
        })
     })
  }
  render() {

    let user = this.state.user 
    console.log(user)
    return ( <>{user ?  <>      
     <Card style = {{ width : "50%", margin : "0 auto"}}>
      <Card.Body>
      <img style = {{ width : "200px", height :"200px"}}  src={logo} alt="hey"></img>
        <Card.Text style = {{ fontSize: "22px", float: 'right', marginTop :"25px"}}> 
          
          Company : {user.company} <br></br>
          Business Type : {user.type}  <br></br>
          Email : {user.email}  <br></br>
          Joined : {Intl.DateTimeFormat('en-US').format(new Date(user.createdAt))}
        </Card.Text>
      </Card.Body>
      </Card> 

      <OfferShow offers = {this.state.user.offers} />
      <RequestShow requests = {this.state.user.requests} />
    
    
    </>
    
    
 
    :  
    
      <p>Not Loadded</p>
    } </>
    );
  }
}

export default Profile;