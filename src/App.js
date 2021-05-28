import { Component } from 'react';

import Humidity from './components/humidity';
import Highlight from './components/highlight';
import Wind from './components/wind';
import WeatherIcon from './components/weatherIcon';
import { Forecast, toRetardUnit } from './components/forecast';

import './App.scss';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      location: 'Paris',
      metric: true,
    }
  }

  switchUnit(){
    this.setState({ metric: !this.state.metric});
  }



  render(){

    const state = this.state;

    return(
      <div className="app">
        <div className="today">
          <div className="today__buttons">
            <p className="today__search">
              Search for places
            </p>
            <div className="today__position">
              <p className="material-icons">gps_fixed</p>
            </div>
          </div>

          <div className="today__icon">
            <WeatherIcon abbreviation="s" />
            <div></div>
          </div>

          <p className="today__temp">{state.metric ? '15' : toRetardUnit(15) }<span className="today__temp-unit">{state.metric ? '°C' : '°F'}</span></p>

          <p className="today__weather">Shower</p>

          <p className="today__date">Today - {(new Date()).toUTCString().substring(0, 11)}</p>

          <p className="today__location"><span className="today__location-icon material-icons">place</span> {state.location}</p>
        </div>

        <div className="content">
          <div className="unit-buttons">
            <p className={state.metric ? 'active' : 'inactive'}
              onClick={() => this.switchUnit()}><span>°C</span></p>
            <p className={!state.metric ? 'active' : 'inactive'}
              onClick={() => this.switchUnit()}><span>°F</span></p>
          </div>

          <div className="forecasts">
            <Forecast metric={state.metric} date={1} high={6} low={1} abbr='hr' />
            <Forecast metric={state.metric} date={2} high={11} low={6} abbr='lc' />
            <Forecast metric={state.metric} date={3} high={18} low={12} />
            <Forecast metric={state.metric} date={4} high={21} low={11} />
            <Forecast metric={state.metric} date={5} high={20} low={12} abbr='s' />
          </div>

          <h2>Today's highlights</h2>
          <div className="highlights">
            

            <Highlight title="Wind status" value={7} metric={state.metric}
            unit={state.metric ? 'km/h' : 'mph'} element={<Wind direction="WSW" />} />
            <Humidity value={82} />
            <Highlight title="Visibility" value={7} metric={state.metric}
              unit={state.metric ? 'km' : 'miles'} />
            <Highlight title="Air Pressure" value={998} unit="mb" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
