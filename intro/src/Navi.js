import React, { useState } from "react";
import {Link} from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";

const Navig = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink  > <Link to="form1"> Form Demo 1</Link> </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          {props.cart.length>0? <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={{
               color:"blue"
             }} nav caret>
                Carts-{props.cart.length}
              </DropdownToggle>
              <DropdownMenu right>
                {props.cart.map((cartItem) => (
                  <DropdownItem key={cartItem.product.id}>
                    <Badge onClick={()=> props.removeFromCart(cartItem.product)} color="danger">X</Badge>
                    {cartItem.product.productName}
                    <Badge color="success">{cartItem.quantity}</Badge>
                  </DropdownItem>
                ))}

                <DropdownItem divider />
                <DropdownItem>
                        <Link to="cart">
                          Go To Cart
                       </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>:
             <NavItem>
             <NavLink style={{
               color:"red",
             }}>Empty Cart</NavLink>
           </NavItem>}
         
          
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navig;
