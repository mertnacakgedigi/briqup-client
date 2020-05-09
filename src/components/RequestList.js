import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import RequestModel from '../models/request'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


class RequestList extends Component {

    state = {
        requestList: [],
        isLoaded: false,
        requestId: '',
    } 
   
    //We have access to this.props.currentUser
    componentDidMount() {
       RequestModel.index()
       .then((res) => {
           console.log(res.data)
          
           this.setState({
               requestList: res.data,
               isLoaded: true,
           })
       })
    }

    render() {
        return (
                    <>
            
                    <h1 style={{  textAlign : "center" }}>Request List</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>

                            <th>Product</th>
                            <th>Category</th>
                            <th>Destination</th>
                            <th>Quantity</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.isLoaded ?
                        <>{this.state.requestList.map(function (request) {      

                        return   <tr> 
                                <td >{request.name}</td>
                                <td>{request.category}</td>
                                <td>{request.destination}</td>
                                <td>{request.quantity}</td>
                                 <td  style={{  textAlign : "center" }}>
                                    <Link to={{pathname: `/request/${request._id}`}} ><Button size="sm" variant="outline-dark">Quote Now</Button></Link>
                                </td>  
                               
                               </tr>
                            
                        }, this)}</>
                        :
                        <p>Not Loaded</p>
                        }

                        </tbody>
                    </Table>
                    </>

        );
        
    }
}

export default RequestList;