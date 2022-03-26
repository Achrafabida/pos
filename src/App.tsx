import {useRoutes} from 'react-router-dom';
import routes from 'router/main';

function App() {
	const element = useRoutes(routes);
	return (
		<div className="App">
			<h1>App</h1>
			{element}
		</div>
	);
}

export default App;
