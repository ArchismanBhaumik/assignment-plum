import React from "react";
import './App.css'
class PreviewForm extends React.Component{
    render(){
        return(
            <div className="previewForm">
                <h2>FORM PREVIEW</h2>
                <p>Personal email address:{this.props.values.email} </p>
                <br></br>
                <p>Mobile Number :{this.props.values.mnumber}</p> 
                <br></br>
                <p>Address Line 01 :{this.props.values.address1}</p>
                <br></br>
                <p>Address Line 02:{this.props.values.address2}</p>
                <br></br>
                <p>PIN :{this.props.values.pin}</p>
                <br></br>
                <label>State :{this.props.values.state1}</label>
            </div>
        )
    }
}
export default PreviewForm;