import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import PreviewForm from './FormPreview';

export default class UserForm extends Component {
  state = {
    step: 1,
    dropDown:'',
    email: '',
    address1:'',
    address2:'',
    mnumber:'',
    pin:'',
    state1:'',
    first: false,
    second: false,
    third: false,
    fourth: false,
    slideValue:'',
    initialVal:false,
    errors:true
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  setValue=(input)=>{
    this.setState(input)
    if(this.state.email.trim().length>2 && this.state.mnumber.trim().length>2 && this.state.address1.trim().length>2 && this.state.address2.trim().length>2 && this.state.pin.trim().length>2 && this.state.state1.trim().length>2)
    {
      this.setState({errors: false})
    }
    
  }
  setCheckValue=(input2)=>{
    this.setState(input2)
  }
  setSliderValue=(input3)=>{
    this.setState(input3);
  }
  
 
  
  render() {
      const { step } = this.state;
      
  
      switch (step) {
        case 1:
          return (
            <div className="container">
              <div className="row">
                    <div className="col-8"><Page1 nextStep={this.nextStep} values={this.state} setValue={this.setValue} formValidation={this.formValidation}/></div>
                    <div className="col-4"><PreviewForm values={this.state}/></div>
                </div>
                 
                </div>
          );
        case 2:
          return (
            <div className="container">
              <div className="row">
                    <div className="col-8"><Page2 nextStep={this.nextStep}  prevStep={this.prevStep} values={this.state}  setSliderValue={this.setSliderValue} setCheckValue={this.setCheckValue}/> </div>
                    <div className="col-4"><PreviewForm values={this.state}/></div>
                </div>
                 
                </div>
            
          );
        case 3:
          return (
            <div className="container">
            <div className="row">
                  <div className="col-8"> <Page3 nextStep={this.nextStep} values={this.state} prevStep={this.prevStep} setCheckValue={this.setCheckValue}/> </div>
                  <div className="col-4"><PreviewForm values={this.state}/></div>
              </div>
               
              </div>
           
          );
        case 4:
            return (
              <div className='container'>
              <Page4 nextStep={this.nextStep} values={this.state}  prevStep={this.prevStep}/>
            </div>
            );
          
        case 5: return(
          <div className='container'>

            <Page5 values={this.state} />
          </div>
        );
        default:
          (console.log('This is a multi-step form built with React.'))
      }
  }
}

