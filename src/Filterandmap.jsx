import React, { useState } from "react";
import Data from "./Data";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Filterandmap() {
  const [item, setItem] = useState(Data);
  const [category, setCategory] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setItem(Data.filter((list) => list.category === category));
  };
  const handleOrderNow = (listId) => {
    console.log(`Food ordered: ${listId}`);
    toast.success("Food Ordered successfully!");
  };
  return (
    <div className="main-container">
      <div className="search-container">
      <h1 id="head"> Food Express </h1>
        <form onSubmit={handleSearch} id="heading">
         

          {/* <input type='text' name='item' placeholder='item' value={item} onChange={(e)=>setItem(e.target.value)}/>  */}
          <input
            type="text"
            name="category"
            placeholder="Enter a category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
            <button id="two" type="submit">search</button>
        
        </form>
      </div>
      <div className="item-section">
        {item.map((list) => (
          <div className="item-container">
            <h4 id="one">{list.title}</h4>
            <img src={list.img} alt="data-image" />
            <div className="content">
              {/* <h3>{list.id}</h3> */}
              
              <h5 id="two">{list.category}</h5>
              <h6 id="three">{list.price}</h6>
              <div id="four">
                <p>{list.desc}</p>
              </div>
              <button
                  onClick={() => handleOrderNow(list.id)}
                  className="order-now-button"
                >
                  ORDER NOW
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filterandmap;