import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Calendar from './components/Calendar'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App container wrapper">
      <div className='section row'>
        <div className='col-md-2'>
          <Sidebar />
        </div>
        <div className='col-md-10' style={{marginTop:'20px'}}>
          <Calendar />
        </div>
      </div>
      
    </div>
  );
}

export default App;
