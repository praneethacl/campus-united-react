import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'


function App() {
return (
	<Router>
        <div className="App">
            <Routes>
                <Route exact path='/' element={< Navbar />}></Route>
                <Route exact path='/login' element={< Login />}></Route>
            </Routes>
        </div>
    </Router>
	
);
}

export default App;
