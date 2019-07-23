import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BehaviorSubject } from 'rxjs';
import { map, scan } from 'rxjs/operators';

const CounterView = ({count, onIncrement, onDecrement}) => (
    <div>
        <h1>{count}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
)

const HOCFactory = (WrapComponent, observableFactory, initialState) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.props$ = observableFactory();
        }
        componentDidMount() {
            this.subscribtion = this.props$.subscribe(val => this.setState(val))
        }
        componentWillUnmount() {
            this.subscribtion.unsubscribe();
        }
        render() {
            return <WrapComponent {...this.props$} {...this.state} />
        }
    }
}

const App = HOCFactory(CounterView, () => {
    const counter$ = new BehaviorSubject(0);
    return counter$.pipe(
        scan((seed, value) => {
            return seed + value
        }, 0),
        map(x => {
            return {
                count: x,
                onIncrement: () => counter$.next(1),
                onDecrement: () => counter$.next(-1)
            }
        })
    )
}, 0)

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
