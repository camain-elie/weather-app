import { Component } from 'react';

import './searchPanel.scss';

class SearchPanel extends Component{
    constructor(props){
        super(props);

        let locationList = props.locationList;

        if (!locationList){
            locationList = [];
        }

        this.state={
            inputText: '',
            locationList: locationList,
            pageIsLoaded: false,
        };
    }

    render(){

        return(
            <div  className={`search-panel ${this.props.initial ? '' : 'initial'} ${this.props.isActive ? 'active-panel' : 'inactive-panel'}`}>
                <div className="search-panel__wrapper">
                    <div className="search-panel__close" onClick={() => this.props.handleClose()}>
                        <div className="search-panel__cross"></div>
                    </div>

                    <div className="search-panel__form">
                        <form onSubmit={event => this.props.handleSearch(event)}>
                            <input className="search-panel__input" placeholder="search location" type="text" value={this.state.inputText} onChange={e => this.setState({ inputText: e.target.value })} />
                            <input className="search-panel__search-button"  type="submit" value="Search" />
                        </form>
                    </div>

                    <div className="search-panel__location-list">
                        {this.state.locationList.map((item, index) => {
                            return(
                                <div className="search-panel__location" key={index} onClick={() => this.props.handleLocationClick(item.woeid)}>
                                    <p>{item.title}</p>
                                    <p className="material-icons search-panel__location-icon">chevron_right</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPanel;