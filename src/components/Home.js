import React, { Component } from 'react';
import RequestList from './RequestList'
import Button from 'react-bootstrap/Button'
import {Link } from 'react-router-dom'

class Home extends Component {
    
    render(props) {
      
        
        return (
           <>
            <Link to={{pathname: `/request`}} ><Button style={{ textAlign : "center" }} size="sm" variant="outline-dark">Submit RFQ</Button></Link>
           <RequestList requestList = {this.props.requestList}/>
           </>
        );
    }
}

export default Home;
