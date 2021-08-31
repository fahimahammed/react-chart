import logo from './logo.svg';
import './App.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

function App() {

 
  
  return (
    <div className="App">
       
      <div className='chart'>
      <LineChart/>
      <BarChart/>
      <PieChart/>
      </div>
    </div>
  );
}

export default App;
