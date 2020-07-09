import React from "react";
import { Card, ListGroup,} from "react-bootstrap";
import "./home.css";
import { withRouter } from "react-router-dom";


class Homecards extends React.Component {
  state = {
    images: [],
    
  };

  componentDidMount() {
    let array = [
      {
        url:
          "https://images.unsplash.com/photo-1578593195423-df7df9563457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=336&q=80",
        description: "Housemaids"
      },
      {
        url:
          "https://images.unsplash.com/photo-1556909172-bd5315ff61a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "House Appliances"
      }
    ];

    this.setState({
      images: array
    });
  }

  handleclick = (item) => {
    console.log(item.description);
    console.log(item.description === "House Appliances");
    if(item.description  === "House Appliances" )
    {
      
      this.props.history.push('/appliances');
    }

    else{
      this.props.history.push('/housemaid');
    }

  }
     
  render() {
    const image = this.state.images.map(item => {
      return (
        <Card style={{ width: '25rem' }} key={item.id}>
          <Card.Img variant="top" src={item.url} width="50px" height="200px" />
          <ListGroup className="list-group-flush">
                             
            <button onClick = {() => this.handleclick(item)} >{item.description}</button>
            </ListGroup>
                    
          </Card>
      );
    });

    return(
      <div style={{display:"flex" ,margin:"30px",justifyContent:"space-around"}}>
          {image}
      </div>
    )
  }
}

export default (withRouter(Homecards));

         
                  