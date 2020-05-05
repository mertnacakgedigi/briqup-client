import React, { Component } from 'react';

class RequestList extends Component {

   
    render(props) {
       let name = this.props.requestList

       console.log(name)
       if(name[0]){
        return (
            <div>
                {/* {this.props.requestList[0].name}r */}
            </div>
        );
     }
    }
}

export default RequestList;