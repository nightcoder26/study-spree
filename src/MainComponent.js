import React, { useState } from "react";
import "./MainComponent.css";

const MainComponent = () => {
  return (
    <div className="main-component">
      <Sidebar />
      <CardsArea />
    </div>
  );
};
const Sidebar = () => {
  // return (
  //   <div className="side-bar">
  //     <h1 className="topic-head">Categories</h1>
  //     <Topic name="Statistics" />
  //     <Topic name="Geography" />
  //     <Topic name="History" />
  //     <Topic name="Biology" />
  //   </div>
  // );

  const [categories, setCategories] = useState([]);
  const [inpCategory, setInpCategory] = useState("");

  const handleAddCategory = () => {
    if (inpCategory !== "") {
      setCategories(categories.concat(inpCategory));
      setInpCategory("");
    }
  };
  return (
    <div className="side-bar">
      <h1 className="topic-head">Topics</h1>
      <ul className="topics">
        {categories.map((category, index) => (
          <li key={index}>
            <h3>{category}</h3>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={inpCategory}
          onChange={(e) => setInpCategory(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add</button>
      </div>
    </div>
  );
};

const CardsArea = () => {
  return (
    <div className="cards-area-main">
      {/* <button>Add Card</button> */}
      <div className="cards-area">
        <Card title="Mean" definition="Average" className="card" />
        <Card
          title="Median"
          definition="Middle most element"
          className="card"
        />
      </div>
    </div>
  );
};

// const Topic = (props) => {
//   return (
//     <div className="topic">
//       <p>{props.name}</p>
//     </div>
//   );
// };

const Card = (props) => {
  return (
    <div className="card">
      <div className="front">
        <h1>{props.title}</h1>
      </div>
      <div className="back">
        <h3>{props.definition}</h3>
      </div>
    </div>
  );
};
export default MainComponent;
