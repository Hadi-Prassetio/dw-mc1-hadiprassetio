import React from "react";
import { useParams, Link } from "react-router-dom";
import Data from "../fakeData/Dummy";

export default function HomeDetail() {
  const params = useParams();
  const data = Data[parseInt(params.id)];

  return (
    <div>
      <div
        style={{
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={data.image} alt='image' width={100} />
          </div>
          <h1>@{data.username}</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>{data.follower}</h1>
            <h1>{data.follower}</h1>
          </div>
          <h1>Follower - Following</h1>
        </div>
      </div>
      <Link to='/' style={{ display: "flex", justifyContent: "center" }}>
        <p>back</p>
      </Link>
    </div>
  );
}
