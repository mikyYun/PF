import './App.css';
import Routers from './route';
import Nav from './components/Nav';

function App() {
  console.log("APP")
  return (
    <div className="App">
      
      {/* <Nav /> */}
      <Routers />
    </div>
  );
}

export default App;
