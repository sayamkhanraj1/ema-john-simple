import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound'
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthPorvider from './context/AuthProvider'
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Shipping from './components/Shipping/Shipping';


function App() {
  return (
   <div>
     <AuthPorvider>
     <Router>
      <Header />
        <Switch>
          <Route exact path="/">
          <Shop />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route exact path="/review">
            <OrderReview />
          </Route>
          <PrivetRoute path="/inventory"> 
            <Inventory />
          </PrivetRoute>
          <PrivetRoute path="/shipping"> 
            <Shipping />
          </PrivetRoute>
        <PrivetRoute path="/placeorder"> 
          <PlaceOrder />
        </PrivetRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
     </AuthPorvider>
   </div>
  );
}

export default App;