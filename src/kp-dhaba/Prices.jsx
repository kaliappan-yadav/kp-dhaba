import React, { useContext, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { PriceContext } from "./context/priceContext";

const Prices = () => {
  const [mealIdInput, setMealIdInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const {price, setMealPrice } = useContext(PriceContext);
  console.log(price);
  return (
    <Container fluid className="text-center">
      <Row>
        <Container fluid className="mt-2">
          Enter meal ID:{" "}
          <input
            type="number"
            onChange={(e) => setMealIdInput(e.target.value)}
          />
        </Container>
      </Row>
      <Row>
        <Container fluid className="mt-4">
          Enter price:{" "}
          <input
            type="number"
            onChange={(e) => setPriceInput(e.target.value) }
          />
        </Container>
      </Row>
      <Row>
        <Container fluid className="mt-4">
          <Button onClick={() => setMealPrice(mealIdInput, priceInput) && console.log(price)}>
            Set Price
          </Button>
        </Container>
      </Row>
    </Container>
  );
};

export default Prices;