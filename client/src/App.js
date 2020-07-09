import React from "react";
//import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigationbar";
//import Footer from "./components/navigation/footer";
import Signin from "./components/Signin/signin";
import Home from "./components/Home/home";
import Appliance from "./components/appliances/appliances";
//import Appcontainer from "./components/appliances/appliancecontainer";
import Housemaid from "./components/housemaids/housemaid";
import Cart from "./components/cart/cart"
//import Search from "./components/navigation/searchbar";
import Searchshow from "./components/searchshow/searchshow"
import { connect } from "react-redux";
import Signup from "./components/signup/signup";
import Profile from "./components/profile/profile";
import Seller from "./components/seller/seller";
// import Signout from "./components/signout/signout";
import Maid from "./components/seller/maid";
import Sellercart from "./components/cart/sellercart";

class  App extends React.Component {

  render(){
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/SignIn">
          <Signin />
        </Route>
        <Route path="/Signup">
          <Signup/>
        </Route>
        <Route path="/appliances">
          <Appliance />
        </Route>
        <Route path="/housemaid">
          <Housemaid />
        </Route>
        <Route path="/cart" render = {(props) => {
          if(JSON.parse(localStorage.getItem('jwt')).user){
            return(
              <Cart/>
            )          
          }
          else {
            return(
              <Sellercart/>
            )
          }
        }}/>
          
      
        <Route path={`/search/${this.props.value}`}>
          <Searchshow/>
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/seller">
          <Seller/>
        </Route>
        <Route path="/maid">
          <Maid />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}
}

const mapStateToProps = state => {
  return{
    value:state.searchvalue,
  }
}

export default connect(mapStateToProps)(App);

