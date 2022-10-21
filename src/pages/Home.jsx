import React from "react";
import { Link } from "react-router-dom";
import Data from "../fakeData/Dummy";

export default function Home() {
  return (
    <div style={{ margin: "2rem" }}>
      {Data.map((item, index) => (
        <Link to={`/detail/${index}`} key={index}>
          <div
            style={{
              display: "flex",
              marginBottom: "10px",
              backgroundColor: "red",
            }}>
            <img src={item.image} alt='image' width={100} />
            <div>
              <h4>@{item.username}</h4>
              <h6>Follower : {item.follower}</h6>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
