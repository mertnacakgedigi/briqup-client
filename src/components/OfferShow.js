import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'

class OfferShow extends Component {
    render(props) {
        console.log(this.props.offers)
        const offerList = this.props.offers.map((offer,index) => 
            
            <tr> 
             <td>{index+1}</td>
            <td >{offer.price}</td>
            <td >{offer.destination}</td>
   
            <td>{Intl.DateTimeFormat('en-US').format(new Date(offer.createdAt))}</td> 
          
            {/* <td >{request.user.type}</td>
            
            <td>{Intl.DateTimeFormat('en-US').format(new Date(request.createdAt))}</td> */}

           </tr>
        );
        return (
            <div>   

            <Card
            style={{ width: '90%', marginTop : "10px" }} >
            <Card.Header> You have {offerList.length} Quotes  </Card.Header>
            <Card.Body>
            <Table striped bordered hover>
                    <thead>
                        <tr>

                        <th>Offer</th>
                        <th>Business Type</th>
                        <th>Location</th>
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
