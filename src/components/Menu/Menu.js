import Card from "react-bootstrap/Card";
import MenuOption from "./MenuOption";
import styles from "./Menu.module.css";
import React from "react";
import uuid from 'react-uuid'

const Menu = React.memo((props) => {
  const menuItems = [
    {
      foodName: "Fried Rice",
      description: "Fried Rice with vegetables",
      price: 18.99,
    },
    {
      foodName: "Dumplings",
      description: "Dumplings with meat and yoghurt",
      price: 15.49,
    },
    {
      foodName: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      foodName: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      foodName: "Adana Kebab",
      description: "Adana Kebab with grilled vegetables",
      price: 31.99,
    },
  ];

  return (
    <Card className={styles.menu}>
      {menuItems.map((item) => (
        <MenuOption key={uuid()} foodName={item.foodName} description={item.description} price={item.price}></MenuOption>
      ))}
    </Card>
  );
});

export default Menu;
