
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PageNotFund from './components/PageNotFound/PageNotFound';
import ServiceInfo from './components/ServiceInfo/ServiceInfo';

import Services from './components/Services/Services';


import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route path="/services/:id">
            <ServiceInfo></ServiceInfo>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signUp">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <PageNotFund></PageNotFund>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
