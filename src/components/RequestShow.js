import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {Link } from 'react-router-dom'
import RequestModel from '../models/request'


class RequestShow extends Component {
    state = {
        editShow : false
    }

    deleteRequest = (id) => {
    
        RequestModel.delete(id)
            .then((err)=>{   window.location.reload() } )
            .catch((err)=>console.log(err))
    }

    editShow = () => {
        this.setState({editShow : !this.state.editShow})
    }


    render(props) {
        console.log(this.props.requests)
        const requestList = this.props.requests.map((request,index) => 
        <tr style={{ textAlign : 'center' }}> 
            <td>{index+1}</td>
            <td >{request.name}</td>  
            <td >{request.destination}</td>     
            <td >{request.category}</td>
            <td >{request.quantity}</td>
            <td>{Intl.DateTimeFormat('en-US').format(new Date(request.createdAt))}</td> 
            <td><Link to={{pathname: `/request/${request._id}/update`}} ><Button size="sm" variant="outline-dark">Edit</Button></Link>
            <Button onClick={()=> this.deleteRequest(request._id)} style={{marginLeft : "5px"}}size="sm" variant="outline-dark">Delete</Button></td>
            
            
    
       </tr>
        );
        return (
            <div>   

            <Card
            style={{ width: '90%', marginTop : "10px" }} >
            <Card.Header> You have {requestList.length} { requestList.length ===1 ?  <span>Request</span>  : <span>Requests</span>} </Card.Header>
            <Card.Body>
            <Table striped bordered hover>
                    <thead style={{ textAlign : 'center' }}>
                        <tr >

                        <th>Request</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Category</th>
                        <th>Quantity </th>  
                        <th>Time Quoted </th>
                    
                        </tr>
                    </thead>
                    <tbody>
                    {requestList}

                    </tbody>
                    </Table>
                </Card.Body>
            </Card>
                        
            </div>
        );
    }
}

export default RequestShow;