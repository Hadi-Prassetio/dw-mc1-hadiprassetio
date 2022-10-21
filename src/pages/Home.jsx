import React from "react";
import { Link } from "react-router-dom";
import Data from "../fakeData/Dummy";

export default function Home() {
  return (
    <div style={{ backgroundColor: "red" }}>
      {Data.map((item, index) => (
        <Link to={`/detail/${index}`} key={index}>
          <img src={item.image} alt='image' />
          <h4>@{item.name}</h4>
          <h6>{item.follower}</h6>
        </Link>
      ))}
    </div>
  );
}
