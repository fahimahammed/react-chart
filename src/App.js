import './App.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import PolarChart from './components/PolarChart';
import Multitype from './components/Multitype';
import RadarChart from './components/RadarChart';

function App() {

 
  
  return (
    <div className="App">
       
      <div className='chart'>
        {/* Chart components */}
          <LineChart/>
          <BarChart/>
          <PieChart/>
          <PolarChart/>
          <RadarChart/>
          <Multitype/>
          
      </div>
    </div>
  );
}

export default App;
