import React, { Component } from 'react';
import './Site.css';
import './App.css';
import Stat from './Stat/Stat';
import SignUp from './SignUp/SignUp';
import Hero from './Hero/Hero';
import Slide from './SlideInput';


class App extends Component {

  state = {
    hourlyRate: '$0'
  }

  hourlyRateHandler = (event) => {
    this.setState({
      hourlyRate: event.target.value
    })
  }

  timeInputHandler = (event) => {
    this.setState({
      timeInput: event.target.value
    })
  }

  frequencyInputHandler = (event) => {
    this.setState({
      frequencyInput: event.target.value
    })
  }

  

  render(){

    return (
      <div className="roiCalculator">

      {/* Hero */}
          <Hero></Hero> 
              {/*Labor Cost*/}
              <section className="labor-cost">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.42 70.71" width="30" height="30"><g><g><polygon style={{fill: '#617088'}} points="70.71 70.71 0 0 141.42 0 70.71 70.71"/></g></g></svg>
                  <div className="grid-container">
                      <div className="grid-x grid-padding-x align-center text-center">
                        <h3>Do hollow metal doors stack up to Special-Lite's premium FRP/Aluminum Hybrid Doors? Enter your info below and see for yourself!</h3>
                          <Slide data="Currency">
                              <h2>Answer Question 1</h2>
                              <h3>Do this action</h3>
                          </Slide>

                          <Slide data="">
                            <h2>Answer Question 2</h2>
                            <h3>Do that action</h3>
                          </Slide>

                          <Slide data="">
                            <h2>Answer Question 3</h2>
                            <h3>Do those actions</h3>
                          </Slide>
                      </div>
                  </div>
              </section>

              {/*Initial Investments*/}
              <section className="initial-investment">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 62"><g><g><path style={{fill: '#C75443'}} d="M1920,43s-79.53-28-361-28S1185.18,62,959.59,62,653.06,4,382,4,0,62,0,62V0H1920Z"/></g></g></svg>
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x" style={{paddingBottom: '3rem'}}>
                        <div className="cell">
                            <h2 className="section-title black">Total Cost of Hollow Metal Doors Over the Life of A Special-Lite FRP/Aluminum Hybrid Door</h2>
                            <span className="section-underline black"></span>
                        </div>
                        <div className="medium-6 cell">
                            <h4 className="text-center" style={{color: '#333'}}>Hollow Metal</h4>
                            <span className="section-underline black"></span>
                            <Stat color="black" time="94" data={this.state.hourlyRate} additions="1652">Total Product Cost</Stat>
                        </div>
                        <div className="medium-6 cell">
                            <h4 className="text-center" style={{color: '#333'}}>Special-Lite FRP/Aluminum Hybrid</h4>
                            <span className="section-underline black"></span>
                            <Stat color="black" time="14" data={this.state.hourlyRate} additions="1450">Total Product Cost</Stat>
                        </div>
                        <div className="cell" style={{marginTop: '3rem'}}>
                            <h2 className="section-title black" style={{fontWeight: '900', fontSize: '3em'}}>See The Breakdown Below</h2>
                        </div>
                    </div>
                      <div id="investment" className="grid-x grid-padding-x">
                          <div className="cell">
                              <h3 className="section-title black">Initial Investment</h3>
                              <div className="section-underline black"></div>
                          </div>
                          <div className="medium-6 cell">
                            <h4 className="text-center" style={{color: '#333'}}>Hollow Metal</h4>
                            <span className="section-underline black"></span>
                            <Stat color="black" time="0" data={this.state.hourlyRate} additions="413">Purchase Price</Stat>
                            <Stat color="black" time="4" data={this.state.hourlyRate} additions="0">Field Installation</Stat>
                            <Stat color="black" time="2" data={this.state.hourlyRate} additions="0">Painting at Time of Install</Stat>
                          </div>
                          <div className="medium-6 cell">
                            <h4 className="text-center" style={{color: '#333'}}>Special-Lite FRP/Aluminum Hybrid</h4>
                            <span className="section-underline black"></span>
                            <Stat color="black" time="0" data={this.state.hourlyRate} additions="1450">Purchase Price</Stat>
                            <Stat color="black" time="3" data={this.state.hourlyRate} additions="0">Field Installation</Stat>
                            <Stat color="black" time="0" data={this.state.hourlyRate} additions="0">Painting at Time of Install*</Stat>
                          </div>
                      </div>
                  </div>
              </section>

              {/*Yearly Maintenance*/}
              <section className="yearly-maintenance">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.42 70.71" width="30" height="30" className="top"><g><g><polygon style={{fill: '#ebebeb'}} points="70.71 70.71 0 0 141.42 0 70.71 70.71"/></g></g></svg>
                  <div className="grid-container">
                      <div className="grid-x grid-padding-x">
                          <div className="cell">
                              <h3 className="section-title">Yearly Maintenance</h3>
                              <div className="section-underline"></div>
                          </div>
                          <div className="medium-6 cell">
                            <h4 className="text-center">Hollow Metal</h4>
                            <span className="section-underline"></span>
                            <Stat time="1" data={this.state.hourlyRate} additions="0">Repair/Rehang/Adjust Door</Stat>
                            <Stat time="1" data={this.state.hourlyRate} additions="0">Repair/Adjust Exit Devices</Stat>
                            <Stat time="3" data={this.state.hourlyRate} additions="0">Repair/Adjust Closers</Stat>
                          </div>
                          <div className="medium-6 cell">
                            <h4 className="text-center">Special-Lite FRP/Aluminum Hybrid</h4>
                            <span className="section-underline"></span>
                            <Stat time="0" data={this.state.hourlyRate} additions="0">Repair/rehang/adjust door</Stat>
                            <Stat time="0.25" data={this.state.hourlyRate} additions="0">Repair/Adjust Exit Devices</Stat>
                            <Stat time="0.25" data={this.state.hourlyRate} additions="0">Repair/Adjust Closers</Stat>
                          </div>
                      </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 147" className="bottom"><path style={{fill: '#C75443'}} d="M0,111s132.53,29,414,29S817.41,12,1043,12s308.94,85,580,85S1920,0,1920,0V147H0Z"/></svg>
              </section>

              {/*Payoff Over Time*/}
              <section className="pay-off">
                  <div className="grid-container">
                      <div className="grid-x grid-padding-x">
                          <div className="cell">
                              <h3 className="section-title">The Payoff Over Time</h3>
                              <div className="section-underline"></div>
                          </div>
                          <div className="medium-6 cell">
                            <h4 className="text-center">Hollow Metal</h4>
                            <span className="section-underline"></span>
                            <Stat time="6" data={this.state.hourlyRate} additions="0">Repainting Every 3 Years</Stat>
                            <Stat time="18" data={this.state.hourlyRate} additions="1239">Door Replacements</Stat>
                            <Stat time="60" data={this.state.hourlyRate} additions="0">Total General Maintenance</Stat>
                          </div>
                          <div className="medium-6 cell">
                            <h4 className="text-center">Special-Lite FRP/Aluminum Hybrid</h4>
                            <span className="section-underline"></span>
                            <Stat time="0" data={this.state.hourlyRate} additions="0">Repainting Every 3 Years</Stat>
                            <Stat time="0" data={this.state.hourlyRate} additions="0">Door Replacements</Stat>
                            <Stat time="10" data={this.state.hourlyRate} additions="0">Total General Maintenance</Stat>
                          </div>
                      </div>
                  </div>
              </section>

              {/* Sign Up */}
              <SignUp></SignUp>
      </div>
    );
  }
  

}

export default App;
