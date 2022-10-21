import React from "react";
import { useParams } from "react-router-dom";
import Data from "../fakeData/Dummy";

export default function HomeDetail() {
  const { id } = useParams();
  const data = Data[parseInt(index.id - 1)];

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}
