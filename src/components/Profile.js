import React from 'react';
import ProfileModel from '../models/profile'
import {useState, setState,useEffect} from "react";

function Profile(props) {


  const [data, setData] = useState("");

  useEffect(() => {
   async function fetchdata(data) {
     try {
        let res = await ProfileModel.getProfile(props.currentUser)
        // console.log(res.data.requests)
        setData(res.data)
        // console.log(data.requests)
        // console.log(res.data.requests)
    
     }
     catch (err) {
      console.log(err)
     }
   }

   
   fetchdata()
 
  }, []);

  console.log("First Console",data)
  
  return (
    
    <div>
        
        <p>Company: {data.company}</p>
        <p>Email: {data.email}</p>
    
        {/* {request} */}
       {data.requests ? (<p>{data.requests[0].name}</p>):(<p> no request </p>)}
        

    </div>
);
}

export default Profile;