import { useState } from "react";

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	if (good > 0 || neutral > 0 || bad > 0) {
		return (
			<div>
				<h1>statistics</h1>
				<table>
					<tbody>
						<StatisticLine
							text={"good"}
							value={good}
						></StatisticLine>
						<StatisticLine
							text={"neutral"}
							value={neutral}
						></StatisticLine>
						<StatisticLine text={"bad"} value={bad}></StatisticLine>
						<StatisticLine
							text={"all"}
							value={good + neutral + bad}
						></StatisticLine>
						<StatisticLine
							text={"average"}
							value={(good - bad) / (good + neutral + bad)}
						></StatisticLine>
						<StatisticLine
							text={"positive"}
							value={(good / (good + neutral + bad)) * 100}
						></StatisticLine>
					</tbody>
				</table>
			</div>
		);
	} else {
		return (
			<div>
				<h1>statistics</h1>
				<p>No feedback given</p>
			</div>
		);
	}
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>give feedback</h1>
			<button onClick={() => setGood(good + 1)}>good</button>
			<button onClick={() => setNeutral(neutral + 1)}>neutral</button>
			<button onClick={() => setBad(bad + 1)}>bad</button>
			<Statistics good={good} neutral={neutral} bad={bad}></Statistics>
		</div>
	);
};

export default App;
