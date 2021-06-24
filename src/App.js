import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <div className='App'>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
