import Homescreen from './screen/Homescreen';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Friend from './screen/Friend';
import Chat from './screen/Chat';
import Notification from './screen/Notification';
import Video from './screen/Video';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<Homescreen/>}/>
          <Route path="/Friend" element={<Friend/>}/>
          <Route path="/Chat" element={<Chat/>}/>
          <Route path="/Notification" element={<Notification/>}/>
          <Route path="/Video" element={<Video/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
