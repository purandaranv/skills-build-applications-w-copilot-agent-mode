

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

// Logo import
import logo from '../public/octofitapp-small.png';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Octofit Logo" className="App-logo" />
          <h1 style={{ margin: 0, fontWeight: 700, fontSize: '2.2em', color: '#fff' }}>Octofit Tracker</h1>
        </header>
        <nav className="nav">
          <Link className="App-link" to="/activities">Activities</Link>
          <Link className="App-link" to="/leaderboard">Leaderboard</Link>
          <Link className="App-link" to="/teams">Teams</Link>
          <Link className="App-link" to="/users">Users</Link>
          <Link className="App-link" to="/workouts">Workouts</Link>
        </nav>
        <Container className="mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<Activities />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
