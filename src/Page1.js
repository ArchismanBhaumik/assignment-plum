import React from "react";

import './App.css';

class Page1 extends React.Component {
  constructor() {
    super()
    this.state = { open: true };
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  handleChange = (event) => {
    this.props.setValue({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  handleError = (e) => {
    this.props.formValidation();
  }
  accordianToggle = () => {
    const data = document.getElementById("panelsStayOpen-collapseOne");

    if (this.state.open === true) {
      this.setState({ open: false });
      data.style.display = "none";
    }
    if (this.state.open === false) {
      this.setState({ open: true });
      data.style.display = "block";
    }
  }
  render() {
    return (
      <div>
        <h2>Choose your plan</h2>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" onClick={this.accordianToggle} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                <p>Hello Anisha,Increase your and your family's insurance cover by <b>20 lakhs</b> using super top up</p>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show panelsStayOpen-collapseOne" aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                <div className='container-2'>
                  <form onSubmit={this.handleSubmit}>
                    <h4 className='header-4'>Plan Type</h4>
                    <label>
                      Your Plan Type:
                    </label>

                    <select value={this.props.values.dropDown} name="dropDown" onChange={this.handleChange}>
                      <option value="Self ">Self :Rs600</option>
                      <option value="Family">Family :0</option>
                      <option value="Self + family">Self + Family :Rs600</option>
                      <option value="Spouse"> Spouse :Rs600</option>
                      <option value="Self+Spouse  "> Self+Spouse :Rs1200</option>
                    </select>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
          </div>


          <br></br>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <label>Basic Details </label>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">

                <form onSubmit={this.handleSubmit}>

                  <div className="row align-items-start mb-3">
                    <br></br>
                    <label className="col">
                      <div>
                        Email Address:
                      </div>
                      <input name='email' type="text" value={this.props.values.email} onChange={this.handleChange} placeholder="Enter" />
                    </label>

                    <label className="col">
                      <div>
                        Mobile Number:
                      </div>

                      <input name="mnumber" type="text" value={this.props.values.mnumber} onChange={this.handleChange} placeholder="Enter" />
                    </label>
                  </div>
                  <div className="row align-items-center mb-3">
                    <br></br>
                    <label className="col">
                      <div>
                        Address line 01:
                      </div>

                      <input name="address1" type="text" value={this.props.values.address1} onChange={this.handleChange} placeholder="Enter" />
                    </label>
                    <label className="col">
                      <div>
                        Address line 02:
                      </div>

                      <input name="address2" type="text" value={this.props.values.address2} onChange={this.handleChange} placeholder="Enter" />
                    </label>
                  </div>
                  <div className="row align-items-end mb-3 ">
                    <br></br>
                    <label className="col">
                      <div>
                      PIN CODE:
                      </div>
                      
                      <input name="pin" type="text" value={this.props.values.pin} onChange={this.handleChange} placeholder="Enter" />
                    </label>
                    <label className="col">
                      <div>
                      State:
                      </div>
                     
                      <input name="state1" type="text" value={this.props.values.state1} onChange={this.handleChange} placeholder="Enter" />
                    </label>
                    <br></br>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button
          color="primary"
          variant="contained"
          onClick={this.continue}
          className="nextPage"
          disabled={this.props.values.errors}

        >Continue</button>
      </div>
    );
  }

}
export default Page1;