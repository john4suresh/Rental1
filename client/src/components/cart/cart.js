import React from "react";
import { connect } from "react-redux";
import { Card, ListGroup,ListGroupItem,Button } from "react-bootstrap";
import {withRouter} from "react-router";
import { Remove } from "../reducers/actions";
import {subtractprice} from "../reducers/actions";

class Cart extends React.Component {

    state = {
        total:0,
        number:this.props.cartitems.length,
    }


handleremove = (item) => {
    console.log(item);

    this.setState({
        number:this.props.numbers,
    })
    
    this.props.remove(item);
    console.log(this.props.cartitems);
   // this.props.history.push('/cart');
    this.props.subtractprice(item.item.price);
    
    
}


    render(){
        console.log(this.props.cartitems);
        const Cartitem = this.props.cartitems.map(item => {
        return(
            <Card className = "mx-7 my-5" style={{ width: '30rem',marginLeft:'100px' }}>

                   <Card.Img variant="top" src={item.image} width="200px" height="200px" />  
                   <ListGroup className="list-group-flush">
                      <ListGroupItem>{item.description}</ListGroupItem>
                      <ListGroupItem>Rs{item.price}/week</ListGroupItem>
                      <ListGroupItem>Delivery in {item.delivery}min</ListGroupItem>
                      {/* <button onClick = {()=>{this.handleclick({item})}} >Proceed to payment</button> */}
                      <button onClick ={()=>{this.handleremove({item})}} >Remove from cart </button>
                    </ListGroup> 
                          
            </Card>
            
        )

        })

        return(
            // <div>
            // <CardColumns style={{margin:"20px"}}>
            //       {Cartitem}
            // </CardColumns>
            // <p>total cost :{this.props.price}</p>
            // </div>

            

            <div className="row">
                
                <div className = "col-6 ">
                <h1 style={{margin:"40px",textAlign:"center"}}>You Have {this.props.numbers} items in your cart</h1>
  
                    {Cartitem}
                </div>
                <div className = "col-6">
                  <h1 style={{textAlign:"center",marginTop:"50px"}}>Your cart summary</h1>
                   <h3 style={{textAlign:"center",marginTop:"50px"}}>YOUR SUB TOTAL:{this.props.price}</h3>  
                   <div style={{marginLeft:"270px",marginTop:"50px"}}>
                   <Button variant="danger" >Rent now</Button>{' '}
                </div>                 
                </div>
                
            </div>

           
        )
    }

}


const mapStateToProps = state =>{
    console.log(state.cartdata.length);
    return{
        cartitems: state.cartdata,
        numbers:state.cartdata.length,
        price:state.price,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        remove: item => {
            console.log(item);
            dispatch(Remove(item));
        },
        subtractprice: item => {
            dispatch(subtractprice(item));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Cart));