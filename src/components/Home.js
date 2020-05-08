import React, { Component } from 'react';
import RequestList from './RequestList'
import Button from 'react-bootstrap/Button'
import {Link } from 'react-router-dom'

class Home extends Component {
    
    render(props) {
      
        
        return (
           <> 
           <div  style={{ textAlign : "center" }}>
                 <Link to={{pathname: `/request`}} ><Button size="lg" variant="outline-dark">Submit RFQ</Button></Link>
           </div>
         
           <RequestList requestList = {this.props.requestList}/>
           </>
        );
    }
}

export default Home;
