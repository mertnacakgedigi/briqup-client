import React, { Component } from 'react';
import RequestList from './RequestList'
import Button from 'react-bootstrap/Button'
import {Link } from 'react-router-dom'
import header from "../docs/briqupnew.jpg"

class Home extends Component {
    
    render(props) {
      
        
        return (
           <> 
           {/* <img style = {{ width : "100%", height :"25%"}}  src={header} alt="hey"></img> */}
           <div style={{backgroundImage: `url(${header})`, textAlign: "center", backgroundSize : "cover"}} >
                 <Link to={{pathname: `/request`}} ><Button  style={{marginTop: "250px", marginBottom : "50px"}} size="lg" variant="dark">Submit RFQ</Button></Link>
           </div>
         
           <RequestList requestList = {this.props.requestList}/>
           </>
        );
    }
}

export default Home;
