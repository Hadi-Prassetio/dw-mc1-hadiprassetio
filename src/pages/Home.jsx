import React from "react";
import { Link } from "react-router-dom";
import Data from "../fakeData/Dummy";

export default function Home() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>Test</h1>
      {Data.map((item, index) => (
        <Link key={index}>
          <img src={item.image} alt='image' />
          <h4>@{item.name}</h4>
          <h6>{item.follower}</h6>
        </Link>
      ))}
    </div>
  );
}
