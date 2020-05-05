import React, { Component } from 'react';
import {Link , NavLink, Route} from 'react-router-dom'
import RequestModel from '../models/request'
import Table from 'react-bootstrap/Table'


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
          
           this.setState({
               requestList: res.data,
               isLoaded: true,
           })
       })
    }

    render() {
        return (
                    <>

                    <h1>Request List</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>

                            <th>Product</th>
                            <th>Category</th>
                            <th>Destination</th>
                            <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.isLoaded ?
                        <>{this.state.requestList.map(function (request, index) {


                        //  <Link to={{pathname: `/requests/${this.state.requestList[index]._id}`}} >
                        return <tr>
                                <td>{request.name}</td>
                                <td>{request.category}</td>
                                <td>{request.destination}</td>
                                <td>{request.quantity}</td>
                               </tr>
                        // </Link>


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