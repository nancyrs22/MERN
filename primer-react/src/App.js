import HelloDojo from './componentes/HelloDojo/HelloDojo';
import Lista from './componentes/lista/lista';
import './App.css';

function App() {
  return (
<div className="container">
      {/* <h1>Hello Dojo!</h1> */}
      <HelloDojo/>
      {/* <h3>Things I need to do:</h3>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathont</li>
        <li>Feed the dogs</li>
      </ul> */}
      <Lista/>
    </div>
  );
}

export default App;
