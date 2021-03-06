import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MensCategory from './components/Categories/MensCategory';
import WomensCategory from './components/Categories/WomensCategory';
import Wishlisted from './components/Wishlisted';
import Popup from './components/Popup/Popup';
import { useState, useEffect } from 'react'
import Navbar from './components/NavbarComponents/Navbar';
import Test from './components/Test';
import Checkout from './components/Checkout';
import {useSelector} from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './components/Unauthorized';

function App() {

  const [timedPopup, setTimedPopup] = useState(false);

  const user = useSelector((state)=>state.authenticateUserReducer.status);
  console.log('USERSTATUS:',user)

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setTimedPopup(true)
  //   },3000)
  // },[])

  return (
    
    <div className="App">
      <Router>
        <Navbar />
        {/* <Header /> */}
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <br></br>
          <h2>HUGE SALE!!!</h2>
          <h3>STOREWIDE 50% OFF!!!</h3>
        </Popup>
        
        <Switch>
          <Route path="/" exact component = {Home}></Route>
          <Route path= "/product/:productId" exact component={ProductDetail}></Route>
          <Route path="/cart" exact component = {Cart}></Route>
          <Route path="/login" exact component = {Login}></Route>
          <Route path="/signup" exact component = {SignUp}></Route>
          <Route path="/categories/mens" exact component = {MensCategory}></Route>
          <Route path="/categories/womens" exact component = {WomensCategory}></Route>
          <ProtectedRoute path="/wishlist" exact component = {Wishlisted} user={user}></ProtectedRoute>
          <Route exact path='/unauthorized' component={Unauthorized} />
          <Route path="/test" exact component = {Test}></Route>
          <Route path="/checkout" exact component = {Checkout}></Route>
    
          <Route>404 Not Found</Route>

        </Switch>

        
      </Router>
      
      
    </div>
  );
}

export default App;
