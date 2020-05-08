import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import RequestModel from "../models/request"
import {Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

class Offer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            requestId : "",
            request : null,
            isLoaded : false,
        }

        const requestId = this.props.match.params
        this.setState({requestId})


        RequestModel.single(requestId.id)
            .then((request)=> this.setState({request : request.data}))
            .catch((err)=> console.log(err))  
    }

 
    componentDidMount(){
            this.setState({isLoaded : true})
    }

    render() {
       let request = this.state.request
       console.log(request)
    //    let postDate = Intl.DateTimeFormat('en-US').format(new Date(request.offer.createdAt))
    
    //    {{request} ? (<p>some request</p>):(<p> no request </p>)}
       
        return (
        <>{request ? 
            <>
         <div>
         
            <Card className = "text-left"
                bg={"light"}
                border="dark"
        
                text={'dark'}
                style={{ width: '80%', marginTop : "10px" }}
                >
                
                <Card.Body>
                    <Card.Title>  {request.name} </Card.Title>
                    <Card.Text>
                      Quantity :  {request.quantity} <br/>
                      Detail : {request.detail} <br/>
                    </Card.Text>
                    <Card.Text className = "text-right" >
                        
                    <Link to={{pathname: `/request/${request._id}/offer`}} ><Button size="sm" variant="outline-dark">Quote Now</Button></Link>
                    </Card.Text>
                </Card.Body>
                </Card>
        </div> 
        <div>

            <Card
             style={{ width: '90%', marginTop : "10px" }} >
                <Card.Header>Quotes Record ({request.offer.length}) </Card.Header>
                <Card.Body>
                <Table striped bordered hover>
                        <thead>
                            <tr>

                            <th>Company</th>
                            <th>Business Type</th>
                            <th>Location</th>
                            <th>Time Quoted </th>
                     
                            </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.isLoaded ?
                        <>{request.offer.map(function (request) {      

                        return   <tr> 
                                <td >{request.user.company}</td>
                                <td >{request.user.type}</td>
                                <td>{request.destination}</td>
                                <td>{Intl.DateTimeFormat('en-US').format(new Date(request.createdAt))}</td>
            
                               </tr>
                            
                        }, this)}</>
                        :
                        <p>Not Loaded</p>
                        }

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>


        
           </>
        
        
        
        :  


        
        null  }  </>
           
        );
    }
}

export default Offer;