import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound'
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';


function App() {
  return (
    <div className="App">
      
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
          <Route path="/inventory"> 
            <Inventory />
          </Route>
        <Route path="/placeorder"> 
          <PlaceOrder />
        </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;