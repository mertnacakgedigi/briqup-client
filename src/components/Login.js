
import UserModel from '../models/user'
import React, {useState, setState} from "react";

function Login(props) {

    const [form,setUserData] = useState({
        email : "",
        password : ""
    })

    const onSubmit = e => {
       e.preventDefault();
       UserModel.login(form)
       .then((res)=> {
           props.setCurrentUser(res.data.data)
           props.history.push('/profile')
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
            <h4 className="mb-3">Login</h4>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input  onChange={updateForm} className="form-control form-control-lg" type="email" id="email" name="email" value={form.username} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={updateForm} className="form-control form-control-lg" type="password" id="password" name="password" value={form.password} />
              </div>
              <button className="btn btn-primary float-right" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  
}

export default Login