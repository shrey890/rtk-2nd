import { useSelector } from "react-redux";
import "./App.css";
import Child1 from "./components/Child1";

function App() {
	const data = useSelector(c=>c.show.value)
	return (
		<div>
			<h5>App = {data}</h5>
			<Child1 />
		</div>
	);
}

export default App;
