import PropsTypes from 'prop-types';
import React, { Component } from 'react';
import { render } from 'react-dom';
import './app.css'

const node = document.querySelector('#root');

const Panel = (props) => {
    const alphas = Array.from({ length: 26 }, (v, k) => k + 1);
    var toShow = []
    for (const el of alphas) {
        var ell = String.fromCharCode(el + 64);
        if (props.toExclude.indexOf(ell.toLowerCase()) == -1) toShow.push(ell);
    }
    console.log('toShow:', toShow);
    console.log('toExclude:', typeof (props.toExclude));
    return (
        // <h1>hi!</h1>
        <div id='panel'>
            {toShow.map(el => (
                <h2>{el.toString()}</h2>
            ))}
        </div>
    );
}

Panel.PropsTypes = {
    toExclude: PropsTypes.string.isRequired
};

Panel.defaultProps = {
    toExclude: ''
};


const Form = (props) => {
    return (<div id='form' >
        < input placeholder='type something' onChange={props.onChange} ></input >
        <h2>{props.input}</h2>
    </div>
    )
};

Form.PropsTypes = {
    onChange: PropsTypes.func.isRequired,
    input: PropsTypes.string
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState(() => ({
            input: event.target.value
        }));
    }

    render() {
        // console.log('Parent');
        return (
            <>
                {/* <h1>hi</h1> */}
                <Panel toExclude={this.state.input} />
                <Form onChange={this.onChange} input={this.state.input} />
            </>
        )
    }
};

render(<App />, node);