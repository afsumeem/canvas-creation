import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">

      {/* router */}

      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route path="/service">
            <Services></Services>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>

          <Route path="*">
            <Notfound></Notfound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
