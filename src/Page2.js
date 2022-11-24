import React from "react";
//import Slider from "./Slider";
import './App.css';
class Page2 extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    handleChange =e=>{
        console.log(e.target)
       this.props.setSliderValue({slideValue:  e.target.value});
    }
    toggleChange = e => {
        this.props.setCheckValue({initialVal: !this.props.values.initialVal});
      }
    render() {
        return (
            
            <div className="page-2">
                <p className='ph2'><b>Set your deductible amount</b></p>
                <button
                    color="primary"
                    variant="contained"
                    onClick={this.previous}
                    className="prevPage"
                >Prev</button>
               
                <div className="col-8 mx-auto">
                    <input className="slider" type="range" min="0" max="5" step="1" onChange={this.handleChange} />
                    <output id="rangevalue">{this.props.values.slideValue} Lakhs</output>
                </div >
                <div className="col-8 mx-auto">

                <input type="checkbox" id="third"  checked={this.props.values.initialVal}  onChange={this.toggleChange}/>I understand that this insurance will not work until{this.props.values.slideValue} lakhs is deducted
                </div>
                <button
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                    className="nextPage"
                    disabled={!this.props.values.initialVal}
                >Continue</button>
            </div>
        );
    }
}
export default Page2;