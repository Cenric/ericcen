import './App.css';
import Navbar from './components/Navbar/Navbar.js';

function App() {
  return (

    <div className="App">
      <Navbar />
      
      <h1> Welcome! </h1>
      <img className="profileimage" src="/profileimage.jpg" alt="profileimage" />
      <h2> Eric Cen </h2>
    </div>
  );
}

export default App;
