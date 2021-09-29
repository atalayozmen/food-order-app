import Description from "./Description";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "./cart-context";
import styles from './MenuOption.module.css'

const MenuOption = (props) => {
  const [amount, setAmount] = useState("1");
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountOnChangeHandler = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isNaN(amount) || amount.trim().length === 0) {
        setAmountIsValid(false);
      } else {
        setAmountIsValid(true);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [amount]);

  const onItemAddedHandler = (event) => {
    event.preventDefault();

    if (amountIsValid) ctx.addCartItems(props.foodName, props.price, +amount);
    else console.log("add proper value");
  };

  const ctx = useContext(CartContext);

  return (
    <React.Fragment>
      <form onSubmit={onItemAddedHandler}>
        <Container className={styles['option-container']}>
          <Row>
            <Col>
              <Description
                foodName={props.foodName}
                description={props.description}
                price={props.price}
              ></Description>
            </Col>
            <Col style={{ marginTop: "20px" }}>
              <Row>
                <Col>
                  <input
                    className={styles.input}
                    style={{backgroundColor: amountIsValid ? "white" : "#FFCCCC",}}
                    value={amount}
                    onChange={amountOnChangeHandler}
                  ></input>
                  <div style={{ float: "right" }}>Amount</div>
                </Col>
              </Row>
              <Row>
                <Col>
                { amountIsValid && <div style={{float: 'right', minHeight:"16px"}}> </div>}
                { !amountIsValid && <div style={{float: 'right', color: "#FFCCCC"}}> Please enter a valid amount</div>}
                </Col>
              </Row>
              <Row>
                <Col>
                  <button
                    className={styles.button}
                    type="submit"
                  >
                    {" "}
                    +Add{" "}
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </form>
    </React.Fragment>
  );
};

export default MenuOption;
