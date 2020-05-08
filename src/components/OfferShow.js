import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'

class OfferShow extends Component {
    render(props) {
        console.log(this.props.offers)
        const offerList = this.props.offers.map((offer,index) => 
            
            <tr style={{ textAlign : 'center' }}> 
             <td>{index+1}</td>
             <td >{offer.request.name}</td>       
            <td >{offer.request.destination}</td>
            <td >{offer.request.quantity}</td>
            <td >${offer.price}</td>      
            <td>{Intl.DateTimeFormat('en-US').format(new Date(offer.createdAt))}</td> 

           </tr>
        );
        return (
            <div>   

            <Card
            style={{ width: '90%', marginTop : "10px" }} >
            <Card.Header> You have {offerList.length} Quotes  </Card.Header>
            <Card.Body>
            <Table striped bordered hover>
                    <thead style={{ textAlign : 'center' }}>
                        <tr >

                        <th>Quote</th>
                        <th>Request</th>
                        <th>Location</th>

                        <th>Quantity </th>
                        <th>Offered Price</th>
                        <th>Time Quoted </th>
                    
                        </tr>
                    </thead>
                    <tbody>
                    {offerList}

                    </tbody>
                    </Table>
                </Card.Body>
            </Card>
                        
            </div>
        );
    }
}

export default OfferShow;
