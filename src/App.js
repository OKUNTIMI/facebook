import Homescreen from './screen/Homescreen';
import friends from './screen/friends.js';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<Homescreen/>}/>
          <Route path="/friends" element={<friends/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
