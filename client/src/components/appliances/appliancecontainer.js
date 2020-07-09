import React from "react";
import Appliance from "./appliances";
import { connect } from "react-redux";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { withRouter } from "react-router-dom";


class Appcontainer extends React.Component {

    state = {
        userdata:[]
    }


    componentDidMount(){
         fetch(`home/${this.props.SellerProduct}`)
         .then(res => res.json())
         .then(data => {
             this.setState({
                 userdata:data,
             })
             console.log(this.state.userdata);
         })

         
         
    }

    render(){
      
        const seller = this.state.userdata.map(item => {
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
            <div>
                <Appliance  />
            </div>
            <div>
                <Appliance  />
            </div>
            <div>
                <Appliance />
            </div>
            <div style={{margin:"30px",display:"flex"}}>
                {seller}
            </div>
          
        </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        SellerProduct : state.SellerProductName.name
    }
}

export default connect(mapStateToProps)(withRouter(Appcontainer));