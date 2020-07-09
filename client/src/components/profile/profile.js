import React from "react";
//import { connect } from "react-redux";
import { withRouter, Link, } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

class Profile extends React.Component {

  state = {
       x : '',
      // y:  JSON.parse(localStorage.getItem('jwt')).seller.name
      y: JSON.parse(localStorage.getItem('jwt')),
      z:'',
      w:'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
      
  }
componentDidMount(){

    if(this.state.y.user) {
      this.setState({
        x : JSON.parse(localStorage.getItem('jwt')).user.name,
      })
    }
    else {
      this.setState({
        x:JSON.parse(localStorage.getItem('jwt')).seller.name,
        z:'for selling more appliances click on upload'
      })
    }

}


    render(){

      let message;
      if(this.state.y.user) {
        message = (
          <div></div>
        )
      }
      else {
        message = (
          <Link className="navbar-brand ml-4" to="/seller">
           <Button variant="danger">upload</Button>
           </Link>
        )
      }
     
        return(
       <div style={{textAlign:"center"}}> 
         <Card style={{ width: '10rem',marginBottom:"40px" ,marginLeft:"580px",marginTop:"70px"}}>
          <Card.Img variant="top" src={this.state.w} width="150px" height="150px" />
           </Card> 
        <h1 style={{}}>Hiiii {this.state.x}</h1>
        <h2>{this.state.z}
        {/* <Link className="navbar-brand ml-4" to="/seller">
              upload
          </Link> */}
          </h2>
          {message}
        
        </div>
        )
    }

}

// const mapStateToProps = state => {
//     console.log(state.token.user.email);
//     return {
          
//         details:state.token.user.name

//     }
// }

export default(withRouter(Profile));