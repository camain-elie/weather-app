import './highlight.scss';

function toKilometer(miles){
    return (miles * 1.60934);
}

function roundToDecimal(num){
    return(Math.round(num*10)/10);
}

function Highlight (props) {

    let value = props.value;

    if(props.metric){
        value = toKilometer(value);
    }

    value = roundToDecimal(value);

    return(
        <div className="highlight">
            <h3>{props.title}</h3>

            <p className="highlight__value">
                {value}<span className="highlight__value-unit">{props.unit}</span>
            </p>

            {props.element}
        </div>
    );
}

export default Highlight;