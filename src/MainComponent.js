import React, { useState } from "react";
import "./MainComponent.css";

const MainComponent = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(-1);
  const [cards, setCards] = useState({});

  const addTopic = (newTopic) => {
    setTopics([...topics, newTopic]);
  };
  const addCard = () => {
    const front = prompt("Enter Front Value:");
    const back = prompt("Enter Back Value:");

    if (front !== "" && back !== "") {
      const newCard = { front, back };
      const updatedCards = { ...cards };
      if (topics[selectedTopic] !== "") {
        if (!updatedCards[topics[selectedTopic]]) {
          updatedCards[topics[selectedTopic]] = []; // Initialize an empty array if it doesn't exist
        }
        updatedCards[topics[selectedTopic]].push(newCard); // Add the new card to the array
        setCards(updatedCards);
      }
    }
  };

  // console.log("topics", topic);

  return (
    <div className="main-component">
      <div className="bar-and-cardarea">
        <Sidebar
          addTopic={addTopic}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
        {topics.map(
          (topic, index) =>
            selectedTopic === index && (
              <CardsArea
                key={index}
                topic={topic}
                addCard={addCard}
                cards={cards}
              />
            )
        )}
      </div>
    </div>
  );
};
const Sidebar = ({ addTopic, selectedTopic, setSelectedTopic }) => {
  const [categories, setCategories] = useState([]);
  const [inpCategory, setInpCategory] = useState("");
  // const [clickedTopics, setClickedTopics] = useState(
  //   Array(categories.length).fill(false)
  // );

  const handleAddCategory = () => {
    if (inpCategory !== "") {
      setCategories(categories.concat(inpCategory));
      setInpCategory("");
      addTopic(inpCategory);
    }
  };

  // const handleClick = (index) => {
  //   const updatedClickedTopics = [...clickedTopics];
  //   updatedClickedTopics[index] = !updatedClickedTopics[index];
  //   setClickedTopics(updatedClickedTopics);
  // };

  const handleClick = (index) => {
    if (selectedTopic === index) {
      setSelectedTopic(-1);
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
            className={`topic ${selectedTopic === index ? "clicked" : ""}`}
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

const CardsArea = ({ topic, addCard, cards }) => {
  const topicCards = cards[topic] || [];

  return (
    <div className="cards-area-main">
      <div className="add-button">
        <button onClick={addCard}>Add Card</button>
      </div>
      <div className="cards">
        {topicCards.map((card, index) => (
          <Card key={index} front={card.front} back={card.back} />
        ))}
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

const Card = ({ front, back }) => {
  return (
    <div className="card">
      <div className="front">
        <h2>{front}</h2>
      </div>
      <div className="back">
        <h2>{back}</h2>
      </div>
    </div>
  );
};
export default MainComponent;
