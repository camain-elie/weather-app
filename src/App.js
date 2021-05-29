import { Component } from 'react';

import Humidity from './components/humidity';
import Highlight from './components/highlight';
import Wind from './components/wind';
import WeatherIcon from './components/weatherIcon';
import { Forecast, toRetardUnit } from './components/forecast';

import './App.scss';

const getUserWoeid = async (latt, long) => {
  const response = await fetch(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?lattlong=${latt},${long}`);
  const jsonData = await response.json();
  return jsonData;
}

const getWheatherDatas = async (location) => {
  const response = await fetch(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${location}`)
  const jsonData = await response.json();
  return jsonData;
}

class App extends Component {
  constructor(props){
    super(props);

    this.handlePositionClick = this.handlePositionClick.bind(this);

    this.state={
      location: 'Orléans',
      metric: true,
      isLoading: true,
      userMessage: '',

    };
  }

  switchUnit(){
    this.setState({ metric: !this.state.metric});
  }

  setData(data){
    console.log(data);
    this.setState({
      weatherData: data.consolidated_weather,
      location: data.title,
      today: data.consolidated_weather[0],
      isLoading: false,
    })
  }

  handlePositionClick(){
    console.log('position click');
    this.useUserPosition();
  }

  useUserPosition () {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getUserWoeid(position.coords.latitude, position.coords.longitude)
          .then(woeid => getWheatherDatas(woeid[0].woeid)
            .then(data => this.setData(data)))
      },
      (error) => this.setState({ userMessage: error.message }));
  }

  handleSearchForPlacesClick(){

  }

  componentDidMount(){
    this.useUserPosition();
    /*getUserWhoid(28,238)
    .then(res => console.log(res))
    getWheatherDatas(9807)
    .then(res => console.log(res))*/
  }

  render(){

    const state = this.state;

    return(
      !state.isLoading &&
      <div className="app">
        <div className="today">
          <div className="today__buttons">
            <p className="today__search">
              Search for places
            </p>
            <div className="today__position"
              onClick={() => this.handlePositionClick()}>
              <p className="material-icons">gps_fixed</p>
            </div>
          </div>

          <div className="today__icon">
            <WeatherIcon abbreviation={state.today.weather_state_abbr} />
            <div></div>
          </div>

          <p className="today__temp">
            {state.metric ? Math.round(state.today.the_temp) : toRetardUnit(Math.round(state.today.the_temp)) }
            <span className="today__temp-unit">
              {state.metric ? '°C' : '°F'}
            </span>
          </p>
          <p className="today__weather">{state.today.weather_state_name}</p>
          <p className="today__date">Today - {(new Date()).toUTCString().substring(0, 11)}</p>
          <p className="today__location">
            <span className="today__location-icon material-icons">place</span> {state.location}</p>
        </div>

        <div className="content">
          <div className="unit-buttons">
            <p className={state.metric ? 'active' : 'inactive'}
              onClick={() => this.switchUnit()}><span>°C</span></p>
            <p className={!state.metric ? 'active' : 'inactive'}
              onClick={() => this.switchUnit()}><span>°F</span></p>
          </div>

          <div className="forecasts">
            {state.weatherData.map(
              (item, index) => {
                if(index > 0 && index < 6){
                  return <Forecast key={index} metric={state.metric}  
                    date={index} high={Math.round(item.max_temp)}
                    low={Math.round(item.min_temp)} abbr={item.weather_state_abbr} />;
              }
              return null;
            })}
          </div>

          <h2>Today's highlights</h2>
          <div className="highlights">
            

            <Highlight title="Wind status" value={state.today.wind_speed} metric={state.metric}
            unit={state.metric ? 'km/h' : 'mph'} element={<Wind direction={state.today.wind_direction_compass} />} />
            <Humidity value={state.today.humidity} />
            <Highlight title="Visibility" value={state.today.visibility} metric={state.metric}
              unit={state.metric ? 'km' : 'miles'} />
            <Highlight title="Air Pressure" value={state.today.air_pressure} unit="mb" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
