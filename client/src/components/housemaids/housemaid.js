import React from "react";
import {  CardColumns, Card, ListGroup,ListGroupItem } from "react-bootstrap";
import { connect } from "react-redux";
import { display } from "../reducers/actions";
import { withRouter } from "react-router";
import {totalcost} from "../reducers/actions";

class Housemaid extends React.Component{

    state = {
        maidimages:[],
        isloggedin:false,
    }

    componentDidMount(){
        fetch('/maids')
           .then(response => response.json())
           .then(data => {
            //  console.log(data);
                this.setState({
                    maidimages:data,
                })
           })
    }

    handleclick = (item) => {
      

      if(JSON.parse(localStorage.getItem('jwt'))) {
        this.props.displayname(item);
      this.props.totalcost(item);
        this.props.history.push('/cart');
      } 
      else {
        this.props.history.push('/SignIn')
      } 
      
    }

    render(){
    
      const items = this.state.maidimages.map(item => {
      return(
          <Card style={{ width: '18rem' ,marginBottom:"40px"}} key={item.id}>
          <Card.Img variant="top" src={item.image} width="200px" height="200px" />
          <ListGroup className="list-group-flush">
             <ListGroupItem>{item.description}</ListGroupItem>
             <ListGroupItem>Rs{item.price}/week</ListGroupItem>
             <ListGroupItem>Available time : {item.delivery}</ListGroupItem>
             <button type="button" class="btn btn-primary" onClick = {()=>this.handleclick({item})} >Add to Cart</button>
           </ListGroup>
           
     </Card>
      )
    })
    
    return(
         
      <CardColumns style={{marginLeft:"90px",marginTop:"20px"}}>
      {items}
   </CardColumns>
    )
    }

}

const mapDispatchToProps = dispatch =>{
  return{
       displayname: (item) => {
         dispatch(display(item));
       },
       totalcost: item => {
        dispatch(totalcost(item.item.price));
        // console.log(item.item.price);
      }
  }
}

const mapStateToProps = state => {
  return {
    tokenvalue:state.token.token,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Housemaid));