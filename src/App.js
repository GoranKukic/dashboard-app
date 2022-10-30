import Nav from './components/Nav';
import Pulse from './components/Pulse';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="main-wrapper">
        <TopBar />
        <Pulse />
      </div>
    </div>
  );
}

export default App;
