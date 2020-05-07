import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import RequestModel from "../models/request"
import {Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

class Offer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            requestId : "",
            request : null
        }

        const requestId = this.props.match.params
        this.setState({requestId})


        RequestModel.single(requestId.id)
            .then((request)=> this.setState({request : request.data}))
            .catch((err)=> console.log(err))  
    }

 
    componentDidMount(){

    }

    render() {
       let request = this.state.request
       console.log(request)
    
    //    {{request} ? (<p>some request</p>):(<p> no request </p>)}
       
        return (
        <>{request ? 
         <div>
         
            <Card className = "text-left"
                bg={"light"}
                border="dark"
        
                text={'dark'}
                style={{ width: '80%', marginTop : "10px" }}
                >
                <Card.Header> {request.name}</Card.Header>
                <Card.Body>
                    <Card.Title>  {request.category} </Card.Title>
                    <Card.Text>
                      Quantity :  {request.quantity} <br/>
                      {request.detail}
                    </Card.Text>
                    <Card.Text className = "text-right" >
                        
                    <Link to={{pathname: `/request/${request._id}/offer`}} ><Button size="sm" variant="outline-dark">Quote Now</Button></Link>
                    </Card.Text>
                </Card.Body>
                </Card>
        </div> 


        
        
        
        :  


        
        null  }  </>
           
        );
    }
}

export default Offer;