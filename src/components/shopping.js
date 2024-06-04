import axios from "axios";
import { useEffect, useState } from "react";

export default function Shoppping() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((e) => setData(e.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="shopping">
      <div className="con">
        {data.map((e) => (
          <div className="item">
            <p>Best Seller</p>
            <img src={e.image} alt="" />
            <div className="info">
              <p>{e.title}</p>
              <p>{e.description}</p>
              <div className="stars" style={{ display: "flex",color:"#656565" }}>
                <span class="material-symbols-outlined filled">grade</span>
                <span class="material-symbols-outlined filled">grade</span>
                <span class="material-symbols-outlined filled">grade</span>
                <span class="material-symbols-outlined filled">grade</span>
                <span class="material-symbols-outlined">grade</span>
              </div>
              <p>Options: <span>2 sizes</span></p>
              <p>${e.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
