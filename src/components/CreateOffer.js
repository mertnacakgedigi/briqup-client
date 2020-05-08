import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import OfferModel from '../models/offer'

class CreateOffer extends Component {

    state = {
        price : null,
        user : this.props.currentUser,
        eta : null,
        destination : null,
        detail : null,
        request : this.props.match.params.id
    }

    updateForm = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        })
      }

    handleSubmit = (event) => {
        event.preventDefault()
        OfferModel.create(this.state,this.props.match.params.id)
          .then((res) => {
            console.log(res)
            this.props.history.push(`/request/${this.props.match.params.id}`)
          })
          .catch((err) => console.log(err))
      }







    render() {
        console.log(this.props.match.params.id)
        return (
            <div className="container mt-4">
              <div className="row">
                <div className="col-md-4 offset-md-4">
                  <h4 className="mb-3">Create Your Offer</h4>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Price</label>
                      <input  onChange={this.updateForm} className="form-control form-control-lg" type="name" id="name" name="price" value={this.state.price} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">ETA</label>
                      <input onChange={this.updateForm} className="form-control form-control-lg" type="category" id="category" name="eta" value={this.state.eta} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Destination">Destination</label>
                      <input onChange={this.updateForm} className="form-control form-control-lg" type="category" id="category" name="destination" value={this.state.destination} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Destination">Detail</label>
                      <input onChange={this.updateForm} className="form-control form-control-lg" type="text"  name="detail" value={this.state.detail} />
                    </div>


                    <Button size="sm" variant="outline-dark" type="submit">Submit</Button>
                  </form>
                </div>
              </div>
            </div>
          )
    }
 
}

export default CreateOffer;