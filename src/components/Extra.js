import React from "react";
import { useParams } from "react-router-dom";

export const Extra = () => {
  const { id } = useParams();
  return <div>Extra {id}</div>;
};
