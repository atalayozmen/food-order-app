import styles from "./CartButton.module.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import React, { useContext, useState } from "react";
import Cart from "./Cart.js";
import ReactDOM from "react-dom";
import CartContext from "../cart-context";

const CartButton = () => {
  const [cartWindowOn, setCartWindow] = useState(false);
  const ctx = useContext(CartContext);

  const cartBtnClicked = () => {
    setCartWindow(true);
  };

  const overlayClicked = () => {
    setCartWindow(false);
  };

  const cartRoot = document.getElementById("cart-root");

  return (
    <React.Fragment>
      {cartWindowOn &&
        ReactDOM.createPortal(
          <div onClick={overlayClicked} className={styles.overlay}>
            <Cart></Cart>
          </div>,
          cartRoot
        )}
      <button onClick={cartBtnClicked} className={styles.button}>
        <Container style={{ paddingTop: "5px", paddingBottom: "5px" }}>
          <Row>
            <Col>
              <img
                src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
                alt="Italian Trulli"
                style={{ width: "24px", height: "19.2px" }}
              />
            </Col>

            <Col>
              <div style={{ width: "80px", fontSize: "18px" }} className={styles.cart}>
                Your Cart
              </div>
            </Col>
            <Col>
              <Card>
                <div style={{ fontSize: "18px", paddingLeft: "10px", paddingRight: "10px" }}>{ctx.cartState.totalNumberOfItems}</div>
              </Card>
            </Col>
          </Row>
        </Container>
      </button>
    </React.Fragment>
  );
};

export default CartButton;
