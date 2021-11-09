import React, { Fragment, useState } from "react";
import { Card, Button } from "react-bootstrap";

import styles from "./CardsDisplay.module.css";

const CardsDisplay = (props) => {
  return (
    <>
      <Card className={styles.card_display} style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardsDisplay;
