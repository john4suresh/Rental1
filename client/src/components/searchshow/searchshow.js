import React from "react";
import { connect } from "react-redux";
import { Card, ListGroup ,ListGroupItem ,CardColumns } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { display } from "../reducers/actions";
import {totalcost} from "../reducers/actions";

class Searchshow extends React.Component {

    state={
        itemshow:[],
        number:0,
    }

    componentDidMount(){
        
        fetch(`/home/${this.props.value}`)
            .then(response => response.json())
            .then(data => {
              console.log(data.length);
                 this.setState({
                     itemshow:data,
                     number:data.length,

                 });
                 console.log(this.state.itemshow)
            })

    }

  //   componentDidUpdate(){
        
  //     fetch(`/home/${this.props.value}`)
  //         .then(response => response.json())
  //         .then(data => {
  //           console.log(data)
  //              this.setState({
  //                  itemshow:data,
  //              });
  //              console.log(this.state.itemshow)
  //         })

  // }


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

    const items =  this.state.itemshow.map(item => {
        return(
            <Card style={{ width: '18rem' }} key={item.id}>
            <Card.Img variant="top" src={item.image} width="200px" height="200px" />
            <ListGroup className="list-group-flush">
               <ListGroupItem>{item.name}</ListGroupItem>
               <ListGroupItem>Rs{item.price}/week</ListGroupItem>
               <ListGroupItem>Delivery in {item.delivery}min</ListGroupItem>
               <button onClick = {()=>{this.handleclick({item})}} >Add to Cart</button>
             </ListGroup>
             
       </Card>
        )

        })

        return(
          <div>
            <h1 style={{marginTop:"10px" ,textAlign:"center"}}>You have {this.state.number} items for your search</h1>
            <CardColumns style={{marginLeft:"90px",marginTop:"20px"}}>
              
            {items}
         </CardColumns>
         </div>
        )
    }

}


const mapStateToProps = state => {
    console.log(state);
    return{
        value:state.searchvalue,
        tokenvalue:state.token.token,
    }
}


const mapDispatchToProps = dispatch =>{
    return{
         displayname: (item) => {
           dispatch(display(item));
         },
         totalcost: item => {
          dispatch(totalcost(item.item.price));
          console.log(item.item.price);
        }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Searchshow));