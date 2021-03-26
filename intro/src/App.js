import React from "react";
import CategoryList from "./CategoryList";
import Navig from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from 'alertifyjs'
import { Route, Switch } from "react-router";
import CartList from "./CartList"
import FormDemo1 from "./FormDemo1";

export default class App extends React.Component {
  state = {
    currentCategory: "",
    products: [],
    cart:[]
  };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({
      currentCategory: category.categoryName,
    });
    this.getProducts(category.id);
  };

  getProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) {
      url += "?categoryId=" + id;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          products: data,
        })
      );
  };


  addToCart=(product)=>{
    let newCart=this.state.cart
    let addedItem=newCart.find(c=>c.product.id===product.id)
    if(addedItem){
      addedItem.quantity+=1
    }else{
      newCart.push({product:product,quantity:1})
      console.log(newCart)
    }
    this.setState({cart:newCart});
    alertify.success(product.productName+"added to cart")
    
  }

  removeFromCart=(product)=>{
    let newCart=this.state.cart.filter(del=>del.product.id !==product.id)
    this.setState({cart:newCart})
    alertify.error(product.productName+"deleted to cart")
    console.log(newCart)
  }

  render() {
    return (
      <div>
        <Container>
          <Navig cart={this.state.cart}
          removeFromCart={this.removeFromCart}/>

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
              >
                {" "}
              </CategoryList>{" "}
            </Col>

            <Col xs="6">
              <Switch>

                <Route exact path="/" render={props=>(
                        <ProductList
                        {...props}
                        products={this.state.products}
                        currentCategory={this.state.currentCategory}
                        addToCart={this.addToCart}
                      />
                )}/>

                <Route exact path="/cart" render={props=>(
                        <CartList
                        {...props}
                        cart={this.state.cart}
                        removeFromCart={this.removeFromCart}
                      />
                )}/>
                <Route path="/form1" component={FormDemo1}/>
              </Switch>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
