import './humidity.scss';

function Humidity (props) {
    return(
        <div className="humidity">
            <h3>Humidity</h3>
            <p className="humidity__value">
                {props.value}<span className="humidity__value-thin">%</span>
            </p>

            <div className="humidity__visual">
                <div className="humidity__scale">
                    <p>0</p>
                    <p>50</p>
                    <p>100</p>
                </div>

                <div className="humidity__progress-bar">
                    <div className="humidity__whole">
                        <div className="humidity__progress" 
                            style={{width: `${props.value}%`}}>    
                        </div>
                    </div>
                </div>

                <p className="humidity__unit">%</p>
            </div>
        </div>
    );
}

export default Humidity;