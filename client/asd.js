import React from "react";
import { Link } from "react-router-dom";
import "./navigationbar.css";
import Search from "./searchbar";
// import { isAuthenticated } from "../index";

class Navigation extends React.Component {
  state = {
    isLogged: localStorage.getItem("jwt"),
  };

  //      isAuthenticated(){
  //     if (typeof window == "undefined") {
  //       return false;
  //     }
  //     if (localStorage.getItem("jwt")) {
  //       return true;
  //     }
  //     else{
  //       return false;
  //     }
  //   }

  componentWillUpdate() {
    this.setState({
      isLogged: localStorage.getItem("jwt"),
    });
  }

  render() {
    let message;
    if (this.state.isLogged) {
      message = (
        <span>
          <li className="navbar-brand ml-2">
            <Link className="navbar-brand ml-2" to="/Signout">
              Signout
            </Link>
            <li className="navbar-brand ml-2">
              <Link className="navbar-brand ml-2" to="/Profile">
                Profile
              </Link>
            </li>
          </li>
        </span>
      );
    } else {
      message = (
        <span>
          <li className="navbar-brand ml-2">
            <Link className="navbar-brand ml-2" to="/SignIn">
              SignIn
            </Link>
          </li>
          <li className="navbar-brand ml-2">
            <Link className="navbar-brand ml-2" to="/Signup">
              Signup
            </Link>
          </li>
        </span>
      );
    }
    return (
      <div>
        <div className="navbar-expand-sm bg-dark navbar-dark text-white">
          <div className="form-inline">
            <ol>
              <li className="navbar-brand ml-2">
                <h3>
                  <span className="badge mx-2 badge-warning">
                    <b>COMPANY</b>
                  </span>
                </h3>
              </li>
              <li className="navbar-brand ml-2">
                <Link className="navbar-brand ml-2" to="/">
                  Home
                </Link>
              </li>
              <li className="navbar-brand ml-2">
                <Search />
              </li>
              <li className="navbar-brand ml-2">
                <Link className="navbar-brand ml-2" to="/housemaid">
                  House-Maid
                </Link>
              </li>
              <li className="navbar-brand ml-2">
                <Link className="navbar-brand ml-2" to="/appliances">
                  Appliances
                </Link>
              </li>
              {message}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default Navigation;

// {/* <CardDeck style={{marginLeft:"130px",width:"80%"}} >
// {image}
// </CardDeck> */}


// let array = [
//   {
//   url:"",
//   name:"",
//   description:"",
//   price:"",
//   availability:""
// }
// ]


render(){
    
  const items = this.state.maidimages.map(item => {
  return(
      <Card style={{ width: '18rem' }} key={item.id}>
      <Card.Img variant="top" src={item.urls.small} width="200px" height="200px" />
      <ListGroup className="list-group-flush">
         <ListGroupItem>{item.alt_description}</ListGroupItem>
         <ListGroupItem>Rs{item.likes}/week</ListGroupItem>
         <ListGroupItem>Delivery in {item.user.total_photos}min</ListGroupItem>
         <button onClick = {()=>this.handleclick({item})} >Add to Cart</button>
       </ListGroup>
       
 </Card>
  )
})

return(
     
  <CardColumns style={{margin:"20px"}}>
     {items}
  </CardColumns>
)
}