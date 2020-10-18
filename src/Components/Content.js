import React from 'react';
import Card from './Card';

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profileLoaded: undefined 
        }
    }

    componentDidMount() {
        this.props.setClearSelection(
            () => {
                this.profileSelected(undefined);
            }
        );
    }

    profileSelected(profileName) {
        this.setState({profileLoaded: profileName});
    }    

    getUsers() {
        let users = [
            ["kanye", "r43743dhgh7h37de3===", ["taylorswift","postmalone"], "1,2,3,4,5"],
            ["taylorswift", "dfjsjsjsjs===", ["kanye","liluzivert"], "6,7,1,2,3"],
            ["postmalone", "djjsakak3e===", ["liluzivert","jayz"], "11,12,13,4,6,7"],
            ["liluzivert", "gdfgw643g6gd===", ["taylorswift","kanye","jayz"], "1,5,16,3,6"],
            ["jayz", "g27367edge72===", ["postmalone","kanye"], "1,24,56,3,7,9"]
        ];
    }

    getCards() {
        // dummy data
        let cards = [
            [1, "kanye", "Check out Stronger!!!", "https://open.spotify.com/track/4fzsfWzRhPawzqhX8Qt9F3", 50000]
            [2, "kanye", "Hit this dub!!!", "https://open.spotify.com/track/78TTtXnFQPzwqlbtbwqN0y", 5054],
            [3, "kanye", "Cool website dropped", "https://www.kanyewest.com/", 4464637],
            [4, "kanye", "Amazing", "https://twitter.com/kanyewest", 6463],
            [5, "kanye", "Flawless", "https://www.tmz.com/2020/10/17/kanye-west-confirms-joe-rogan-experience-podcast-facetime/", 7474340],
            [6, "taylorswift", "Yay! New song!", "https://open.spotify.com/track/4R2kfaDFhslZEMJqAFNpdd", 4766473],
            [7, "taylorswift", "Yay! New song!!", "https://open.spotify.com/track/4pvb0WLRcMtbPGmtejJJ6y", 737337],
            [8, "taylorswift", "Yay! New song!!!", "https://open.spotify.com/track/0Jlcvv8IykzHaSmj49uNW8", 47646],
            [9, "taylorswift", "Yay! New song!!!!", "https://open.spotify.com/track/6RRNNciQGZEXnqk8SQ9yv5", 644],
            [10, "taylorswift", "Yay! New song!!!!!", "https://open.spotify.com/track/2Rk4JlNc2TPmZe2af99d45", 474364],
            [11, "postmalone", "Hellll yeahhh!", "https://www.delish.com/food-news/a34398355/post-malone-grapes-acceptance-speech/", 473],
            [12, "postmalone", "new song droppp", "https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60", 4636],
            [13, "postmalone", "check out the twitter", "https://twitter.com/postmalone?lang=en", 56327],
            [14, "postmalone", "pluggin this", "https://rngmashups.bandcamp.com/album/press-play", 74],
            [15, "postmalone", "learnin to code", "https://docs.microsoft.com/en-us/azure/app-service/quickstart-nodejs?pivots=platform-linux", 5663]
        ];

        let html = [];
        for (let i in cards) {
            let card = cards[i];
            if (card !== undefined) {
                let num = card[0];
                let name = card[1];
                if (this.state.profileLoaded && name != this.state.profileLoaded) {
                    continue;
                }
                let title = card[2];
                let url = card[3];
                let likes = card[4];
                if (name !== undefined) {
                    html.push(<Card name={name} text={title} url={url} profileSelected={this.profileSelected.bind(this)}/>);
                }
            }
        }

        return html;
    }

    render() {
        return (
            <div className="Content">
                {this.getCards()}
            </div>
        );
    }
}
export default Content