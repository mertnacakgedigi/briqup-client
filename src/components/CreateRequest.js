import React, {useState, setState} from "react";
import RequestModel from '../models/request'
import Button from 'react-bootstrap/Button'

function CreateRequest(props) {
    const [form,setUserData] = useState({
        name : "",
        category : "",
        quantity : "",
        detail : "",
        destination : "",
        user : props.currentUser
        
    })

    const onSubmit = e => {
       e.preventDefault();
    //    setUserData({
    //        user : props.currentUser
    //    })
       RequestModel.create(form)
       .then((res)=> {
          
           props.history.push('/')
       })
       .catch((err)=>{
           console.log(err)
       })
    }

    const updateForm = e => {
        setUserData({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h4 className="mb-3">Create Your Request</h4>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input  onChange={updateForm} className="form-control form-control-lg" type="name" id="name" name="name" value={form.name} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Category</label>
                <input onChange={updateForm} className="form-control form-control-lg" type="category" id="category" name="category" value={form.category} />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input onChange={updateForm} className="form-control form-control-lg" type="quantity" id="quantity" name="quantity" value={form.quantity} />
              </div>
              
              <div className="form-group">
                <label htmlFor="detail">Detail</label>
                <input onChange={updateForm} className="form-control form-control-lg" type="detail" id="detail" name="detail" value={form.detail} />
              </div>
              <div className="form-group">
                <label htmlFor="detail">Destination</label>
                <input onChange={updateForm} className="form-control form-control-lg" type="destination" id="destination" name="destination" value={form.destination} />
              </div>
              <Button size="sm" variant="outline-dark" type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default CreateRequest;