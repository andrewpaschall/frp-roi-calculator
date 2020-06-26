import React, { Component } from 'react';
import './Site.css';
import './App.css';
import Stat from './Stat/Stat';
import CurrencyInput from './CurrencyInput';


class App extends Component {

  state = {
    hourlyRate: '$0'
  }

  hourlyRateHandler = (event) => {
    this.setState({
      hourlyRate: event.target.value
    })
  }

  

  render(){

    return (
      <div className="roiCalculator">

      {/* Hero */}
          <header className="hero-section" style={{background: '#617088', color: '#fefefe', paddingTop: '2rem', paddingBottom: '4rem'}}>
              <div className="grid-container">
                  <div className="grid-x align-center" style={{padding: '.5em'}}>
                    <div className="medium-3 cell" style={{marginBottom: '2rem'}}>
                      <a href="https://special-lite.com?utm_campaign=roi_calculator" title="special-lite.com">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.02 94.56">
                          <defs>
                            <clipPath id="clip-path">
                              <path className="cls-1" d="M43.59,1.53,1.53,43.59a5.19,5.19,0,0,0,0,7.36L43.59,93A5.22,5.22,0,0,0,51,93L93,51a5.22,5.22,0,0,0,0-7.37L51,1.53a5.2,5.2,0,0,0-7.37,0"/>
                            </clipPath>
                          </defs>
                          <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                              <path className="cls-2" d="M51,1.53,93,43.6A5.22,5.22,0,0,1,93,51L51,93a5.22,5.22,0,0,1-7.37,0L1.53,51a5.19,5.19,0,0,1,0-7.36L43.59,1.53a5.2,5.2,0,0,1,7.37,0"/>
                              <g className="cls-3">
                                <path className="cls-4" d="M82.86,79.71H55.24a6.07,6.07,0,0,1-6.07-6.07V31.18H61.32V67.56H82.86ZM39.33,67.17H4V55H33.26V21.56a6.07,6.07,0,0,1,6.07-6.08H61.51V27.63H45.4V61.1A6.07,6.07,0,0,1,39.33,67.17Z"/>
                                <path className="cls-2" d="M82.86,74.12H55.24a.49.49,0,0,1-.48-.48V31.18h1v42H82.86ZM39.33,61.58H4v-1H38.85V21.56a.48.48,0,0,1,.48-.49H61.51v1H39.81V61.1A.47.47,0,0,1,39.33,61.58Z"/>
                              </g>
                              <path className="cls-4" d="M391,35.35a6.5,6.5,0,1,1,6.5,6.49,6.47,6.47,0,0,1-6.5-6.49m11.44,0a4.95,4.95,0,1,0-4.94,4.95,4.83,4.83,0,0,0,4.94-4.95m-1.83,3.29H399l-1.51-2.85h-1v2.85h-1.52V31.89h3.28c1.56,0,2.63.28,2.63,2.06,0,1.25-.64,1.76-1.84,1.84Zm-2.39-3.87c.75,0,1.18-.16,1.18-1,0-.69-.87-.69-1.53-.69h-1.45v1.7Z"/>
                              <path className="cls-4" d="M101.84,52.15V63.28h5.67V60.81a8.85,8.85,0,0,0,7.2,3.2,11.48,11.48,0,0,0,11.87-11.76,9.92,9.92,0,0,0-3.73-7.88c-2.42-1.83-5.15-2.62-8-3.41s-6.14-1.63-6.14-5.3c0-2.95,2.31-4.68,5.09-4.68a4.8,4.8,0,0,1,4.88,4.89h6.41V25.79h-5.46v2.09A8.18,8.18,0,0,0,112.92,25c-6,0-11.34,4.62-11.34,10.82a9.85,9.85,0,0,0,4.1,8.18A20.84,20.84,0,0,0,113,47.21c2.88.84,6.4,1.78,6.4,5.51,0,3.21-2.41,5.15-5.51,5.15a5.44,5.44,0,0,1-5.56-5.72Z"/>
                              <path className="cls-5" d="M131.15,67.58h-3.57v6h13.65v-6h-3.62v-8.2a11.77,11.77,0,0,0,9.5,4.36c7.77,0,14-6.67,14-14.33A14.37,14.37,0,0,0,146.79,35a10.44,10.44,0,0,0-9.18,4.72V35.28h-10v6h3.57ZM146,57.81a8.48,8.48,0,1,1,8.45-8.4,8.45,8.45,0,0,1-8.45,8.4"/>
                              <path className="cls-5" d="M184.23,55.08a7.82,7.82,0,0,1-6.78,3.36,8.66,8.66,0,0,1-8.4-6.72h22.69l.21-2.26A14.67,14.67,0,0,0,188,39a15,15,0,0,0-10.51-4.52c-8.34,0-14.59,6.67-14.59,15a14.57,14.57,0,0,0,14.75,14.64,14.37,14.37,0,0,0,13.23-9ZM169,46.78a8.69,8.69,0,0,1,8.19-6.61A9,9,0,0,1,186,46.78Z"/>
                              <path className="cls-4" d="M215.45,53.87a7.48,7.48,0,0,1-6.72,3.89,8.39,8.39,0,0,1-8.46-8.46,8.29,8.29,0,0,1,8.3-8.5,7.94,7.94,0,0,1,4,1.05,9.46,9.46,0,0,1,3,2.78h6V35.28H216V38a10.75,10.75,0,0,0-8-3.52c-8,0-14.13,7.09-14.13,14.86a14.72,14.72,0,0,0,28.73,4.57Z"/>
                              <path className="cls-5" d="M233.62,35.28h-10v6h3.63V57.34h-3.68v6h13.7v-6h-3.62Zm0-9.45h-6.4v6.78h6.4Z"/>
                              <path className="cls-5" d="M260.72,63.32h10v-6h-3.51V41.27h3.51v-6h-10v4A10.07,10.07,0,0,0,252,34.55,14.82,14.82,0,0,0,237.3,49.46a14.52,14.52,0,0,0,14.39,14.59,10.35,10.35,0,0,0,9-4.51Zm-8.45-5.51a8.51,8.51,0,1,1,8.56-8.66,8.55,8.55,0,0,1-8.56,8.66"/>
                              <polygon className="cls-4" points="282.98 25.83 272.95 25.83 272.95 31.82 276.58 31.82 276.58 57.34 272.69 57.34 272.69 63.32 286.61 63.32 286.61 57.34 282.98 57.34 282.98 25.83"/>
                              <rect className="cls-4" x="288.57" y="46.36" width="13.44" height="6.35"/>
                              <polygon className="cls-4" points="303.94 63.32 331.3 63.32 331.3 51.98 324.16 51.98 324.16 56.92 315.18 56.92 315.18 31.82 319.22 31.82 319.22 25.83 303.94 25.83 303.94 31.82 308.04 31.82 308.04 57.34 303.94 57.34 303.94 63.32"/>
                              <path className="cls-5" d="M343.25,35.28h-10v6h3.62V57.34h-3.67v6h13.7v-6h-3.62Zm0-9.45h-6.41v6.78h6.41Z"/>
                              <polygon className="cls-4" points="355.12 41.27 359.91 41.27 359.91 35.28 355.12 35.28 355.12 25.83 348.72 25.83 348.72 35.28 345.18 35.28 345.18 41.27 348.72 41.27 348.72 63.32 359.91 63.32 359.91 57.34 355.12 57.34 355.12 41.27"/>
                              <path className="cls-5" d="M382.25,55.08a7.81,7.81,0,0,1-6.78,3.36,8.66,8.66,0,0,1-8.4-6.72h22.69l.21-2.26A14.67,14.67,0,0,0,386,39a15,15,0,0,0-10.51-4.52c-8.35,0-14.59,6.67-14.59,15a14.57,14.57,0,0,0,14.75,14.64,14.39,14.39,0,0,0,13.24-9ZM367,46.78a8.69,8.69,0,0,1,8.19-6.61A9,9,0,0,1,384,46.78Z"/>
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="grid-x align-bottom">
                      <div className="medium-6 cell">
                          <h1>Cost of FRP vs. Hollow Metal</h1>
                      </div>
                      <div className="medium-6 cell">
                          <img src="https://special-lite.com/wp-content/uploads/2020/01/boxing-ring.svg" alt=""/>
                      </div>
                  </div>
              </div>
          </header>  
              {/*Labor Cost*/}
              <section className="labor-cost">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.42 70.71" width="30" height="30"><g><g><polygon style={{fill: '#617088'}} points="70.71 70.71 0 0 141.42 0 70.71 70.71"/></g></g></svg>
                  <div className="grid-container">
                      <div className="grid-x grid-padding-x align-center text-center">
                          <div className="cell">
                              <h3>Do hollow metal doors stack up to Special-Lite's premium FRP/Aluminum Hybrid Doors? Enter your info below and see for yourself!</h3>
                              <h2>What is Your Cost of Labor?</h2>
                              <h3>Please enter your hourly labor cost on the line below</h3>
                          </div>
                          <div className="medium-4 cell">
                            <CurrencyInput change={this.hourlyRateHandler} />
                          </div>
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
      </div>
    );
  }
  

}

export default App;
