import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import HeroSection from './components/heroSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
