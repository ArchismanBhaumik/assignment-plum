import React from "react";
import './App.css';
class Page3 extends React.Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      previous= e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    toggleChange = e => {
        this.props.setCheckValue({[e.target.name]: !this.props.values[e.target.name]});
      }
    render(){
        return(
            <div >
                <h1>Declaration</h1>
                <button
                    color="primary"
                    variant="contained"
                    onClick={this.previous}
                    className="prevPage"
                >Prev</button>
                <div className="declarations">
                <input type="checkbox" id="first" name="first"  checked={this.props.values.first} onChange={this.toggleChange} />I hereby declare that none of the members are proposed consumers of Alcohol,Tobacco,Gutkha or any hallucinogenic drugs.
                <br></br>
                <input type="checkbox" id="second" name="second"  checked={this.props.values.second} onChange={this.toggleChange} />I hereby declare all members are in good health and do not bear any illnesses.
                <br></br>
                <input type="checkbox" id="third" name="third"  checked={this.props.values.third} onChange={this.toggleChange} />I have understood that there is a 30 day waiting period for all diseases and 2 years for named illnesses.
                <br></br>
                <input type="checkbox" id="fourth" name="fourth"  checked={this.props.values.fourth} onChange={this.toggleChange} />I undertstand that this policy doesn't cover pre existing illnesses.
                </div>
                <button
              color="primary"
              variant="contained"
              onClick={this.continue}
              className="nextPage"
              disabled={!this.props.values.fourth || !this.props.values.first || !this.props.values.second || !this.props.values.third }
            >Continue</button>
            </div>
            
        );
    }
}
export default Page3;