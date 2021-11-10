import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import styles from "./CardsDisplay.module.css";

const CardsDisplay = (props) => {
  return (
    <div className={[styles.container].join(" ")}>
      {props.cardData.map((data, index) => {
        return (
          <Card
            className={[styles.card_display, "mb-2"].join(" ")}
            key={data.id}
            bg="primary"
            text="white"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title className={styles.card_title}>
                {data.title}
              </Card.Title>
              <Card.Text>{data.text}</Card.Text>
              <Card.Text>Version: {data.version}</Card.Text>
              <Button variant="light">Log Text</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

CardsDisplay.propTypes = {
  cardData: PropTypes.array.isRequired,
};

export default CardsDisplay;
