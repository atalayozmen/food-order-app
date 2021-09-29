import Card from "react-bootstrap/Card";
import MenuOption from "./MenuOption";
import styles from './Menu.module.css'
import React from "react";

const Menu = React.memo((props) => {
    const menuItems = [
        {
            foodName: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99
        },
        {
            foodName: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.50
        },
        {
            foodName: 'Adana Kebab',
            description: 'Adana Kebab with grilled vegetables',
            price: 18.00
        },
        {
          foodName: 'Fried Rice',
          description: 'Fried Rice with vegetables',
          price: 18.00
        },
        {
          foodName: 'Dumplings',
          description: 'Dumplings with meat and yoghurt',
          price: 18.00
        }
    ]

return (
    <Card className={styles.menu}>
    {menuItems.map((item) => <MenuOption key={Math.random()} foodName={item.foodName} description={item.description} price={item.price}></MenuOption>)}
      
    </Card>
  );
});

export default Menu;
