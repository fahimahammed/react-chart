import './App.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import PolarChart from './components/PolarChart';
import Multitype from './components/Multitype';

function App() {

 
  
  return (
    <div className="App">
       
      <div className='chart'>
        {/* Chart components */}
          <LineChart/>
          <BarChart/>
          <PieChart/>
          <PolarChart/>
          <Multitype/>
      </div>
    </div>
  );
}

export default App;
