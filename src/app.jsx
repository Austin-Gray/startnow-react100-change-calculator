import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
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
                <input className='input-sm col-sm-12'/>
              </div>
              <div>
                <label>How much was received?</label>
                <input className='input-sm col-sm-12'/>
              </div>
            </div>
            <div className='panel-footer text-center'>
              <button className='btn btn-block btn-primary'>Calculate</button>
            </div>
          </div>
        </div>
        <div className='col-sm-8 well text-center'>
          <p>Change due will be displayed here.</p>
          <div className='row'>
            <div className='col-sm-3'>
              <div className='well square'>                
                <label>Twenties</label>
                <p>0</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='well square'>
                <label>Tens</label>
                <p>0</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='well square'>
                <label>Fives</label>
                <p>0</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='well square'>
                <label>Ones</label>
                <p>0</p>                
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='well square'>
                <label>Quarters</label>
                <p>0</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='well square'>
                <label>Dimes</label>
                <p>0</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='well square'>
                <label>Nickels</label>
                <p>0</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='well square'>
                <label>Pennies</label>
                <p>0</p>
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
