import { Container, Row, Col, Card } from "react-bootstrap";
import React, { useContext } from "react";
import CartContext from "../Contexts/cart-context";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const ctx = useContext(CartContext);

  const increaseAmount = () => {
    ctx.addCartItems(props.foodName, props.price, 1);
  };

  const decreaseAmount = () => {
    ctx.removeItem(props.foodName);
  };

  return (
    <React.Fragment>
      <Card style={{ margin: "5px", marginRight: "10px" }}>
        <Container>
          <Row>
            <Col>
              <h4>{props.foodName}</h4>
            </Col>
            <Col>
              <div style={{ marginTop: "15px" }}>
                <button onClick={increaseAmount} className={styles.button}>
                  +
                </button>
                <button onClick={decreaseAmount} className={styles.button}>
                  -
                </button>
              </div>
            </Col>
          </Row>
          <Row style={{ marginBottom: "5px" }}>
            <div style={{ display: "flex" }}>
              <div style={{ float: "left" }}>{props.price}</div>
              <Card style={{ float: "left", marginLeft: "80px" }}>
                <div>x {props.amount}</div>
              </Card>
            </div>
          </Row>
        </Container>
      </Card>
    </React.Fragment>
  );
};

export default CartItem;
