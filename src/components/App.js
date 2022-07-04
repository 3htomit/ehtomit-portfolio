import Navbar from './Navbar';
import Banner from './Banner';
import '../styles/components/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <content>
        <Banner></Banner>
      </content>
    </div>
  );
}

export default App;
