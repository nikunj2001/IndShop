import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import Nav from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import Notfound from './components/Notfound';
import ProductsContextProvider from './Global/ProductsContext';
import CartContextProvider from './Global/CartContext';
function App() {
  return (
    <div className="App">

      <ProductsContextProvider>
        <CartContextProvider>

        
        <Router>
           <Nav/>
          
          <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/cart" exact component={Cart}/>
            <Route   component={Notfound}/>
          </Switch>
        </Router>
    </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
