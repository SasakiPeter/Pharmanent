import React, { Component } from 'react';
import { default as WrappedComponent } from '../../containers/Counter';

class Counter extends Component {
    render() {
        const { increment, decrement, counter } = this.props;
        return (
            <div>
                <h2>カウンター</h2>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <div>
                    Count:{counter.count}
                </div>
            </div>
        )
    }
}

export default WrappedComponent(Counter);