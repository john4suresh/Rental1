import React from "react";
import { connect } from "react-redux";
//import { withRouter } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class Sellercart extends React.Component {

    state = {
        userdata:[],
        number:'',
    }


    componentDidMount(){
        console.log(this.props.SellerProduct);
        if(this.props.SellerProduct.name){
       this.setState({
           userdata:[this.props.SellerProduct],
           
       })
       console.log(this.state.userdata);
    }

        }
    

    render() {
        const seller = this.state.userdata.map(item => {
            return(
                <Card style={{ width: '18rem' }} key={item.id}>
                   <Card.Img variant="top" src={item.image} width="200px" height="200px" />
                   <ListGroup className="list-group-flush">
                      <ListGroupItem>{item.name}</ListGroupItem>
                      <ListGroupItem>Rs{item.price}/week</ListGroupItem>
                      <ListGroupItem>Delivery in {item.delivery}min</ListGroupItem>
                      
                    </ListGroup>
                    
              </Card>
            )
        })

        return(
        <div> 
            <h1 style={{textAlign:"center"}}>you have given these appliances for rent</h1>   
            <div style={{margin:"30px",display:"flex"}}>
                {seller}
            </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    console.log(state.SellerProductName);
    return {
        SellerProduct : state.SellerProductName
    }
    
}

export default connect(mapStateToProps)(Sellercart);