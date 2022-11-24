import React from "react";
import './App.css';

class Page4 extends React.Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      previous= e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        return(
            <div className="page-2">
                <h2>Review and Confirm Payment</h2>
                <button
                    color="primary"
                    variant="contained"
                    onClick={this.previous}
                    className="prevPage"
                >Prev</button>
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
                <button
              color="primary"
              variant="contained"
              onClick={this.continue}
              className="nextPage"
            >Submit</button>
            </div>
        )
    }
}
export default Page4;