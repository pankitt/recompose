import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        document.title = `Вы нажали ${this.state.count} раз`;
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            document.title = `Вы нажали ${this.state.count} раз`;
        }
    }

    render() {
        return (
            <div>
                <p>Вы нажали <b>{this.state.count}</b> раз</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Нажми на меня
                </button>
            </div>
        );
    }
}

export default Example;
