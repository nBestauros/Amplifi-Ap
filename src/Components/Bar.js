import React from 'react';


class Bar extends React.Component {
    render() {
        return (
            <div className="Bar">
                <div className="Bar-Element" onClick={
                    () => { this.props.clearSelection(); }
                }>
                    Home
                </div>
            </div>
        );
    }
}

export default Bar;
