import logo from './logo.svg';
import './App.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';

function App() {

 
  
  return (
    <div className="App">
       
      <div className='chart'>
      <LineChart/>
      <BarChart/>
      </div>
    </div>
  );
}

export default App;
