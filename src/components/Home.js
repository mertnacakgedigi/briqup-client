import React, { Component } from 'react';
import RequestList from './RequestList'

class Home extends Component {
    
    render(props) {
      
        
        return (
           <>
           <RequestList requestList = {this.props.requestList}/>
           </>
        );
    }
}

export default Home;
