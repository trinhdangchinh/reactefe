import './App.css';
import Card from './components/card.js';
function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div><Card /></div>
      <div><Card /></div>
      <div><Card /></div>

    </div>
  );
}

export default App;
