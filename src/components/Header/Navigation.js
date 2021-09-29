import React from 'react';
import CartButton from '../Cart/CartButton';
import {Navbar, Container} from 'react-bootstrap'

const Navigation = React.memo(() => {

    return(
        <React.Fragment>
            <Navbar bg="primary">
                <Container>
                    <Navbar.Brand style={{color: "white"}} href="#home">ReactMeals</Navbar.Brand>
                    <CartButton></CartButton>
                </Container>
            </Navbar>
        </React.Fragment>
    )
})

export default Navigation
