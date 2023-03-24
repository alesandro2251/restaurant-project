import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./menu.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Pasta",
      description: "Spaghetti with tomato sauce and meatballs",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMJZ3B-dgi8yaHdPcrGqfXOpV8pJqIhhpGMEprp=s680-w680-h510",
      price: 10,
    },
    {
      id: 2,
      name: "Pizza",
      description: "Pepperoni pizza with tomato sauce and mozzarella cheese",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOxQRyzGuhkY9glBh1GjHx_aki-HS--T1FS3RBT=s680-w680-h510",
      price: 12,
    },
    {
      id: 3,
      name: "Burger",
      description:
        "Beef patty with lettuce, tomato, and pickles on a sesame seed bun",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOh7rxLjZBcjshYLXyJwv6-U7ku-cXpiPxC0i7n=s680-w680-h510",
      price: 8,
    },
    {
      id: 4,
      name: "Salad",
      description:
        "Mixed greens with tomatoes, cucumbers, and vinaigrette dressing",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMJZ3B-dgi8yaHdPcrGqfXOpV8pJqIhhpGMEprp=s680-w680-h510",
      price: 6,
      
    },
  ]);

  return (
    <Container id="menu">
      <h1 className="text-center my-5 menu-title">Bests in Menu</h1>
      <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4">
        {menuItems.map((item) => (
          <Col key={item.id}>
            <Card className="menu-item">
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="price">${item.price}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <p className="text-center my-3 p-tags">
        All our dishes are made with fresh, locally-sourced ingredients.
      </p>
      <p className="text-center p-tags">
        Contact us to make a reservation or place an order for pickup or
        delivery.
      </p>
    </Container>
  );
};

export default Menu;
