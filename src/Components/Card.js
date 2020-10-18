import React from 'react';
const axios = require('axios');

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            embedInfo: undefined
        }
    }

    componentDidMount() {
        if (this.props.url) {
            // axios.get(`http://iframe.ly/api/iframely?url=${this.props.url}&api_key=626c5a832082f7170493bd`).then((response) => {
            //     this.setState({embedInfo: response});
            //     console.log(response);
            // }).catch((err) => {
            //     console.log(err);
            // });
        }
    }

    render() {

        //Spotify -> green, soundcloud -> orange, customink -> red, bandcamp -> blue etc
        
        let short = this.props.name[0] + this.props.name[1];
        
        if (this.props.name.includes(' ')) {
            short = this.props.name[0] + this.props.name.split(' ')[1][0];
        }
        
        short = short.toUpperCase();

        return (
            <div className="Card">
                <div className="Card-header" onClick={() => {
                    this.props.profileSelected(this.props.name);
                }}>
                    <div className="Header-circ">{short}</div>
                    <div className="Header-text">{this.props.name}</div>
                </div>
                <div className="Card-content">
                    <div className="Card-content-header">
                        {this.props.text}
                    </div>
                    <div className="Card-content-link">
                        {this.props.url}
                    </div>
                </div>
            </div>
        );
    }
}
export default Card