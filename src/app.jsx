import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      changeDue: '',
      twenties: '',
      tens: '',
      fives: '',
      ones: '',
      quarters: '',
      dimes: '',
      nickels: '',
      pennies: '',
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  calculate({amountDue, amountReceived}) {
    var changeDue = (amountReceived - amountDue).toFixed(2);
    var twenties = Math.trunc(changeDue / 20);
    changeDue -= twenties * 20;
    var tens = Math.trunc(changeDue / 10);
    changeDue -= tens * 10;
    var fives = Math.trunc(changeDue / 5);
    changeDue -= fives * 5;
    var ones = Math.trunc(changeDue);
    changeDue -= ones;
    var quarters = Math.trunc(changeDue / 0.25);
    changeDue -= quarters * 0.25;
    var dimes = Math.trunc(changeDue / 0.10);
    changeDue -= dimes * 0.10;
    var nickels = Math.trunc(changeDue / 0.05);
    changeDue -= nickels * 0.05;
    var pennies = Math.round(changeDue * 100);
    this.setState({
      changeDue: (amountReceived - amountDue).toFixed(2),
      twenties,
      tens,
      fives,
      ones,
      quarters,
      dimes,
      nickels,
      pennies,
    })
  }

  render() {
    return(
    <div className='container'>
      <h1>Change Calculator</h1>
      <hr></hr>
      <div className='row'>
        <div className='col-sm-4'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Enter Information</div>
            <div className='panel-body'>
              <div>
                <label>How much is due?</label>
                <input className='input-sm col-sm-12' type='number' step='0.01' name='amountDue'
                  value={this.state.amountDue} onChange={this.handleChange.bind(this)}/>
              </div>
              <div>
                <label>How much was received?</label>
                <input className='input-sm col-sm-12' type='number' step='0.01' name='amountReceived'
                  value={this.state.amountReceived} onChange={this.handleChange.bind(this)}/>
              </div>
            </div>
            <div className='panel-footer text-center'>
              <button className='btn btn-block btn-primary'
                onClick={() => this.calculate.bind(this)(this.state)}>Calculate</button>
            </div>
          </div>
        </div>
        <div className='col-sm-8 well text-center'>
          <div className='alert alert-success' role='alert'>The total change due is ${this.state.changeDue}</div>
          <div className='row'>
            <div className='col-sm-3'>
              <div className='well square'>                
                <label>Twenties</label>
                <p className='change'>{this.state.twenties}</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='well square'>
                <label>Tens</label>
                <p className='change'>{this.state.tens}</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='well square'>
                <label>Fives</label>
                <p className='change'>{this.state.fives}</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='well square'>
                <label>Ones</label>
                <p className='change'>{this.state.ones}</p>                
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='well square'>
                <label>Quarters</label>
                <p className='change'>{this.state.quarters}</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='well square'>
                <label>Dimes</label>
                <p className='change'>{this.state.dimes}</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='well square'>
                <label>Nickels</label>
                <p className='change'>{this.state.nickels}</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='well square'>
                <label>Pennies</label>
                <p className='change'>{this.state.pennies}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default App;