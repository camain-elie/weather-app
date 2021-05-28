import './wind.scss';

const directionAngle = [
    {direction: 'N', angle: '-45deg'}, {direction: 'NNE', angle: '-22.5deg'},
    {direction: 'NE', angle: '0deg'}, {direction: 'ENE', angle: '22.5deg'},
    {direction: 'E', angle: '45deg'}, {direction: 'ESE', angle: '67.5deg'},
    {direction: 'SE', angle: '90deg'}, {direction: 'SSE', angle: '112.5deg'},
    {direction: 'S', angle: '135deg'}, {direction: 'SSW', angle: '157.5deg'},
    {direction: 'SW', angle: '180deg'}, {direction: 'WSW', angle: '-157.5deg'},
    {direction: 'W', angle: '-135deg'}, {direction: 'WNW', angle: '-112.5deg'},
    {direction: 'NW', angle: '-90deg'}, {direction: 'NNW', angle: '-67.5deg'}
];

function findAngle(direction){
    const pair = directionAngle.find( item => item.direction === direction );
    return( pair.angle );
}

function Wind (props) {
    return(
        <div className="direction">
            <div className="direction__sign" 
                style={ { transform: `rotate(${findAngle(props.direction)})` } } >
                <p className="direction__icon material-icons">near_me</p>
            </div>

            <p className="direction__text">{props.direction}</p>
        </div>
    );
}

export default Wind;