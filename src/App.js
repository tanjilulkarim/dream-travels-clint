
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './Booking/Booking';
import About from './components/About/About';
import AddService from './components/AddService/AddService';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageServices from './components/ManageServices/ManageServices';

import PageNotFund from './components/PageNotFound/PageNotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceInfo from './components/ServiceInfo/ServiceInfo';

import Services from './components/Services/Services';


import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path="/services/:id">
              <ServiceInfo></ServiceInfo>
            </PrivateRoute>
            <Route path="/addServices">
              <AddService></AddService>
            </Route>
            <Route path="/manageServices">
              <ManageServices></ManageServices>
            </Route>
            <Route path="/booking">
              <Booking></Booking>
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
      </AuthProvider>
    </div>
  );
}

export default App;
