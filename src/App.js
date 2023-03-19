import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Pictures from './components/Pictures';
import Popular from './components/Popular';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Pictures />
      <Search />
      <Popular />
      <Footer />
    </div>
  );
}

export default App;
