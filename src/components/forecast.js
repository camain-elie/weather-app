import WeatherIcon from './weatherIcon';

import './forecast.scss';

function getWeekDates () {
    let weekTab = [];
    let currentDate = new Date();
    
    for (let i = 0; i<7; i++){
        weekTab[i] = (currentDate.toUTCString()).substring(0, 11);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    weekTab[1] = 'Tomorrow';

    return weekTab;
}

const weekDates = getWeekDates();

export function toRetardUnit (celsius) {
    let fahrenheit = (celsius * (9/5) + 32);
    fahrenheit = Math.round(fahrenheit*10)/10;
    return fahrenheit;
}

export function Forecast (props) {

    return(
        <div className="forecast">
            <p className="forecast__date">{weekDates[props.date]}</p>

            <WeatherIcon abbreviation={props.abbr} />

            <div className="forecast__temp">
                <p>{props.metric ? props.high : toRetardUnit(props.high)}<span>{props.metric ? '°C' : '°F'}</span></p>
                <p className="forecast__low">{props.metric ? props.low : toRetardUnit(props.low)}<span>{props.metric ? '°C' : '°F'}</span></p>
            </div>
        </div>
    );
}

