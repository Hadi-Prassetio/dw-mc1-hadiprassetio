import React from "react";
import { useParams, Link } from "react-router-dom";
import Data from "../fakeData/Dummy";

export default function HomeDetail() {
  const params = useParams();
  const data = Data[parseInt(params.id)];

  return (
    <div style={{ backgroundColor: "blue" }}>
      <img src={data.image} alt='image' />
      <h1>@{data.name}</h1>
      <h1>{data.follower}</h1>
      <Link to='/'>
        <p>back</p>
      </Link>
    </div>
  );
}
