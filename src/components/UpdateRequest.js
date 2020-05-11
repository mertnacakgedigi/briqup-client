import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import RequestModel from '../models/request'


class UpdateRequest extends Component {
    state = {
        request : null,
        name : null,
        category : null,
        quantity :  null,
        detail : null,
        destination : null,
        user :  this.props.currentUser,
        requestId : null,
    }

    componentDidMount(){
      const requestId = this.props.match.params
      this.setState({requestId})


      RequestModel.single(requestId.id)
          .then((request)=> this.setState({request : request.data, name : request.data.name, category : request.data.category,quantity : request.data.quantity, detail :request.data.detail, destination: request.data.destination}))
          .catch((err)=> console.log(err))  
    }

    updateForm = e => {
      this.setState({
          [e.target.name] : e.target.value
      })
    }

    onSubmit = e => { 
      e.preventDefault();
      RequestModel.update(this.state,this.state.requestId.id)
        .then((res)=> {this.props.history.push(`/profile/${this.state.user}`)})
        .catch((err)=> console.log(err))

    }




    render() {
        return (
          <div className="container mt-4">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <h4 className="mb-3">Update Your Request</h4>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Product Name</label>
                  <input  onChange={this.updateForm} className="form-control form-control-lg" type="name" id="name" name="name" value={this.state.name} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Category</label>
                  <input onChange={this.updateForm} className="form-control form-control-lg" type="category" id="category" name="category" value={this.state.category} />
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <input onChange={this.updateForm} className="form-control form-control-lg" type="quantity" id="quantity" name="quantity" value={this.state.quantity} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="detail">Detail</label>
                  <input onChange={this.updateForm} className="form-control form-control-lg" type="detail" id="detail" name="detail" value={this.state.detail} />
                </div>
                <div className="form-group">
                  <label htmlFor="detail">Destination</label>
                  <input onChange={this.updateForm} className="form-control form-control-lg" type="destination" id="destination" name="destination" value={this.state.destination} />
                </div>
                <Button size="sm" variant="outline-dark" type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </div>
        )
    }
}

export default UpdateRequest;