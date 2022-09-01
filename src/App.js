import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import Counter from './components/counter/Counter';

function LearningComponents() {
	return (
		<div className="App">
			<header>Hello World from App component</header>

			<FirstComponent />
			<SecondComponent />
			<Counter />
		</div>
	);
}

function SecondComponent() {
	return (
		<div>
			<p1>Hello from the second component</p1>
		</div>
	);
}

export default LearningComponents;
