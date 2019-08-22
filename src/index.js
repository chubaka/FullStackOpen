import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    const all = props.good+ props.neutral + props.bad;
    return (
        <div>
            <p>Statistics</p>
            <Statistic text="good" value={props.good}/>
            <Statistic text="neutral" value={props.neutral}/>
            <Statistic text="bad" value={props.bad}/>
            <p>all {all}</p>
            <p>average {(props.good - props.bad)/all}</p>
            <p>positive {props.good*100/all}%</p>
        </div>
    )
}

const Statistic = (props) => {
    return (
        <div>
            <p>{props.text} {props.value}</p>
        </div>
    )
}

const Button = (props) => {
    return (
        <div>
            <button onClick={props.update}>{props.text}</button>
        </div>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const styles = {
        display: 'flex'
    }
    let hasFeedback = good || neutral || bad;

    return (
        <div>
            <h1>give feedback</h1>
            <div style={styles}>
                <Button text="good" update={() => setGood(good + 1)}/>
                <Button text="neutral" update={() => setNeutral(neutral + 1)}/>
                <Button text="bad" update={() => setBad(bad + 1)}/>
            </div>
            {hasFeedback ?  (
                <Statistics good={good} neutral={neutral} bad={bad}/>
            ) : (
                <p>No Feedback given</p>
            )

            }
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)