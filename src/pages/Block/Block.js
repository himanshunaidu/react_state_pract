import React, { Fragment, useState, useReducer } from "react";

import FilterGroup from "../../components/UI/FilterGroup/FilterGroup";
import CardsDisplay from "../../components/UI/CardsDisplay/CardsDisplay";

const Block = (props) => {
  return (
    <>
      <FilterGroup></FilterGroup>
      <CardsDisplay></CardsDisplay>
    </>
  );
};

export default Block;
