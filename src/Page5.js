import React from "react";
import './App.css';

class Page5 extends React.Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    render(){
        return(
            <div >
                <h2>Payment Succesfull</h2>
                <div>
                <label>Plan selected: {this.props.values.dropDown}</label> 
                    <br></br>
                    <label>Mobile Number: {this.props.values.mnumber}</label>
                    <br></br>
                    <label>Address Line 01:{this.props.values.address1}</label>
                    <br></br>
                    <label>Pin Code:{this.props.values.pin}</label>
                    <br></br>
                    <label>State:{this.props.values.state1}</label>
                </div>
            </div>
        )
    }
}
export default Page5;