
import CardWidget from './components/CardWidget';
import ItenrListContainer from './components/ItenrListContainer';
import NavBar from './components/NavBar';
import './App.css';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
      <NavBar />
      <br />
      <ItenrListContainer />
      <br />
      <ItemCount desde={0} />
      
    </div>
  );
}

export default App;
