import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Community from './Components/Community/Community';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Community/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
