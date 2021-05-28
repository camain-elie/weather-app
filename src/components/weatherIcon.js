import clear from '../assets/Clear.png';
import hail from '../assets/Hail.png';
import heavyCloud from '../assets/HeavyCloud.png';
import heavyRain from '../assets/HeavyRain.png';
import lightCloud from '../assets/LightCloud.png';
import lightRain from '../assets/LightRain.png';
import shower from '../assets/Shower.png';
import sleet from '../assets/Sleet.png';
import snow from '../assets/Snow.png';
import thunderstorm from '../assets/Thunderstorm.png';

const iconTab = [
    {abbreviation: 'c', image: clear},
    {abbreviation: 'h', image: hail},
    {abbreviation: 'hc', image: heavyCloud},
    {abbreviation: 'hr', image: heavyRain},
    {abbreviation: 'lc', image: lightCloud},
    {abbreviation: 'lr', image: lightRain},
    {abbreviation: 's', image: shower},
    {abbreviation: 'sl', image: sleet},
    {abbreviation: 'sn', image: snow},
    {abbreviation: 't', image: thunderstorm},
];

const WeatherIcon = (props) => {

    let image = iconTab.find(img => img.abbreviation === props.abbreviation);

    if (!image){
        image = clear;
    } else {
        image = image.image;
    }


    return (
        <div className="weather-icon" >
            <img src={image} alt="weather" ></img>
        </div>
    );
}

export default WeatherIcon;