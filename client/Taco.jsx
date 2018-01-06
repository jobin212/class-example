import React from 'react'

class Taco extends React.Component {
    constructor() {
        super();
        this.state = {
            opened: true,
            astronauts: 0
        }
        this.toggleTaco = this.toggleTaco.bind(this);
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.body)
        .then(numInSpace => {

            this.setState({
                astronauts: numInSpace.number
            })
        })
    }

    toggleTaco() {
        this.setState({
            opened: !this.state.opened
        })
    }


    render() {
        return (
            <div>
                <h1> There are {this.state.astronauts} on the ISS right now </h1>
                <h1 onClick={this.toggleTaco}> {this.props.name} </h1>
                {
                    this.state.opened ? 
                    <div>
                         <img src = {this.props.image} />
                    </div>
                    : null 
                }
            </div>
        )
    }
}

export default Taco;