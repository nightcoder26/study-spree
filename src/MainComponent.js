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
  const [categories, setCategories] = useState([]);
  const [inpCategory, setInpCategory] = useState("");
  const [clickedTopics, setClickedTopics] = useState(
    Array(categories.length).fill(false)
  );
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleAddCategory = () => {
    if (inpCategory !== "") {
      setCategories(categories.concat(inpCategory));
      setInpCategory("");
    }
  };

  // const handleClick = (index) => {
  //   const updatedClickedTopics = [...clickedTopics];
  //   updatedClickedTopics[index] = !updatedClickedTopics[index];
  //   setClickedTopics(updatedClickedTopics);
  // };

  const handleClick = (index) => {
    if (selectedTopic === index) {
      setSelectedTopic(null);
    } else {
      setSelectedTopic(index);
    }
  };

  return (
    <div className="side-bar">
      <h1 className="topic-head" align="center">
        Topics
      </h1>
      <ul className="topics" align="center">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`topic ${selectedTopic == index ? "clicked" : ""}`}
            onClick={() => handleClick(index)}
          >
            <h3>{category}</h3>
          </li>
        ))}
      </ul>
      <div align="center">
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
  // return (
  //   <div className="card">
  //     <div className="front">
  //       <h1>{props.title}</h1>
  //     </div>
  //     <div className="back">
  //       <h3>{props.definition}</h3>
  //     </div>
  //   </div>
  // );
};
export default MainComponent;
