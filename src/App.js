import React, { Component } from 'react';
import './Site.css';
import './App.css';
import Stat from './Stat/Stat';
import Total from './Stat/Total';
// import SignUp from './SignUp/SignUp';
import Hero from './Hero/Hero';
import Slide from './SlideInput';
import ReplacementStat from './Stat/Replacement';

//Data Capture
const dataCaptureScript = document.createElement('script');
dataCaptureScript.src = "https://special-lite.activehosted.com/f/embed.php?id=1";
document.body.appendChild(dataCaptureScript);

class App extends Component {

  state = {
    hourlyRate: '$0',
    repairTime: '0',
    saggingDoorRepairTime: '0',
    hardwareAdjustRepairTime: '0',
    patchFrameRepairTime: '0',
    frameRemovalTime: '0',
    frameInstallTime: '0',
    replacementFrequency: '0'
  }

  hourlyRateHandler = (event) => {
    this.setState({
      hourlyRate: event.target.value
    })
  }

  timeInputHandler = (event) => {
    this.setState({
      repairTime: event.target.value
    })
  }

  saggingDoorRepairTimeHandler = (event) => {
    this.setState({
      saggingDoorRepairTime: event.target.value
    })
  }

  hardwareAdjustRepairTimeHandler = (event) => {
    this.setState({
      hardwareAdjustRepairTime: event.target.value
    })
  }

  patchFrameRepairTimeHandler = (event) => {
    this.setState({
      patchFrameRepairTime: event.target.value
    })
  }

  frameRemovalTimeHandler = (event) => {
    this.setState({
      frameRemovalTime: event.target.value
    })
  }

  frameInstallTimeHandler = (event) => {
    this.setState({
      frameInstallTime: event.target.value
    })
  }

  frequencyInputHandler = (event) => {
    if (Number(event.target.value) === 2 ){
      this.setState({
        replacementFrequency: '2'
      })
    } else if (Number(event.target.value) >= 3 ){
      this.setState({
        replacementFrequency: '1'
      })
    } else if (Number(event.target.value) > 5 ) {
        this.setState({
          replacementFrequency: '0'
        })
      } else {
        this.setState({
          replacementFrequency: '5'
        })
    }
  }

  render(){

    return (
      <div className="roiCalculator">
      {/* Data Capture
      <SignUp></SignUp> */}

      {/* Hero */}
      <Hero></Hero>

      {/* User Inputs */}
      <section className="labor-cost">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.42 70.71" width="30" height="30"><g><g><polygon style={{fill: '#617088'}} points="70.71 70.71 0 0 141.42 0 70.71 70.71"/></g></g></svg>
          <div className="grid-container">
              <div className="grid-x grid-padding-x align-center text-center">
                <h3>Do hollow metal doors stack up to Special-Lite's premium FRP/Aluminum Hybrid Doors? Just answer a few questions and see for yourself!</h3>
                
                {/* Hourly Rate */}
                <Slide data="Currency" change={this.hourlyRateHandler}>
                  <h2>What is your hourly cost of labor?</h2>
                  <h3>Enter your cost on the line below</h3>
                </Slide>

                {/* Sagging Door Repair Time */}
                <Slide data="" change={this.saggingDoorRepairTimeHandler}>
                  <h2>How much time each year do you spend repairing sagging doors?</h2>
                  <h3>Enter your time in hours on the line below</h3>
                </Slide>

                {/* Adjust Hardware Time */}
                <Slide data="" change={this.hardwareAdjustRepairTimeHandler}>
                  <h2>How much time do you spend adjusting door hardware each year?</h2>
                  <h3>Enter your answer in hours on the line below</h3>
                </Slide>
                
                {/* Patch Frame Time */}
                <Slide data="" change={this.patchFrameRepairTimeHandler}>
                  <h2>How much time do you spend repairing and patching door frames each year?</h2>
                  <h3>Enter your answer in hours on the line below</h3>
                </Slide>

                {/* Frame Removal Time */}
                <Slide data="" change={this.frameRemovalTimeHandler}>
                  <h2>How long does it take to remove your existing Hollow Metal door and frame?</h2>
                  <h3>Enter your answer in hours on the line below</h3>
                </Slide>

                {/* Frame Installation Time */}
                <Slide data="" change={this.frameInstallTimeHandler}>
                  <h2>How much time does it take your team to reinstall a door and frame?</h2>
                  <h3>Enter your answer in hours on the line below</h3>
                </Slide>

                {/* Replacement Frequency */}
                <Slide data="" change={this.frequencyInputHandler}>
                  <h2>How often do you replace a hollow metal door?</h2>
                  <h3>Enter your answer in years on the line below</h3>
                </Slide>

              </div>
          </div>
      </section>

      {/*Initial Investments Section*/}
      <section className="initial-investment">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 62"><g><g><path style={{fill: '#C75443'}} d="M1920,43s-79.53-28-361-28S1185.18,62,959.59,62,653.06,4,382,4,0,62,0,62V0H1920Z"/></g></g></svg>
        <div className="grid-container">
          {/*Total Investment*/}
          <div className="grid-x grid-padding-x" style={{paddingBottom: '3rem'}}>
              <div className="cell">
                  <h2 className="section-title black">Total Cost of a Hollow Metal Door and Frame Over the Life of A Special-Lite FRP/Aluminum Hybrid Door and Frame</h2>
                  <span className="section-underline black"></span>
              </div>
              <div className="medium-6 cell">
                  <h4 className="text-center" style={{color: '#333'}}>Hollow Metal</h4>
                  <span className="section-underline black"></span>
                  <Total color="black" id="hm_grandTotal" type="grandTotal" time={this.state.repairTime} data={this.state.hourlyRate} removalTime={this.state.frameRemovalTime} installTime={this.state.frameInstallTime} frequency={this.state.replacementFrequency} purchasePrice="593" saggingDoor={this.state.saggingDoorRepairTime} adjustHardware={this.state.hardwareAdjustRepairTime} frameRepair={this.state.patchFrameRepairTime}>
                    Total Product Cost
                  </Total>
              </div>
              <div className="medium-6 cell">
                  <h4 className="text-center" style={{color: '#333'}}>Special-Lite FRP/Aluminum Hybrid</h4>
                  <span className="section-underline black"></span>
                  <Total
                  color="black"
                  id="sl_grandTotal"
                  type="grandTotal"
                  time={this.state.repairTime}
                  data={this.state.hourlyRate}
                  removalTime="0"
                  installTime="3"
                  frequency="0"
                  purchasePrice="2171"
                  saggingDoor="0"
                  adjustHardware="0.25"
                  frameRepair="0"
                  >Total Product Cost</Total>
              </div>
          </div>
          
          {/*Initial Investment Data*/}
          <div id="investment" className="grid-x grid-padding-x">
              <div className="cell">
                  <h3 className="section-title black">Initial Investment</h3>
                  <div className="section-underline black"></div>
              </div>
              <div className="medium-6 cell">
                <h4 className="text-center" style={{color: '#333'}}>Hollow Metal</h4>
                <span className="section-underline black"></span>
                <Stat id="hm_purchasePrice" color="black" time="0"  data={this.state.hourlyRate} additions={413 + 180}>Purchase Price</Stat>
                <Stat id="hm_fieldInstallations" color="black" time={this.state.frameInstallTime}  data={this.state.hourlyRate} additions="0">Field Installation</Stat>
                <Stat id="hm_installPaint" color="black" time="2"  data={this.state.hourlyRate} additions="0">Painting at Time of Install</Stat>
              </div>
              <div className="medium-6 cell">
                <h4 className="text-center" style={{color: '#333'}}>Special-Lite FRP/Aluminum Hybrid</h4>
                <span className="section-underline black"></span>
                <Stat id="sl_purchasePrice" color="black" time="0"  data={this.state.hourlyRate} additions={1450 + 721}>Purchase Price</Stat>
                <Stat id="sl_fieldInstallations" color="black" time="3"  data={this.state.hourlyRate} additions="0">Field Installation</Stat>
                <Stat id="sl_installPaint" color="black" time="0"  data={this.state.hourlyRate} additions="0">Painting at Time of Install*</Stat>
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
                        <span className="section-underline"></span>
                    </div>
                    <div className="medium-6 cell">
                      <h4 className="text-center">Hollow Metal</h4>
                      <span className="section-underline"></span>
                      <Stat id="hm_saggingDoors" time={this.state.saggingDoorRepairTime} data={this.state.hourlyRate} additions="0">Repair Sagging Doors</Stat>
                      <Stat id="hm_adjustHardware" time={this.state.hardwareAdjustRepairTime} data={this.state.hourlyRate} additions="0">Repair/Adjust Hardware</Stat>
                      <Stat id="hm_repairFrames" time={this.state.patchFrameRepairTime} data={this.state.hourlyRate} additions="0">Repair Frames</Stat>
                    </div>
                    <div className="medium-6 cell">
                      <h4 className="text-center">Special-Lite FRP/Aluminum Hybrid</h4>
                      <span className="section-underline"></span>
                      <Stat id="sl_saggingDoors" time="0" data={this.state.hourlyRate} additions="0">Repair Sagging Doors</Stat>
                      <Stat id="sl_adjustHardware" time="0.25" data={this.state.hourlyRate} additions="0">Repair/Adjust Hardware</Stat>
                      <Stat id="sl_repairFrames" time="0" data={this.state.hourlyRate} additions="0">Repair Frames</Stat>
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
                      <Stat id="hm_repaint" time="4" data={this.state.hourlyRate} additions="0">Repainting Every 2 Years</Stat>
                      <ReplacementStat id="hm_doorReplacement" removalTime={this.state.frameRemovalTime} installTime={this.state.frameInstallTime} frequency={this.state.replacementFrequency} data={this.state.hourlyRate} additions="593">Door Replacements</ReplacementStat>
                      <Total
                      id="hm_totalMaintenance"
                      type="payoff"
                      data={this.state.hourlyRate}
                      removalTime={this.state.frameRemovalTime}
                      installTime={this.state.frameInstallTime}
                      frequency={this.state.replacementFrequency}
                      purchasePrice="593">Total General Maintenance</Total>
                    </div>
                    <div className="medium-6 cell">
                      <h4 className="text-center">Special-Lite FRP/Aluminum Hybrid</h4>
                      <span className="section-underline"></span>
                      <Stat id="sl_repaint" time="0" data={this.state.hourlyRate} additions="0">Repainting Every 2 Years</Stat>
                      <Stat id="sl_doorReplacement" time="0" data={this.state.hourlyRate} additions="0">Door Replacements</Stat>
                      <Total
                      id="sl_totalMaintenance"
                      type="payoff"
                      data={this.state.hourlyRate}
                      removalTime="0"
                      installTime="0"
                      frequency="0"
                      purchasePrice="0"
                      >Total General Maintenance</Total>
                    </div>
                </div>
            </div>
        </section>

        
              
      </div>
    );
  }
  

}

export default App;
