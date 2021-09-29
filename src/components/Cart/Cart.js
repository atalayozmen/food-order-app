import { Card } from "react-bootstrap";
import CartItem from "./CartItem";
import CartContext from "../Contexts/cart-context";
import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Cart.module.css";
import uuid from "react-uuid";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const onCardClick = (event) => {
    event.stopPropagation();
  };

  const onOrderClicked = () => {
    props.onCloseCart();
    ctx.emptyArray();
  };

  return (
    <Card onClick={onCardClick} className={styles.cart}>
      <Card className={styles.cartscrollable}>
        <ul>
          {ctx.cartState.cartItems.map((item) => (
            <CartItem key={uuid()} foodName={item.foodName} price={item.price} amount={item.amount} />
          ))}
        </ul>
      </Card>
      <div>
        <Container style={{ position: "absolute", bottom: "0" }}>
          <Row className="justify-content-between">
            <Col md="auto">
              <h4>Total Price: {ctx.cartState.cartTotalPrice.toFixed(2)}</h4>
            </Col>

            <Col md="auto">
              <button onClick={onOrderClicked} className="btn btn-primary" style={{ marginRight: "10px" }}>
                Order
              </button>
              <button onClick={props.onCloseCart} className="btn btn-primary" style={{ marginRight: "10px" }}>
                Close
              </button>
            </Col>
          </Row>
          <Row className="justify-content-end" style={{ marginBottom: "10px" }}></Row>
        </Container>
      </div>
    </Card>
  );
};

export default Cart;
